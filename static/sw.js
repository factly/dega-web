importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5293f4ed22f587f0b74d.js",
    "revision": "e52a38db6a4198e591adcf8165e27157"
  },
  {
    "url": "/_nuxt/5fcf788474fe784a4a21.js",
    "revision": "0fc7b6ceb846d427ff09d38282c1326a"
  },
  {
    "url": "/_nuxt/6fa803c06b5802f71043.js",
    "revision": "e7f0fdcbc1c75d4b21571a1d41e3c11d"
  },
  {
    "url": "/_nuxt/744e1809224c37a98626.js",
    "revision": "7c25322a3793fef770d5a4f8239f5af8"
  },
  {
    "url": "/_nuxt/75283154ad97705c3eeb.js",
    "revision": "6cfb821d1efb0a5d6ac321a6598918c2"
  },
  {
    "url": "/_nuxt/7747b6bfb4e4ddd1a38a.js",
    "revision": "c27fd024d3d79b893d7cb8774bbae81e"
  },
  {
    "url": "/_nuxt/80f7f9457f02246f9931.js",
    "revision": "18436922ae125f0ec7d489300907280a"
  },
  {
    "url": "/_nuxt/87718dabf6b6a084c6cc.js",
    "revision": "7a80574ee291bb3125ae3d7d22d90240"
  },
  {
    "url": "/_nuxt/97cceb2e88fc2b1e3c2a.js",
    "revision": "5cd4882c56ef508beb761d9fb5f20705"
  },
  {
    "url": "/_nuxt/a09c31a37f22446964c2.js",
    "revision": "835ee1409a0630074e533230db6ef6cc"
  },
  {
    "url": "/_nuxt/abf42d4796e131da0633.js",
    "revision": "c5a9cab87ca02b5ca792ea8eb83edcbd"
  },
  {
    "url": "/_nuxt/ccbefa7bde60d5c95150.js",
    "revision": "dcf7b376e965a8f6aa86f1c4fc6893cd"
  },
  {
    "url": "/_nuxt/de5d68c331a4b1171b4e.js",
    "revision": "1ba7a296d79fc824d21001f082459300"
  },
  {
    "url": "/_nuxt/edd994270ef9119b505e.js",
    "revision": "ba09adc839c3d397cace58d19dddc114"
  },
  {
    "url": "/_nuxt/ee430ee53f1fe6926742.js",
    "revision": "ee8d1905d4b756be223e75f9d320433d"
  },
  {
    "url": "/_nuxt/eff8d9dd923344e4948d.js",
    "revision": "5f735833ca41e39f7300213191ee9ae7"
  },
  {
    "url": "/_nuxt/f2d8305ef4a3bca81fe9.js",
    "revision": "2ac042bb9efe48af36e004d8edf0b25d"
  },
  {
    "url": "/_nuxt/f6e85df988d067191408.js",
    "revision": "1dde9a5f6ab8cacc39f0c3cf5765d36a"
  },
  {
    "url": "/_nuxt/faf9e0afb3ee5e56b48e.js",
    "revision": "f17771f68a12abbaf323d6c872a44dc8"
  },
  {
    "url": "/_nuxt/fe0689be3fa37661bffe.js",
    "revision": "2749d9fbdb1e777e8c2fc6cb789d6b0c"
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
