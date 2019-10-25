importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0428cbd6181be7f37393.js",
    "revision": "6506c5801fd3b79dbece8ac023e9f593"
  },
  {
    "url": "/_nuxt/0f3f7766be85b0f65998.js",
    "revision": "0953f604abe7385dd2c8ab882971831b"
  },
  {
    "url": "/_nuxt/157f7558fea876aa4d21.js",
    "revision": "fcf2def7a2a31a0e73a5190ca54116ab"
  },
  {
    "url": "/_nuxt/1ea5d4f8fc27d68d8e01.js",
    "revision": "d9612df8828fc93c6e56c4d23d215f03"
  },
  {
    "url": "/_nuxt/203243682bc8afd7087c.js",
    "revision": "6f5dc6b8cda3ca7748243ac8867cf866"
  },
  {
    "url": "/_nuxt/2317edc1b8e071d68a2a.js",
    "revision": "b571d09e1d863ea6bf7ec147c62a7dfc"
  },
  {
    "url": "/_nuxt/323eeca108b41e5b9280.js",
    "revision": "6097a5c07c624ffc885d224dec150ffe"
  },
  {
    "url": "/_nuxt/3649c1ba1dc34ade517c.js",
    "revision": "e8988c91fe1d88c5873666ebfa60ee11"
  },
  {
    "url": "/_nuxt/378b59af62c11a4204fc.js",
    "revision": "578ca217d98da9fbdc84338a29f646a7"
  },
  {
    "url": "/_nuxt/4a6377771ef5dfef61dd.js",
    "revision": "1faa6085d63e547af5080117c396874f"
  },
  {
    "url": "/_nuxt/731866312f55244aeaa9.js",
    "revision": "7d930a2d3e91dd4bea97880745805add"
  },
  {
    "url": "/_nuxt/76a2e374c1a991f3c9ed.js",
    "revision": "7b96e97b5ade91aa903fb764a6ea4e38"
  },
  {
    "url": "/_nuxt/98a525d43ca55e28da5b.js",
    "revision": "2555e01101f24fa034e7156725f5005c"
  },
  {
    "url": "/_nuxt/dd1a8ca27bcc7741b78b.js",
    "revision": "23341ab07c0393dc84894308abecfecf"
  },
  {
    "url": "/_nuxt/def63b707a1b8aba6166.js",
    "revision": "d45171c3f275bb1f20893088a966b53e"
  },
  {
    "url": "/_nuxt/e5ec86a09a6ad3731ad1.js",
    "revision": "d3062904041824d2ac790b3218b8f87c"
  },
  {
    "url": "/_nuxt/e6a6dcfac62cf9d576df.js",
    "revision": "67048353bfd7eb6887a324e56e6fbf00"
  },
  {
    "url": "/_nuxt/eac0094d5b0d1cd96e55.js",
    "revision": "07ae930f57370b97b028884795ed8faa"
  },
  {
    "url": "/_nuxt/f86bfdb35092712be1c5.js",
    "revision": "73b3c07b1b36bf78c406a7a270f6b7da"
  },
  {
    "url": "/_nuxt/ff3503111a6821eb5092.js",
    "revision": "5bb947f21f5e794f9605e53da8acc557"
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
