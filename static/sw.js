importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/030e8372d1ed95b446d6.js",
    "revision": "b8c8d8877aa11bd878098161c2f6e633"
  },
  {
    "url": "/_nuxt/05b68db5d47f338fc5db.js",
    "revision": "1c9e811ae40149b6debda93a9e4e7675"
  },
  {
    "url": "/_nuxt/2133f691b814914dd58b.js",
    "revision": "4374069bd09bf4143b668e0e105a14c9"
  },
  {
    "url": "/_nuxt/541b0db0fc51cd71f3c2.js",
    "revision": "4e4cba2ad5b4b3652cc0d13119a6f47e"
  },
  {
    "url": "/_nuxt/610b199616b4aaba1c44.js",
    "revision": "1ed3bcd79b14e02cf38f420cd4f1a0aa"
  },
  {
    "url": "/_nuxt/979830d6d0b7d76531f9.js",
    "revision": "ac72d92a14f64ec09b7bc8c877d70580"
  },
  {
    "url": "/_nuxt/cdcc841dc2d39e68b5e4.js",
    "revision": "c354cc7e0ba774d041040d27abf5f992"
  },
  {
    "url": "/_nuxt/fd9870309c297458025f.js",
    "revision": "a0e1613221d523a05c3a28d313e44eb5"
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





