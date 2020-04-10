importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ce1fae645e5034127ea.js",
    "revision": "904d7a48b1eaf7b834fa5991ef7748c9"
  },
  {
    "url": "/_nuxt/1be924e73480f7f597b2.js",
    "revision": "1fd4eca4e007cb33c50fb400c4576b0f"
  },
  {
    "url": "/_nuxt/266e2588f76e99869091.js",
    "revision": "6442b0ccee27193947b3f1cf2178bf7d"
  },
  {
    "url": "/_nuxt/32fad7911d3f08090675.js",
    "revision": "d10a5ad443d83534d1e85ded760c8de5"
  },
  {
    "url": "/_nuxt/41c5550e0042bd75c772.js",
    "revision": "326c128b6c4dca6655eee709709e68ff"
  },
  {
    "url": "/_nuxt/5a01386159aa8be60f03.js",
    "revision": "0b848065d3708fec4708a44a129c40a4"
  },
  {
    "url": "/_nuxt/5efa82a7f69475439204.js",
    "revision": "6579f8b3ef6cd9e9f2cbca3c076bf2c3"
  },
  {
    "url": "/_nuxt/6a4a23b9c59e982c7516.js",
    "revision": "967350c7a0939f8a3f567272a91dee38"
  },
  {
    "url": "/_nuxt/8d7ea0e1b8946c417152.js",
    "revision": "f2fb7aa076cce1c0d1625f705f299823"
  },
  {
    "url": "/_nuxt/95e3297ef851d6d944d4.js",
    "revision": "436d897e6266e3b8064e989df67425a7"
  },
  {
    "url": "/_nuxt/a1d13316b03ada8b3500.js",
    "revision": "feecf808f99994ceea80a7c151e03788"
  },
  {
    "url": "/_nuxt/ccb0b0fd9c1accc9b05d.js",
    "revision": "6606a9829250dc0aa2707239ebbf827a"
  },
  {
    "url": "/_nuxt/d15a4421e1b18d8e943c.js",
    "revision": "249b7e51d967bedce27960c25a1c6e43"
  },
  {
    "url": "/_nuxt/d433d31c0f14a7d0036c.js",
    "revision": "94fd1800f04ecef1f331bb20ca1e894b"
  },
  {
    "url": "/_nuxt/db9c86cc56ca685cdb10.js",
    "revision": "cbdd440f17c0489974e704e4ea8ecd97"
  },
  {
    "url": "/_nuxt/e20b1f74260dae12a0cc.js",
    "revision": "35ef4a825fd0d3a155eefdf8bd54e282"
  },
  {
    "url": "/_nuxt/e8a43af8536ab69a3d4f.js",
    "revision": "4be770599bfce40b8c9afa7d5fd46954"
  },
  {
    "url": "/_nuxt/ecc4207bb61d6feb49b4.js",
    "revision": "f25e4e3029188cd6947157bbe05561f8"
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
