importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/14ce1039327126264769.js",
    "revision": "e687c333d33207f4d110f456a5c35af6"
  },
  {
    "url": "/_nuxt/22cf5159009042ca3fb6.js",
    "revision": "583b3197067a51a8b218db2beb91e99c"
  },
  {
    "url": "/_nuxt/2513fec48ed711e621d0.js",
    "revision": "11c1eb21ffdf2b789de2410f012faeec"
  },
  {
    "url": "/_nuxt/2dac42b12ff6d2865512.js",
    "revision": "2518271b6350cf2f43fca76b222e98ea"
  },
  {
    "url": "/_nuxt/35e05ac128220a21a178.js",
    "revision": "f82ae104cc41ae026daf9686e77f8847"
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
    "url": "/_nuxt/7271674c3bf7c0adda40.js",
    "revision": "9944017223a147e60917ca4d690780f4"
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
    "url": "/_nuxt/7da96861eecf03c150cb.js",
    "revision": "f16293d4db2a313e2e2313a6a171b695"
  },
  {
    "url": "/_nuxt/8f1c25b93b6ad5670736.js",
    "revision": "8b895fe4374b5401524fe40ce88e42ab"
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
    "url": "/_nuxt/b045f92665225c7a19ea.js",
    "revision": "d2558fe95d7fe59f4d75c2ffeaa08f13"
  },
  {
    "url": "/_nuxt/bb832ff0b25440a73c7e.js",
    "revision": "fa9f757bb2cf91c4ed3a0d5ef0ae21d5"
  },
  {
    "url": "/_nuxt/bd072c0edcff51209d61.js",
    "revision": "373413ab5ba56053789914317e343541"
  },
  {
    "url": "/_nuxt/d7c52540a3ed23b0ab4c.js",
    "revision": "94459a2a1720bd524265101303e82a58"
  },
  {
    "url": "/_nuxt/ea6cef3eb8383bfdb3f1.js",
    "revision": "2a6da55620c23e93b603f0237c60f968"
  },
  {
    "url": "/_nuxt/f584fb2e2e4258ad10d1.js",
    "revision": "41b9611654a64e1729837e3cb245e10d"
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
