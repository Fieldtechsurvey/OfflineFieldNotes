const CACHE='fieldtech-ohl-v7-network-first';
const ASSETS=['./','./index.html','./style.css?v=7','./app.js?v=7','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
 event.respondWith((async()=>{
   const cache=await caches.open(CACHE);
   try {
     const response=await fetch(event.request);
     if(response.ok)await cache.put(event.request,response.clone());
     return response;
   } catch(error) {
     const cached=await caches.match(event.request);
     if(cached)return cached;
     if(event.request.mode==='navigate'){
       const fallback=await caches.match('./index.html');if(fallback)return fallback;
     }
     throw error;
   }
 })());
});
