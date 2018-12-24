importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a6d94727bf0199aa5c1.js",
    "revision": "dad71828a7527378390bb0bd9c28a911"
  },
  {
    "url": "/_nuxt/0ccef59962c4e0653873.js",
    "revision": "c2cc82170dc5069b58a2b2ce8a5c73e2"
  },
  {
    "url": "/_nuxt/1d0967148947fc746f5e.js",
    "revision": "9bc6cd7f8c384b25536fe0932e805f6b"
  },
  {
    "url": "/_nuxt/245a678ef093fe8f2e0d.js",
    "revision": "13c523ad8ac118b6e290a0a7b8b7ec37"
  },
  {
    "url": "/_nuxt/24a56071de8f68472a2d.js",
    "revision": "d910aa1727989f82d86832f2d28e3347"
  },
  {
    "url": "/_nuxt/5da1d20aee92a6013763.js",
    "revision": "7885e280811d01a8b8206a8b9cd3ef7b"
  },
  {
    "url": "/_nuxt/655bde720503fa8e7976.js",
    "revision": "d64d27b627e4fc8acafa67529a955f20"
  },
  {
    "url": "/_nuxt/796398243e1b083fa7a6.js",
    "revision": "1b282965e45ac067c8f397ed343798e5"
  },
  {
    "url": "/_nuxt/9047ea97161d8fab1364.js",
    "revision": "5a48441db5ba6d7c70fae977f6d012e8"
  },
  {
    "url": "/_nuxt/a2663e51d6e2fec757e6.js",
    "revision": "f3edff5c14454d61b4522e3cc500a211"
  },
  {
    "url": "/_nuxt/dd724364ea36c1aca9f2.js",
    "revision": "418475cbae37f4cb9f831f3843242f23"
  },
  {
    "url": "/_nuxt/eea3470c9de4e9c6e8ae.js",
    "revision": "5fa018f86f205c037637c96f856a826a"
  },
  {
    "url": "/_nuxt/fb78a9c15615ff8e73e4.js",
    "revision": "ee5858c55d750047ecbc2f6449e8dffc"
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





