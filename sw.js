const CACHE_NAME = 'excel-functions-v2.6';
const urlsToCache = [
  './',
  './index.html',
  './data.js',
  './icon-192.png',
  './icon-512.png',
  './Vazirmatn.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});