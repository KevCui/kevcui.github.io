var CACHE_NAME = 'kevin-site';
var urlsToCache = [
    '/',
    '/#blog',
    '/css/font.min.css',
    '/css/animate.min.css',
    '/css/monokai.min.css',
    '/js/umbrella.min.js',
    '/js/highlight.min.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
