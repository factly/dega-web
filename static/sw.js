importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/011a848a1a7f5361d9bd.js",
    "revision": "2830cc92e12c66288a1839462d9992ce"
  },
  {
    "url": "/_nuxt/02d00e32171d5bca8585.js",
    "revision": "142097456090e1d55f9858a95f71a78e"
  },
  {
    "url": "/_nuxt/160015f009783c37fe2d.js",
    "revision": "ab2d997255f38c96ec114a578e0c8d60"
  },
  {
    "url": "/_nuxt/1c6736f3e012c86fc545.js",
    "revision": "390cbd12aa28a466c390647c36379d35"
  },
  {
    "url": "/_nuxt/2cff5a946b06f9eec3bc.js",
    "revision": "4950f347169ac31bd92bd6d88dad121e"
  },
  {
    "url": "/_nuxt/32305ef0d9fe790736cb.js",
    "revision": "8f5544d864febfd04a9b85632befaa30"
  },
  {
    "url": "/_nuxt/3eaeac1137332044c7b7.js",
    "revision": "b71f3e45d03bae2697da3d5865980ef3"
  },
  {
    "url": "/_nuxt/450e568e1d547c2048ea.js",
    "revision": "c2b58b8c496980dc91a547adf2c5f5f1"
  },
  {
    "url": "/_nuxt/480590aa7e0af42cf188.js",
    "revision": "18b34812bcaee88b5090283218351d6d"
  },
  {
    "url": "/_nuxt/4d721e422aa72f1f37ff.js",
    "revision": "729d8b113bd7ba268a6c7de1e3512a45"
  },
  {
    "url": "/_nuxt/51388d58db5c60e6bd2a.js",
    "revision": "69d0de0f3c65b19c66083013f9b2636d"
  },
  {
    "url": "/_nuxt/5a183bb3496ab981bf8e.js",
    "revision": "367cacf67c2aee6a96a016aa4bd165f8"
  },
  {
    "url": "/_nuxt/679bf94d5c348bb50ae2.js",
    "revision": "e3c7904cab467c5696eb694f45aad155"
  },
  {
    "url": "/_nuxt/7b4e41ccab9e774d0334.js",
    "revision": "c679812d0de6455eb4ef2d7b02fd78fc"
  },
  {
    "url": "/_nuxt/b7134fc7fbc29c8c789a.js",
    "revision": "ed25761911df52857999766a9807b553"
  },
  {
    "url": "/_nuxt/d035452adc9912b4a7af.js",
    "revision": "a3e3db237655afd37b735961c5136295"
  },
  {
    "url": "/_nuxt/d22ddaa95839facf7816.js",
    "revision": "0e5bf5a8d208e0d0ae4819cda59e9b73"
  },
  {
    "url": "/_nuxt/d2884ee74d4f2f34f0ad.js",
    "revision": "0f01265f1855d79598c155d7152dcf6e"
  },
  {
    "url": "/_nuxt/e50d2f740495e2467f47.js",
    "revision": "00778f042036d515bc48c9f68b3c684e"
  },
  {
    "url": "/_nuxt/e7c9bfe8a8db40eef2a1.js",
    "revision": "2016e930b1a80e9b6324b2944c30a7bb"
  },
  {
    "url": "/_nuxt/ef37cdf1ea9cccbcebef.js",
    "revision": "1d7c486b0ced1a18367b74ca349198c9"
  },
  {
    "url": "/_nuxt/faf3f6bc46c1df2d3641.js",
    "revision": "36723f789e77fb92d372ee5779f5f3fd"
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
