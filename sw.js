const CACHE = 'mpm-v5';
const SHELL = [
  './index.html','./styles.css','./_ds_bundle.js','./manifest.webmanifest',
  './app/exercices.js','./app/mpm-app.jsx',
  './assets/logo/madeleine-logo-transparent.png',
  './assets/icons/madeleine-gold.png','./assets/icons/madeleine-blue.png',
  './assets/app-icon-192.png','./assets/app-icon-512.png','./assets/apple-touch-icon-180.png',
  'https://unpkg.com/react@18.3.1/umd/react.development.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js',
  'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js'
];
// Toujours pris sur le réseau en premier : le contenu qui change (exercices, code, page).
const FRAIS = /(index\.html|exercices\.js|mpm-app\.jsx|styles\.css|_ds_bundle\.js|\/$)/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'maintenant') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const memeSite = req.url.startsWith(self.location.origin);

  if (memeSite && FRAIS.test(new URL(req.url).pathname)) {
    // réseau d'abord, cache en secours (hors ligne)
    e.respondWith(
      fetch(req).then(r => {
        if (r && r.ok) { const copie = r.clone(); caches.open(CACHE).then(c => c.put(req, copie)); }
        return r;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // le reste (sons, images, polices, librairies) : cache d'abord, c'est immuable
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r && r.ok && (memeSite || /fonts\.gstatic|fonts\.googleapis|unpkg\.com/.test(req.url))) {
        const copie = r.clone(); caches.open(CACHE).then(c => c.put(req, copie));
      }
      return r;
    }).catch(() => caches.match('./index.html')))
  );
});
