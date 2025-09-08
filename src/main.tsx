import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { swManager } from './lib/serviceWorker'

// Initialize Service Worker for offline capability - TEMPORARILY DISABLED
// swManager;

// Unregister any existing service workers to prevent caching issues
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
      console.log('Service Worker unregistered');
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
