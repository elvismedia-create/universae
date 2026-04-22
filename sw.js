// CONSOLIDACIÓN FINAL v67.30 - 10 Temas + FV U1-U8 (1206 preguntas)
const BUILD_TIMESTAMP = '20260414071000'; // 10 temas pestana1 + TEMA_FV_U1-U8
const CACHE_NAME = `mastertest-v67.30-${BUILD_TIMESTAMP}`;

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
  './data-config.js',
  './fotometria.js',
  './caida-tension.js',
  './simbolo-master.js',
  './manifest.json',
];

// INSTALACIÓN: FORZAR inmediatamente
self.addEventListener('install', (e) => {
  console.log('🔥🔥🔥 FORZANDO actualización NUCLEAR v67.24...');
  console.log('📦 Cache:', CACHE_NAME);
  
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => {
        console.log('✅ Assets cacheados');
        return self.skipWaiting();
      })
  );
});

// ACTIVACIÓN: ELIMINAR TODO
self.addEventListener('activate', (e) => {
  console.log('🗑️🗑️🗑️ LIMPIEZA NUCLEAR v67.24...');
  
  e.waitUntil(
    caches.keys()
      .then(keyList => {
        console.log('📋 Cachés:', keyList);
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME) {
              console.log('❌ Eliminando:', key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll())
      .then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'FORCE_RELOAD_NOW',
            version: 'v67.24'
          });
        });
      })
  );
});

// FETCH: Network first para HTML
self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('.html') || e.request.url.endsWith('/')) {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request)
        .then(response => response || fetch(e.request))
    );
  }
});

// Mensajes
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
