importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01838394d74a6d8025a0.js",
    "revision": "bd6cebfb960fe7ca72ecd994bd7dfaef"
  },
  {
    "url": "/_nuxt/0502332b567f82a35705.js",
    "revision": "531c039439c8bcc0c6c487e6a0af6270"
  },
  {
    "url": "/_nuxt/086bb669dad87fc6e043.js",
    "revision": "701e96cb15a94ad03b049c027ef759a7"
  },
  {
    "url": "/_nuxt/1d982b36c2bcded8803d.js",
    "revision": "32083c6f3b0f282e6b8c8f0efa2b8b01"
  },
  {
    "url": "/_nuxt/28ede7e1fd8838e02115.js",
    "revision": "4617a4d16b09d02f45358c694fb4de11"
  },
  {
    "url": "/_nuxt/351952932f81b8fcf106.js",
    "revision": "a6d7587a81f2830b0c583b581c1f6388"
  },
  {
    "url": "/_nuxt/3c4b5da0afd00ac1c1f1.js",
    "revision": "c17de03033304566787c6e2012539dff"
  },
  {
    "url": "/_nuxt/3d345b43dd47ac644c46.js",
    "revision": "bdf4d4344b8898ab156d0b173e313789"
  },
  {
    "url": "/_nuxt/3d5311e9c419bfa1d894.js",
    "revision": "009086729d43a82ab3f00a0cfc5900a6"
  },
  {
    "url": "/_nuxt/405ab83d675fb7a57c16.js",
    "revision": "d6475510325fd5ff67aca9e7e898daf0"
  },
  {
    "url": "/_nuxt/4171cd9c4a8ab96f23be.js",
    "revision": "1bd4aa41a09a9947d39d2f0aba1156ee"
  },
  {
    "url": "/_nuxt/4629cd5fd5f2f96c977c.js",
    "revision": "e58a222ee02d008b1074b259f95dcfa1"
  },
  {
    "url": "/_nuxt/4f0b902f987f34045313.js",
    "revision": "87692ca49f6ca1ef3c319ed4d2fd0c05"
  },
  {
    "url": "/_nuxt/5140611e5710ab4666c5.js",
    "revision": "51f38b95bda3029edc5e60f13ddff416"
  },
  {
    "url": "/_nuxt/58e8013b5c006440d580.js",
    "revision": "1af5c799896331b537d21b8224df925a"
  },
  {
    "url": "/_nuxt/647d6ca34fd6f0555015.js",
    "revision": "43a0ad9fac5e2e3b1431a1b6a0d6a20e"
  },
  {
    "url": "/_nuxt/6fc8900543e170af66b0.js",
    "revision": "86e7d0415b33a8ace99ba7a8816d14e4"
  },
  {
    "url": "/_nuxt/7d90cb47eb177f8dacf5.js",
    "revision": "6fc0171413de99ad8918ef34ab4835a8"
  },
  {
    "url": "/_nuxt/88a2a3bbf87f57dc1e03.js",
    "revision": "654d6b35ab1c699716d52b0e957dbf39"
  },
  {
    "url": "/_nuxt/8c336cc5566de0b64454.js",
    "revision": "a8aeaa82ab73e4920a9bcc56fe549d93"
  },
  {
    "url": "/_nuxt/975ace04b43a77f17544.js",
    "revision": "87b9da1c4a318744355e29c10a026954"
  },
  {
    "url": "/_nuxt/a794677694c5d595fe37.js",
    "revision": "9611698244d0bbd2decea5c9f507ccda"
  },
  {
    "url": "/_nuxt/c46aff7db4223414b913.js",
    "revision": "7cd182a3329a32882f94d2386791e1fc"
  },
  {
    "url": "/_nuxt/cc42d64aeccdc3aadb44.js",
    "revision": "e94a5f8f37a8e7c5e66187221135b6ce"
  },
  {
    "url": "/_nuxt/d961e43c6edf56497c60.js",
    "revision": "8e42e68e94422fb945db403228bb4294"
  },
  {
    "url": "/_nuxt/ec90e773ad1fcf2659ba.js",
    "revision": "4044e45859baf8326ce5820aaf2c44fe"
  },
  {
    "url": "/_nuxt/f9ce82e0f81047688619.js",
    "revision": "757e1dc831ee32b5fe5bd817a4eafcc3"
  },
  {
    "url": "/_nuxt/fc27f3777ae7ab1010ac.js",
    "revision": "7622397e9259292c56509d0e2c848ca2"
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





