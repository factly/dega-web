importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f441126279ec056ec94.js",
    "revision": "d7f5b6f89ca9f767b8bac605195ee91d"
  },
  {
    "url": "/_nuxt/456fd7cedfb2e82498ea.js",
    "revision": "e22109456523eb861d6dcfe3f3857c44"
  },
  {
    "url": "/_nuxt/50bfdc428ff3e2bef75e.js",
    "revision": "c70c40ab5b67bc37e7611d474808b368"
  },
  {
    "url": "/_nuxt/87765ff6dee8bd555606.js",
    "revision": "abe91c606bd89f208bb85d2aa0f5772c"
  },
  {
    "url": "/_nuxt/cc8a5da6ed1974a0ce48.js",
    "revision": "bf8ce9ea2ee66be7c683ee85f5eb1785"
  },
  {
    "url": "/_nuxt/cdcc841dc2d39e68b5e4.js",
    "revision": "c354cc7e0ba774d041040d27abf5f992"
  },
  {
    "url": "/_nuxt/db6da1a5674ffc93cd4b.js",
    "revision": "a3257703b82f114b2a4dcdb152d0c97a"
  },
  {
    "url": "/_nuxt/e64687f0281c85e97c5f.js",
    "revision": "b5aa9608a53c1e70015bf084c4ab5ebe"
  },
  {
    "url": "/_nuxt/f98b3486b021e425f3f4.js",
    "revision": "eedb6abd8b1f8ad4d1f5d0d665338521"
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





