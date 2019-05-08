importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09f12379afb1286bb5a3.js",
    "revision": "4bb6f042ba7a60ec5dd7604ef443e5fb"
  },
  {
    "url": "/_nuxt/16bd22b952eaaa0b22da.js",
    "revision": "57081fdc8c82ca03348763de0cbcdd4a"
  },
  {
    "url": "/_nuxt/184f8d251e4f49b3a82a.js",
    "revision": "0540f587af86f2389aecd42ed9202257"
  },
  {
    "url": "/_nuxt/1c55f1d5079bffeb368f.js",
    "revision": "6e0d5bc33ca81644ad0ef4e0c69162d7"
  },
  {
    "url": "/_nuxt/320428f5e128d5185bf6.js",
    "revision": "68494d658b3792121d1b70407d8d8108"
  },
  {
    "url": "/_nuxt/3929a6cf65edc4e752c8.js",
    "revision": "664164bb21eea6dfba11824713a4039c"
  },
  {
    "url": "/_nuxt/5a79c679c82057ffbc8a.js",
    "revision": "9b441b8f5b606ee2ad3cd960a480d989"
  },
  {
    "url": "/_nuxt/6ec786bf1103cad22573.js",
    "revision": "679201282c6aa7c597f539ad30763a8d"
  },
  {
    "url": "/_nuxt/723b6a25882fdfc5fe3f.js",
    "revision": "58cd2f2c9cc30cda71aa0e7a89d755b0"
  },
  {
    "url": "/_nuxt/7a6d0cfe0f14abd5cbdc.js",
    "revision": "7257187e8bf7f8cd4663ac4710fb19a0"
  },
  {
    "url": "/_nuxt/7e2442d8cf1e0ddbc934.js",
    "revision": "1da89245bf0dbe6c5125f5e855b33530"
  },
  {
    "url": "/_nuxt/7e3b645d2c0a121de667.js",
    "revision": "e14b2b13bf36a34f35b0176748111281"
  },
  {
    "url": "/_nuxt/8c52e30f969bafb9f89d.js",
    "revision": "3fc3cd4244d109871a31834977887c19"
  },
  {
    "url": "/_nuxt/a7860d785d6116ace933.js",
    "revision": "f1acbad8509a0f8bb23bace05c767f25"
  },
  {
    "url": "/_nuxt/b0537faa8962828df58c.js",
    "revision": "d2fb741209f15cf11d89455a157dbaa0"
  },
  {
    "url": "/_nuxt/b859c894e8d23aa72243.js",
    "revision": "d80956b87cba3558aa8ab4dfe0dad5da"
  },
  {
    "url": "/_nuxt/baccbafa4c50c998bfd0.js",
    "revision": "26073e28eca5322c7a8dd3bbba119b18"
  },
  {
    "url": "/_nuxt/eed7642595ae20a88974.js",
    "revision": "f91ddc98e342a76bea4f1b3fbfdaabf0"
  },
  {
    "url": "/_nuxt/fb18769cf5189e24870d.js",
    "revision": "2a1fd6868df125487f536849a9aef9d1"
  },
  {
    "url": "/_nuxt/fe04337b2769cc3637b8.js",
    "revision": "cec10369fc4cf64c295cb3f2f6706004"
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





