importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08aa7839f6ff58c9f484.js",
    "revision": "b3eca3b3fc0295c9a6e012daec477e79"
  },
  {
    "url": "/_nuxt/1999bb1911c12f98e5a3.js",
    "revision": "8c0e39640ca51026331056f5f4431ad5"
  },
  {
    "url": "/_nuxt/3743ab1a37d44eeaf304.js",
    "revision": "61b7570e7daac18dc41341513e393f7b"
  },
  {
    "url": "/_nuxt/3b8e0664504343a9749b.js",
    "revision": "608417f40c08fe70514be68270ecf3f3"
  },
  {
    "url": "/_nuxt/425d186550efe5c7ca64.js",
    "revision": "fcea07681c298437915e70673dd79847"
  },
  {
    "url": "/_nuxt/493ed903d18339acae8b.js",
    "revision": "770421a251ffafa5977123b9d634a4bb"
  },
  {
    "url": "/_nuxt/599976ad4812526a2cee.js",
    "revision": "46209cd300974f370e3eaf39313033ce"
  },
  {
    "url": "/_nuxt/5be04bc7d59b49e0b5ac.js",
    "revision": "33815ca9db2bd81d6dc454c25b7bc4fb"
  },
  {
    "url": "/_nuxt/5bec5ca3f37495b60aeb.js",
    "revision": "390ce466c331dd796f22cdd0ac6ca4b0"
  },
  {
    "url": "/_nuxt/660d416d5266e3d82bb5.js",
    "revision": "094c5bf21d9f5a02a7decfce74786cbc"
  },
  {
    "url": "/_nuxt/6f1f01dc0b2fbc7c91be.js",
    "revision": "efa47c1290a3042553c6bb73d19f47bb"
  },
  {
    "url": "/_nuxt/751eeb8ab44e66e5a3d5.js",
    "revision": "da08be48dd687bd3adfb99d9d29e06dc"
  },
  {
    "url": "/_nuxt/7796516518b01d2074a9.js",
    "revision": "8daa217d3e1e408fa2c14769f1889dd5"
  },
  {
    "url": "/_nuxt/82fe2daf9a982639e12d.js",
    "revision": "3cd7f4f34b37be8cd1dd95c40ca482ef"
  },
  {
    "url": "/_nuxt/a5b8977ace4ed5ad3670.js",
    "revision": "803ccfa425dfc11fb8555496eea13618"
  },
  {
    "url": "/_nuxt/a6773001f4bb2ee42f6e.js",
    "revision": "7c37880ae77292bab9141d29315594b0"
  },
  {
    "url": "/_nuxt/ace48878af6b14c401cd.js",
    "revision": "ae48364b9c53a90114b4100458681649"
  },
  {
    "url": "/_nuxt/ba46b18837adc9044f96.js",
    "revision": "36f85e56f5a385682e15a773472b70dd"
  },
  {
    "url": "/_nuxt/c2ed27aabce68ce076b6.js",
    "revision": "16e7f523334a6865568a64b7f01975c0"
  },
  {
    "url": "/_nuxt/c5db2edef2c80509b307.js",
    "revision": "508b978305112a37c83eaf42a1756485"
  },
  {
    "url": "/_nuxt/c8b99f8e9f4d029381da.js",
    "revision": "d3729b86adc56873c1a021ffa790963f"
  },
  {
    "url": "/_nuxt/c9b0430f6fd744d6f8a1.js",
    "revision": "2cb6ab4d6edf9615adbd23383ebdabc0"
  },
  {
    "url": "/_nuxt/d1372e77aaeb61677452.js",
    "revision": "ddb3675e1ee14ea95b497c2abf873241"
  },
  {
    "url": "/_nuxt/e1cf47de47324d7199be.js",
    "revision": "eb534290eea956b6026ff2dffa6e4045"
  },
  {
    "url": "/_nuxt/e70351199aa7735f466b.js",
    "revision": "9c452b457a562f591ecfc309fe93054b"
  },
  {
    "url": "/_nuxt/f4fdcae7070cda8f4af6.js",
    "revision": "44141dab0f378e2fa14bd236184266f8"
  },
  {
    "url": "/_nuxt/fa42305d40d70f50f442.js",
    "revision": "b9e5922ec5c2482c1e61b0ef061d105c"
  },
  {
    "url": "/_nuxt/ff9669856b3607fce0a9.js",
    "revision": "8dcaad7547f345d2a1d0ff6b2c090f7c"
  }
], {
  "cacheId": "dega-web",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





