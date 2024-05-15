import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/favicon_72-72.png',
  './icons/favicon_96-96.png',
  './icons/favicon_128-128.png',
  './icons/favicon_144-144.png',
  './icons/favicon_152-152.png',
  './icons/favicon_192-192.png',
  './icons/favicon_384-384.png',
  './icons/favicon_512-512.png',
  './icons/favicon_1920-1140.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
