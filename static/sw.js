importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/084c007236aff9a4fb97.js",
    "revision": "ceacaf617bcbabecb2804815aaf0fa59"
  },
  {
    "url": "/_nuxt/094cff8cea8b4782e642.js",
    "revision": "fecfcacf5769c23cef6e8d074ca325f1"
  },
  {
    "url": "/_nuxt/1449618b3c12ed191411.js",
    "revision": "45f4770cd969805bde82d35a9f8df6ab"
  },
  {
    "url": "/_nuxt/20bc03d2c6202fffed1a.js",
    "revision": "f8b21a1f516b6ea28928fdf2dcf861ce"
  },
  {
    "url": "/_nuxt/5da1d20aee92a6013763.js",
    "revision": "7885e280811d01a8b8206a8b9cd3ef7b"
  },
  {
    "url": "/_nuxt/89a5cd2eecf226582d4f.js",
    "revision": "2b298ebab731b8bd6ca8f687ea60d893"
  },
  {
    "url": "/_nuxt/9fd6586787ca21edaece.js",
    "revision": "c87607e03eb9ed8f8607beaa35a4cf94"
  },
  {
    "url": "/_nuxt/adb3630d89d6343d941e.js",
    "revision": "3f92d67e074b13f132a6e18d9e86df41"
  },
  {
    "url": "/_nuxt/c46cbf459e60447f76e4.js",
    "revision": "a168bec9dadd01b002b0e2c73357a850"
  },
  {
    "url": "/_nuxt/d70a74f09446ad114907.js",
    "revision": "0f58c688cc80aa9e3f6813726a07055d"
  },
  {
    "url": "/_nuxt/e846cc4fc835886ba26f.js",
    "revision": "e40a03eefabe168173590375f932b106"
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





