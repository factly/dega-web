importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/33da3e0d2368d7c429b2.js",
    "revision": "c5afd8ea18ddc7997280196e893c21e1"
  },
  {
    "url": "/_nuxt/34a7291c0efffa5098a5.js",
    "revision": "2566b08f1529e660d0dca1bc276f8316"
  },
  {
    "url": "/_nuxt/4074d9efe045645e6e0e.js",
    "revision": "c8141a3fe5f4c73ead14090db483f2aa"
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
    "url": "/_nuxt/6231b7450ddd8f6049a8.js",
    "revision": "950880218022882bc69d3dd937b206d8"
  },
  {
    "url": "/_nuxt/6e7f7fb41fa1ccf1f2e3.js",
    "revision": "3894ae99d2bc71b31f67227ede72815f"
  },
  {
    "url": "/_nuxt/787418619b03263a1f0d.js",
    "revision": "22db0813e43aa3f4690150ec618a55f0"
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
    "url": "/_nuxt/8b97f82fd13d497e65bd.js",
    "revision": "cc96ba7addca6780782d5afe31df1493"
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
    "url": "/_nuxt/b4d1743a1147adc5542a.js",
    "revision": "b718b56a3b141da07f1b4715213aefee"
  },
  {
    "url": "/_nuxt/bb821ff80e9342192c80.js",
    "revision": "abfeee2e472d00899b0d604364e83952"
  },
  {
    "url": "/_nuxt/bb832ff0b25440a73c7e.js",
    "revision": "fa9f757bb2cf91c4ed3a0d5ef0ae21d5"
  },
  {
    "url": "/_nuxt/c500d14fc9ab140bd8ec.js",
    "revision": "d6778a7adb889ba7c25c32a246e7fbf8"
  },
  {
    "url": "/_nuxt/e4072e8beca47310bf1a.js",
    "revision": "b6f5975618d0ce3ec43f620a7d5dbf9e"
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
