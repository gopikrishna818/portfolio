// Service Worker for Portfolio Offline Capability
const CACHE_NAME = 'portfolio-v1.0.0';
const STATIC_CACHE = 'portfolio-static-v1.0.0';
const DYNAMIC_CACHE = 'portfolio-dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/ironman-favicon.svg',
  '/robots.txt'
];

// API endpoints to cache
const API_CACHE_PATTERNS = [
  /^https:\/\/api\.github\.com/,
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different types of requests
  if (request.method === 'GET') {
    if (request.destination === 'document') {
      // HTML documents - network first, cache fallback
      event.respondWith(networkFirstStrategy(request));
    } else if (request.destination === 'image') {
      // Images - cache first, network fallback
      event.respondWith(cacheFirstStrategy(request));
    } else if (isAPIRequest(request)) {
      // API requests - network first with timeout, cache fallback
      event.respondWith(networkFirstWithTimeoutStrategy(request));
    } else {
      // Other assets - cache first
      event.respondWith(cacheFirstStrategy(request));
    }
  }
});

// Network first strategy (for HTML documents)
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, serving from cache:', request.url);
    const cachedResponse = await caches.match(request);
    return cachedResponse || caches.match('/index.html');
  }
}

// Cache first strategy (for assets)
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Failed to fetch:', request.url);
    return new Response('Offline fallback', { status: 503 });
  }
}

// Network first with timeout (for API requests)
async function networkFirstWithTimeoutStrategy(request, timeout = 3000) {
  try {
    const networkResponse = await Promise.race([
      fetch(request),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Network timeout')), timeout)
      )
    ]);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network/timeout failed, serving from cache:', request.url);
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response(
      JSON.stringify({ error: 'Offline mode', cached: false }), 
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 503 
      }
    );
  }
}

// Check if request is for API
function isAPIRequest(request) {
  return API_CACHE_PATTERNS.some(pattern => pattern.test(request.url));
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Sync contact form submissions when back online
async function syncContactForm() {
  try {
    const db = await openDB();
    const pendingForms = await getAllPendingForms(db);
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form.data)
        });
        
        if (response.ok) {
          await deletePendingForm(db, form.id);
          console.log('[SW] Contact form synced successfully');
        }
      } catch (error) {
        console.log('[SW] Failed to sync contact form:', error);
      }
    }
  } catch (error) {
    console.log('[SW] Background sync failed:', error);
  }
}

// Show notification when offline
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'OFFLINE_NOTIFICATION') {
    self.registration.showNotification('Portfolio Offline', {
      body: 'You are now browsing in offline mode. Some features may be limited.',
      icon: '/ironman-favicon.svg',
      badge: '/ironman-favicon.svg',
      tag: 'offline-mode'
    });
  }
});

console.log('[SW] Service Worker loaded successfully');
