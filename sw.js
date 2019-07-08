var CACHE_NAME = 'kevin-site-1562614267';
var urlsToCache = [
    '/',
    '/#blog',
    '/css/font.min.css',
    '/css/animate.min.css',
    '/css/dracula.min.css',
    '/css/inter-ui.min.css',
    '/css/syntax.min.css',
    '/css/resume.min.css',
    '/css/uno.min.css',
    '/js/main.min.js',
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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
