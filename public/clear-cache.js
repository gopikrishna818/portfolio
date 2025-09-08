// Clear service worker cache
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
      console.log('Service Worker unregistered:', registration);
    }
  });
}

// Clear all caches
if ('caches' in window) {
  caches.keys().then(names => {
    names.forEach(name => {
      caches.delete(name);
      console.log('Cache deleted:', name);
    });
  });
}

console.log('Cache clearing complete. Please refresh the page.');
