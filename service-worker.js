self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('arretados-cache').then(cache => {
      return cache.addAll([
        './index.html',
        './compra.html',
        './pagamento.html',
        './confirmacao.html',
        './historico.html',
        './logo-arretados.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
