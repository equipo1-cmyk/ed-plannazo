// Service worker mínimo: guarda la app para que abra sin conexión.
// Cambia VERSION cada vez que publiquemos cambios en la app.
const VERSION = "plannazo-v3";
const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "../fonts/poppins-400.woff2",
  "../fonts/poppins-600.woff2",
  "../fonts/poppins-800.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((claves) => Promise.all(claves.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Primero la red (para ver siempre lo último) y, si no hay conexión, la copia guardada.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        const copia = r.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copia));
        return r;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
