self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("arretados-cache").then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/compra.html",
        "/confirmacao.html"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});