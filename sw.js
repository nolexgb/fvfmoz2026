/* Visita Mozambique 2026 — only this project's local assets are cached.
   Change VERSION whenever HTML, CSS, JS, data or icons change. */
'use strict';
const VERSION = '2026.09.15.1';
const ROOT = new URL('./', self.location.href).href;
const PREFIX = 'fvf-visita-moz2026-' + encodeURIComponent(ROOT) + '-';
const CACHE = PREFIX + VERSION;
const FILES = ['index.html','style.css','data.js','app.js','manifest.webmanifest','icon.svg'];
const URLS = FILES.map(file=>new URL(file,ROOT).href);
const ALLOWED = new Set(URLS);
async function complete() {
  const cache=await caches.open(CACHE);
  const checks=await Promise.all(URLS.map(url=>cache.match(url)));
  return checks.every(response=>response && response.ok);
}
async function prepare() {
  if(await complete())return;
  const cache=await caches.open(CACHE);
  // addAll is atomic: one failed file does not create a false ready state.
  await cache.addAll(URLS.map(url=>new Request(url,{cache:'reload'})));
  if(!await complete())throw new Error('No se han guardado todos los archivos.');
}
self.addEventListener('install',event=>event.waitUntil((async()=>{
  await prepare();await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  if(!await complete())throw new Error('Copia incompleta: se conserva la versión anterior.');
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  const root=new URL(ROOT);
  if(url.origin!==root.origin)return; // No Google, CARTO or OSM tile downloads.
  const canonical=url.origin+url.pathname;
  const isRoot=canonical===ROOT || canonical===new URL('index.html',ROOT).href;
  if(event.request.mode==='navigate'&&isRoot){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE);
      const saved=await cache.match(new URL('index.html',ROOT).href);
      return saved || fetch(event.request);
    })());return;
  }
  if(!ALLOWED.has(canonical))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const saved=await cache.match(canonical);
    return saved || fetch(event.request);
  })());
});
self.addEventListener('message',event=>{
  if(!event.ports||!event.ports[0])return;
  const port=event.ports[0];
  event.waitUntil((async()=>{
    try {
      if(event.data.type==='SAVE_OFFLINE')await prepare();
      if(event.data.type==='SAVE_OFFLINE'||event.data.type==='OFFLINE_STATUS')port.postMessage({ok:true,ready:await complete(),version:VERSION,files:FILES.length});
      else port.postMessage({ok:false,error:'Solicitud no reconocida.'});
    }catch(error){port.postMessage({ok:false,error:'No se pudo guardar la guía completa. Comprueba la conexión y vuelve a intentarlo.'});}
  })());
});
