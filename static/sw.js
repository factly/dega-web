importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3109633ceedf3ec1ed99.js",
    "revision": "78bddd59ea6be7e21641d4f4106df3bc"
  },
  {
    "url": "/_nuxt/3e2dd7205f2ba187baf9.js",
    "revision": "dda5ffa4b354d49a8b0953a64ba14f76"
  },
  {
    "url": "/_nuxt/4fd681bfcbd5e13896fa.js",
    "revision": "de947afec59e3cd57b28fe9dc958a7fc"
  },
  {
    "url": "/_nuxt/61e29c057578c9f1d173.js",
    "revision": "98da0ef586aea96dff18cb536f73df34"
  },
  {
    "url": "/_nuxt/786908d7aa15890d5357.js",
    "revision": "4e7deb0d877272017d5e63a10c03fa91"
  },
  {
    "url": "/_nuxt/78d68b05feea39291d83.js",
    "revision": "646dfbf782da495faf68983ee77b4dfd"
  },
  {
    "url": "/_nuxt/79b51c4695efa0cc0835.js",
    "revision": "b640743ea3f74c3be11a23be23d38226"
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
    "url": "/_nuxt/9a4b889e6b8f407acb65.js",
    "revision": "77ee15ed45d99c6636248a8df07d4e9f"
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
    "url": "/_nuxt/bb832ff0b25440a73c7e.js",
    "revision": "fa9f757bb2cf91c4ed3a0d5ef0ae21d5"
  },
  {
    "url": "/_nuxt/d41d5dc788bc39095149.js",
    "revision": "4b82b0933c567b54ce15f2232df94984"
  },
  {
    "url": "/_nuxt/e4072e8beca47310bf1a.js",
    "revision": "b6f5975618d0ce3ec43f620a7d5dbf9e"
  },
  {
    "url": "/_nuxt/ed1e28054e61aa0b484e.js",
    "revision": "cae9bbbd7c3e917d9f7e48c7f898fbd6"
  },
  {
    "url": "/_nuxt/f7a648ae7fa8061fe3ec.js",
    "revision": "8a19289e40a6cc24cec6cc88334f48a8"
  },
  {
    "url": "/_nuxt/fa859234851bfbaba05e.js",
    "revision": "b8844cec72e4cb84cae8bba5fc62d37d"
  },
  {
    "url": "/_nuxt/fe176e317d994ee68c65.js",
    "revision": "82f77997564356188ac599262d352db3"
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
