importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1aea40c263ad3c3965e2.js",
    "revision": "07bc96a611f4afeb7ace6b1c0701fe19"
  },
  {
    "url": "/_nuxt/22d87d705a3d1d15d2b4.js",
    "revision": "8e519702d9be886d501f6b6856d2438e"
  },
  {
    "url": "/_nuxt/33ade313d9bb0c398ebb.js",
    "revision": "3e66e08daa985376dbd2fd4c23ac4460"
  },
  {
    "url": "/_nuxt/4fd681bfcbd5e13896fa.js",
    "revision": "de947afec59e3cd57b28fe9dc958a7fc"
  },
  {
    "url": "/_nuxt/5b9b6ae49e4e21aa7913.js",
    "revision": "9c00e41a7ea35c384c303a8c8890c59d"
  },
  {
    "url": "/_nuxt/61e29c057578c9f1d173.js",
    "revision": "98da0ef586aea96dff18cb536f73df34"
  },
  {
    "url": "/_nuxt/78d68b05feea39291d83.js",
    "revision": "646dfbf782da495faf68983ee77b4dfd"
  },
  {
    "url": "/_nuxt/7be88360d04dd23a4018.js",
    "revision": "ff8ca8213684b65507980f0b53c0cbaa"
  },
  {
    "url": "/_nuxt/8a789d76cfcdd2298015.js",
    "revision": "bd037ca56478e9c20dc2910354e40435"
  },
  {
    "url": "/_nuxt/8f1c25b93b6ad5670736.js",
    "revision": "8b895fe4374b5401524fe40ce88e42ab"
  },
  {
    "url": "/_nuxt/a3ca1b6ad99442548a29.js",
    "revision": "20d6ce24e6875711c17c99af84fae16b"
  },
  {
    "url": "/_nuxt/a483309028d2b31f8f69.js",
    "revision": "2058f97d6843e0030df088807a1e022b"
  },
  {
    "url": "/_nuxt/a961b7ef05e582566f43.js",
    "revision": "b38fd3ac7198fa4d93d6055c037e2e64"
  },
  {
    "url": "/_nuxt/aaa52feb854d5b9897dd.js",
    "revision": "17a47a398c713dc78c8319004f5c9e83"
  },
  {
    "url": "/_nuxt/b773e9a29c8ec030fe66.js",
    "revision": "1f0119cc8df75b91186d53164cea5871"
  },
  {
    "url": "/_nuxt/bb832ff0b25440a73c7e.js",
    "revision": "fa9f757bb2cf91c4ed3a0d5ef0ae21d5"
  },
  {
    "url": "/_nuxt/cbacc0f8b80b5866cea4.js",
    "revision": "fa04ec31b7c3de73bb62796dd251b8b9"
  },
  {
    "url": "/_nuxt/e4072e8beca47310bf1a.js",
    "revision": "b6f5975618d0ce3ec43f620a7d5dbf9e"
  },
  {
    "url": "/_nuxt/ef11b6b0f85d1345c21c.js",
    "revision": "6db7cc152c587500a2d40fc99f8b7e65"
  },
  {
    "url": "/_nuxt/f27be64c1e2e526f0d16.js",
    "revision": "d4b7c6ff9487df274fbc0b0f0cd2a826"
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
