// Service worker: «red primero».
// Siempre descarga la última versión de la web; la copia guardada solo se usa sin conexión.
// Cambia VERSION cuando cambie la lista de ARCHIVOS.
const VERSION = "plannazo-v6";
const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./img/logo.png",
  "../fonts/poppins-400.woff2",
  "../fonts/poppins-600.woff2",
  "../fonts/poppins-800.woff2"
];

// La versión nueva se activa en cuanto se instala, sin esperar a cerrar la app.
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).catch(() => {}));
});

// Borra las copias antiguas y toma el control de las pestañas abiertas.
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Red primero: pide siempre al servidor (saltándose la caché HTTP del navegador),
// guarda una copia y, si no hay conexión, sirve la copia guardada.
self.addEventListener("fetch", (e) => {
  const peticion = e.request;
  if (peticion.method !== "GET" || new URL(peticion.url).origin !== location.origin) return;
  e.respondWith(
    fetch(peticion, { cache: "no-store" })
      .then((respuesta) => {
        if (respuesta.ok) {
          const copia = respuesta.clone();
          caches.open(VERSION).then((c) => c.put(peticion, copia));
        }
        return respuesta;
      })
      .catch(() =>
        caches.match(peticion, { ignoreSearch: true }).then(
          (guardada) => guardada || (peticion.mode === "navigate" ? caches.match("./index.html") : Response.error())
        )
      )
  );
});
