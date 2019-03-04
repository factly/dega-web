importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08aa7839f6ff58c9f484.js",
    "revision": "b3eca3b3fc0295c9a6e012daec477e79"
  },
  {
    "url": "/_nuxt/16b512eee05b52206f94.js",
    "revision": "b9e7639a17388d8252ad440878acc681"
  },
  {
    "url": "/_nuxt/1783300e1fb9880030de.js",
    "revision": "784a5e1e39e3c72ff0b228f0c6462e02"
  },
  {
    "url": "/_nuxt/197764a0ff38ebdfd8f1.js",
    "revision": "6a74e90e820b5682e755306316bfeecb"
  },
  {
    "url": "/_nuxt/27e2260b3e1f52ddc6fd.js",
    "revision": "a174a9902a770e65076f00bc270a68f1"
  },
  {
    "url": "/_nuxt/3743ab1a37d44eeaf304.js",
    "revision": "61b7570e7daac18dc41341513e393f7b"
  },
  {
    "url": "/_nuxt/3b70b740adf140ae7d86.js",
    "revision": "ca759f053ee85878761cae703a7a7a23"
  },
  {
    "url": "/_nuxt/3d814aeb1388455ef11f.js",
    "revision": "76d26964a28038780fb75b9895e31605"
  },
  {
    "url": "/_nuxt/425d186550efe5c7ca64.js",
    "revision": "fcea07681c298437915e70673dd79847"
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
    "url": "/_nuxt/751eeb8ab44e66e5a3d5.js",
    "revision": "da08be48dd687bd3adfb99d9d29e06dc"
  },
  {
    "url": "/_nuxt/78c2c54e9eb9e5878941.js",
    "revision": "4535790130b7671ffdb74fbb6856f948"
  },
  {
    "url": "/_nuxt/82fe2daf9a982639e12d.js",
    "revision": "3cd7f4f34b37be8cd1dd95c40ca482ef"
  },
  {
    "url": "/_nuxt/a7803e4e20f13085e61b.js",
    "revision": "8455c31281324931a99fe4564237eb90"
  },
  {
    "url": "/_nuxt/ace48878af6b14c401cd.js",
    "revision": "ae48364b9c53a90114b4100458681649"
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
    "url": "/_nuxt/c6042e3678431f0ea137.js",
    "revision": "b8d04c4d98f1f933de9bdb3261fa012e"
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
    "url": "/_nuxt/d5a83ef1770413cff4c3.js",
    "revision": "9d71d8e08fa98aa04c0c0a1c339fba2e"
  },
  {
    "url": "/_nuxt/e70351199aa7735f466b.js",
    "revision": "9c452b457a562f591ecfc309fe93054b"
  },
  {
    "url": "/_nuxt/ec7bbc22ee3d0557771a.js",
    "revision": "89c6a2f9f3c4c78c4f68dc70ab825b33"
  },
  {
    "url": "/_nuxt/f0dd571cfc2876ced323.js",
    "revision": "0c1111224a67adad62c60b6abecd573d"
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





