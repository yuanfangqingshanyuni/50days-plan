importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');
workbox.routing.registerRoute(
  ({request}) => request.destination === 'document' ||
                request.destination === 'style'  ||
                request.destination === 'script' ||
                request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate()
);