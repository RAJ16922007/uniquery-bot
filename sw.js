const cacheName = 'vksu-v1';
const staticAssets = ['./index.html', './manifest.json'];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
