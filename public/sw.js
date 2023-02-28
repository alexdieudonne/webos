const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {

  event.waitUntil(
    fetch("manifest.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return addResourcesToCache([
        "/",
        "/index.html",
        data['index.html']['css'][0],
        data['index.html']['file'],
        "/css/calculator.css",
        "/css/clock.css",
        "/css/global.css",
        "/css/home.css",
        "/css/lock.css",
        "/css/settings.css",
        "/css/tictactoe.css",
        "https://jsonplaceholder.typicode.com/todos/1",
        "/img/Battery-full.png",
        "/img/Battery.png", 
        "/img/Show.png", 
        "/img/ClockBackground.webp", 
        "/img/Photo.png",
        "/img/Phone.png", 
        "/img/Network.png", 
        "/img/Battery-low.png",
        "/img/Refresh.png", 
        "/img/Fingerprint.svg", 
        "/img/icons/settings-light.svg", 
        "/img/icons/tictactoe.svg", 
        "/img/icons/settings.png", 
        "/img/icons/settings.svg", 
        "/img/icons/browser.svg", 
        "/img/icons/clock.svg", 
        "/img/icons/calculator.svg", 
        "/img/icons/safari.png",
        "/img/Background.png",
        "/img/icons/sun.png",
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80",
        "https://images.pexels.com/photos/1743366/pexels-photo-1743366.jpeg?auto=compress&cs=tinysrgb",
        "https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap",
        " https://ipapi.co/json/",
      ]);
    })
    .catch((error) => {
      console.error('Error caching resources:', error);
    })
  );
});


const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
