self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('kevin-blog').then(cache => {
      return cache.addAll([
        `/`,
        `/#blog`,
        `/css/uno.min.css`,
        `/css/font.min.css`,
        `/css/resume.min.css`,
        `/js/jquery.min.js`,
        `/js/main.min.js`,
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
