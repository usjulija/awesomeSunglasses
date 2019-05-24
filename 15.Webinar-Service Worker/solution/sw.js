let cacheName = "awesome-sunglasses-v1";
let urlsToCache = [
  '/',
  'index.html',
  'css/styles.css',
  'images/beauty.jpg',
  'images/chance.jpg',
  'images/dreams.jpg',
  'images/fun.jpg',
  'images/happiness.jpg',
  'images/inspiration.jpg',
  'images/journey.jpg',
  'images/joy.jpg',
  'images/mapbox-icon.png',
  'images/motivation.jpg',
  'js/app.js'
];

self.addEventListener("install", function(event) {
  console.log("SERVICE WORKER: Install event in progress");
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      console.log("SERVICE WORKER: Opens cache");
      return cache.addAll(urlsToCache);
    })
    .then(function() {
      console.log("SERVICE WORKER: Install completed");
    })
  );
});

self.addEventListener("fetch", function(event) {
  console.log("SERVICE WORKER: Fetch event in progress");
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(
        function(response) {
          let responseToCache = response.clone();
          caches.open(cacheName)
          .then(function(cache) {
            cache.put(event.request, responseToCache);
          });
          return response;
        }
      );
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      cacheNames.map(function(cName) {
        if(cName.indexOf(cacheName) < 0) {
          return caches.delete(cName);
        }
      });
    });
  );
});
