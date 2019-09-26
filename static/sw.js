importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07ef801afc1caff5a201.js",
    "revision": "6de8a51689e71087e49f3afb23a3bba7"
  },
  {
    "url": "/_nuxt/0a290698f6d99fa4d171.js",
    "revision": "34218d18cd00067253b1480d18d09342"
  },
  {
    "url": "/_nuxt/0f4b18479aeec3427e05.js",
    "revision": "ed8570e278721edb24708845396a8799"
  },
  {
    "url": "/_nuxt/189874aa957811f072a7.js",
    "revision": "a59511d067021d1c76b64e2483f470d0"
  },
  {
    "url": "/_nuxt/254131c713d068f33dbd.js",
    "revision": "0e5bf5a8d208e0d0ae4819cda59e9b73"
  },
  {
    "url": "/_nuxt/27189e313b8759226369.js",
    "revision": "bd31467dd0f9077176c229d8d002a641"
  },
  {
    "url": "/_nuxt/2e9e1df90c6b861fc421.js",
    "revision": "7995b6ffb14b1788a0e596f7c0172af6"
  },
  {
    "url": "/_nuxt/3177c6b1c18c32f51089.js",
    "revision": "662002256fb7b1196d2580739260ec62"
  },
  {
    "url": "/_nuxt/326f04a9be5d15b29450.js",
    "revision": "3777178a580e7c00898ebe35bbf233bd"
  },
  {
    "url": "/_nuxt/43d50bea37c4b0891707.js",
    "revision": "134419bd8cca05196948c87153bc2911"
  },
  {
    "url": "/_nuxt/465c51561b6870e91714.js",
    "revision": "da236d1f46e0ac85802ecc677d61cda2"
  },
  {
    "url": "/_nuxt/4aa40f7f35972a9787c1.js",
    "revision": "38b45a75107ad557c097000df82457bc"
  },
  {
    "url": "/_nuxt/553b843bd63c140e97ec.js",
    "revision": "35046ef07ec132d3b3e9bfb42b2229f3"
  },
  {
    "url": "/_nuxt/5b3b1d0b9360afcfdd2a.js",
    "revision": "75c450dc46742906db5be145803d78d0"
  },
  {
    "url": "/_nuxt/5de412ce108242e8da64.js",
    "revision": "bafc3f80f7566db65fbd8f827d86cf35"
  },
  {
    "url": "/_nuxt/8afdb5beb35207b5da3d.js",
    "revision": "492cf0eacd201682e1d4a690f0b2f7df"
  },
  {
    "url": "/_nuxt/9f1ba053a8173922f484.js",
    "revision": "51fcf644fe8316e1e357219fec411563"
  },
  {
    "url": "/_nuxt/c1f19321b7dc6553df30.js",
    "revision": "7e7be261968956f01c4c68f6b085b05f"
  },
  {
    "url": "/_nuxt/d035452adc9912b4a7af.js",
    "revision": "a3e3db237655afd37b735961c5136295"
  },
  {
    "url": "/_nuxt/f25b6198ecd73efb0e98.js",
    "revision": "b139570aee42c849efe58545deb301a5"
  },
  {
    "url": "/_nuxt/fbbefb044e7fad07c27e.js",
    "revision": "5643eb0125ae84c13a1fd4a139d15730"
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
