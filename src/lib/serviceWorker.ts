// Service Worker Registration and Management
export class ServiceWorkerManager {
  private registration: ServiceWorkerRegistration | null = null;
  private isOnline = navigator.onLine;

  constructor() {
    this.init();
    this.setupOnlineOfflineHandlers();
  }

  private async init() {
    if ('serviceWorker' in navigator) {
      try {
        this.registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });

        console.log('Service Worker registered successfully:', this.registration);

        // Handle updates
        this.registration.addEventListener('updatefound', () => {
          this.handleServiceWorkerUpdate();
        });

        // Check for existing service worker
        if (this.registration.active) {
          console.log('Service Worker is active and ready');
        }

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    } else {
      console.log('Service Worker not supported');
    }
  }

  private handleServiceWorkerUpdate() {
    if (!this.registration) return;

    const newWorker = this.registration.installing;
    if (!newWorker) return;

    newWorker.addEventListener('statechange', () => {
      if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
        // New update available
        this.showUpdateNotification();
      }
    });
  }

  private showUpdateNotification() {
    // You can integrate this with your toast system
    if (window.confirm('New version available! Reload to update?')) {
      window.location.reload();
    }
  }

  private setupOnlineOfflineHandlers() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      console.log('Back online');
      this.showOnlineStatus();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      console.log('Gone offline');
      this.showOfflineStatus();
    });
  }

  private showOfflineStatus() {
    // Send message to service worker to show notification
    if (this.registration?.active) {
      this.registration.active.postMessage({
        type: 'OFFLINE_NOTIFICATION'
      });
    }

    // Show in-app offline indicator
    this.createOfflineIndicator();
  }

  private showOnlineStatus() {
    // Remove offline indicator
    this.removeOfflineIndicator();
  }

  private createOfflineIndicator() {
    const existing = document.getElementById('offline-indicator');
    if (existing) return;

    const indicator = document.createElement('div');
    indicator.id = 'offline-indicator';
    indicator.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(90deg, #ff6b6b, #ee5a24);
        color: white;
        padding: 8px 16px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      ">
        📡 You're offline - Some features may be limited
      </div>
    `;
    document.body.appendChild(indicator);
  }

  private removeOfflineIndicator() {
    const indicator = document.getElementById('offline-indicator');
    if (indicator) {
      indicator.remove();
    }
  }

  // Public methods
  public isOffline(): boolean {
    return !this.isOnline;
  }

  public async cacheResource(url: string): Promise<boolean> {
    if (!('caches' in window)) return false;

    try {
      const cache = await caches.open('portfolio-dynamic-v1.0.0');
      await cache.add(url);
      return true;
    } catch (error) {
      console.error('Failed to cache resource:', error);
      return false;
    }
  }

  public async getCachedResource(url: string): Promise<Response | null> {
    if (!('caches' in window)) return null;

    try {
      return await caches.match(url);
    } catch (error) {
      console.error('Failed to get cached resource:', error);
      return null;
    }
  }

  public async clearCache(): Promise<boolean> {
    if (!('caches' in window)) return false;

    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      return true;
    } catch (error) {
      console.error('Failed to clear cache:', error);
      return false;
    }
  }
}

// Export singleton instance
export const swManager = new ServiceWorkerManager();
