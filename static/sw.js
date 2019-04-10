importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/122dc0c4409ce8320de5.js",
    "revision": "1da89245bf0dbe6c5125f5e855b33530"
  },
  {
    "url": "/_nuxt/1be2fc1f175b06ea16c9.js",
    "revision": "bdb9fa8e71ac9dedfcd0b90fbe53be2e"
  },
  {
    "url": "/_nuxt/1ec0fa9f976d62adc29e.js",
    "revision": "65f1d970e18e7bf7fe95ca26a1eb4d8c"
  },
  {
    "url": "/_nuxt/2759b79982b066468eaa.js",
    "revision": "d2fb741209f15cf11d89455a157dbaa0"
  },
  {
    "url": "/_nuxt/2fe38478b91d632ce70f.js",
    "revision": "2a1fd6868df125487f536849a9aef9d1"
  },
  {
    "url": "/_nuxt/307e990bedcd5d848c8a.js",
    "revision": "9a9229593ed669b75112a3187b195e13"
  },
  {
    "url": "/_nuxt/363e0d3644ef1147cf62.js",
    "revision": "61d550dfb0167ce8a7a9a2b2e20b956e"
  },
  {
    "url": "/_nuxt/48c7adc0077f34b81dfb.js",
    "revision": "9fd7ecca251f249361022bcbc665a9fb"
  },
  {
    "url": "/_nuxt/4d6739264854083db4f0.js",
    "revision": "c249b62d5ff6ac4a25f331768edd47d4"
  },
  {
    "url": "/_nuxt/5930e1a793b0cb278ba6.js",
    "revision": "4bb6f042ba7a60ec5dd7604ef443e5fb"
  },
  {
    "url": "/_nuxt/5e4f2d5be6f948180345.js",
    "revision": "57081fdc8c82ca03348763de0cbcdd4a"
  },
  {
    "url": "/_nuxt/6e887fb1c3b1386c7fb2.js",
    "revision": "f1acbad8509a0f8bb23bace05c767f25"
  },
  {
    "url": "/_nuxt/7b587e10f544a6c65ec5.js",
    "revision": "59505ceb8c8f6a403bb7f8d04040f9e1"
  },
  {
    "url": "/_nuxt/81df6c9fa34451a1cb9b.js",
    "revision": "07af409f7e5c07db9359784e5de28764"
  },
  {
    "url": "/_nuxt/8af3f517e7a7f7716ca9.js",
    "revision": "ca1702f12c6a72cee279cd22cb80f7fc"
  },
  {
    "url": "/_nuxt/8e8d044667b5e52fb5df.js",
    "revision": "f91ddc98e342a76bea4f1b3fbfdaabf0"
  },
  {
    "url": "/_nuxt/9b95d6341f8dd54ed476.js",
    "revision": "a51da31951730ebce40294f6a7e276a0"
  },
  {
    "url": "/_nuxt/c5be21a31f9b6572bb06.js",
    "revision": "1522ee34e7232f839e3432c99aceec31"
  },
  {
    "url": "/_nuxt/ca3fe96c593b53b896b4.js",
    "revision": "cec10369fc4cf64c295cb3f2f6706004"
  },
  {
    "url": "/_nuxt/ef3b9a5f583ecc93b76c.js",
    "revision": "3fc3cd4244d109871a31834977887c19"
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





