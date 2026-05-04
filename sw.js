// v67.42 - Simulacros semestrales con opciones en orden fijo (igual que la academia) + Simulacro Inglés Profesional añadido
const BUILD_TIMESTAMP = '20260504230000'; // Opciones fijas en simulacros semestrales + card Inglés
const CACHE_NAME = `mastertest-v67.42-${BUILD_TIMESTAMP}`;

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './motor.js',
  './data-temas.js',
  './data-especial.js',
  './data-fv-u1.js',
  './data-fv-u2.js',
  './data-fv-u3.js',
  './data-fv-u4.js',
  './data-fv-u5.js',
  './data-fv-u6.js',
  './data-fv-u7.js',
  './data-fv-u8.js',
  './data-empleabilidad-u1.js',
  './data-empleabilidad-u2.js',
  './data-empleabilidad-u3.js',
  './data-empleabilidad-u4.js',
  './data-empleabilidad-u5.js',
  './data-empleabilidad-u6.js',
  './data-examen-semestral-instalaciones-electricas-interiores.js',
  './data-examen-semestral-fotovoltaica.js',
  './data-examen-semestral-empleabilidad.js',
  './data-examen-semestral-ingles-profesional.js',
  './data-ingles-professional-u1.js',
  './data-ingles-professional-u2.js',
  './data-ingles-professional-u3.js',
  './data-ingles-professional-u4.js',
  './data-ingles-professional-u5.js',
  './data-ingles-professional-u6.js',
  './data-config.js',
  './fotometria.js',
  './caida-tension.js',
  './simbolo-master.js',
  './manifest.json',
  './img/universae-logo.svg',
];

// INSTALACIÓN: FORZAR inmediatamente
self.addEventListener('install', (e) => {
  console.log('🔥🔥🔥 FORZANDO actualización NUCLEAR v67.41...');
  console.log('📦 Cache:', CACHE_NAME);

  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Intentar agregar todos los assets, pero continuar si alguno falla
        return Promise.allSettled(ASSETS_TO_CACHE.map(url =>
          fetch(url).then(res => res.ok ? cache.put(url, res) : Promise.reject(url))
        )).then(() => cache);
      })
      .then(() => {
        console.log('✅ Assets cacheados (v67.41 + Real Exams)');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('❌ Error en instalación:', err);
        return self.skipWaiting();
      })
  );
});

// ACTIVACIÓN: ELIMINAR TODO
self.addEventListener('activate', (e) => {
  console.log('🗑️🗑️🗑️ LIMPIEZA NUCLEAR v67.41...');

  e.waitUntil(
    caches.keys()
      .then(keyList => {
        console.log('📋 Cachés encontrados:', keyList);
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME) {
              console.log('❌ Eliminando caché antiguo:', key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll())
      .then(clients => {
        console.log('✅ Service Worker v67.41 activado - notificando', clients.length, 'clientes');
        clients.forEach(client => {
          client.postMessage({
            type: 'FORCE_RELOAD_NOW',
            version: 'v67.41'
          });
        });
      })
      .catch(err => {
        console.error('❌ Error en activación:', err);
      })
  );
});

// FETCH: Estrategia mejorada con fallbacks
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  const isHTML = e.request.url.includes('.html') || url.pathname.endsWith('/');
  const isAsset = /\.(js|css|json|woff|woff2|ttf)$/i.test(url.pathname);
  const isImage = /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(url.pathname);

  // HTML: Network first (siempre intenta actualizar)
  if (isHTML) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, res.clone()));
            return res;
          }
          return caches.match(e.request) || res;
        })
        .catch(() => {
          return caches.match(e.request).then(res => {
            if (res) return res;
            // Fallback si todo falla
            return new Response('<h1>Offline - sin conexión</h1>', {
              headers: { 'Content-Type': 'text/html' }
            });
          });
        })
    );
  }
  // JS/CSS/Data: Cache first pero actualizar en background
  else if (isAsset) {
    e.respondWith(
      caches.match(e.request)
        .then(response => {
          // Servir desde caché si existe
          if (response) return response;

          // Si no está en caché, intentar red
          return fetch(e.request).then(res => {
            if (res.ok) {
              caches.open(CACHE_NAME).then(cache => cache.put(e.request, res.clone()));
            }
            return res;
          }).catch(() => {
            console.warn('⚠️ No se pudo cargar asset:', url.pathname);
            return new Response('', { status: 404 });
          });
        })
    );
  }
  // Imágenes: Cache first indefinido
  else if (isImage) {
    e.respondWith(
      caches.match(e.request)
        .then(response => response || fetch(e.request).then(res => {
          if (res.ok) caches.open(CACHE_NAME).then(c => c.put(e.request, res.clone()));
          return res;
        }))
        .catch(() => {
          // Imagen placeholder si falla
          return new Response('', { status: 404 });
        })
    );
  }
  // Otros: Network first
  else {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  }
});

// Mensajes
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
