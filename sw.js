self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('kevin-blog').then(cache => {
      return cache.addAll([
        `/`,
        `/#blog`,
        `/css/font.min.css`,
        `/css/animate.min.css`,
        `/css/monokai.min.css`,
        `/js/umbrella.min.js`,
        `/js/hightlight.min.js`
      ])
      .then(() => self.skipWaiting());
    })
  )
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
