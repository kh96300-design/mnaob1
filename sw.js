const CACHE_NAME = 'jaad-school-v2';
const ASSETS = [
  '/',
  'Index.html',
  'code.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap'
];

// تثبيت التطبيق وتخزين الملفات
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// تفعيل التطبيق وجلب الملفات المخزنة عند انقطاع الإنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
