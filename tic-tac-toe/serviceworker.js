self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('v1.3').then(function(cache) {
        return cache.addAll([
          '/tic-tac-toe',
          '/tic-tac-toe/game-en.aspx',
          '/tic-tac-toe/scripts/game.js',
          '/tic-tac-toe/css/style.css',
          '/tic-tac-toe/assets/icons/hamburger_icon.svg',
          '/tic-tac-toe/assets/favicons/favicon.ico',
          '/tic-tac-toe/assets/favicons/android-chrome-192x192.png',
          '/tic-tac-toe/assets/favicons/android-chrome-512x512.png',
          '/tic-tac-toe/assets/favicons/apple-touch-icon.png',
          '/tic-tac-toe/assets/favicons/favicon-16x16.png',
          '/tic-tac-toe/assets/favicons/favicon-32x32.png',
          '/tic-tac-toe/site.webmanifest'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
  const deleteCache = async (key) => {
    await caches.delete(key);
  };
  
  const deleteOldCaches = async () => {
    const cacheKeepList = ["v1.3"];
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(cachesToDelete.map(deleteCache));
  };
  
  self.addEventListener("activate", (event) => {
    event.waitUntil(deleteOldCaches());
  });
  