importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute(
  [
    {
      url: '/_nuxt/08aa7839f6ff58c9f484.js',
      revision: 'b3eca3b3fc0295c9a6e012daec477e79'
    },
    {
      url: '/_nuxt/0c6c82925494cc0c986d.js',
      revision: '9e99ae07fb93029b7cf3fca66a52e87c'
    },
    {
      url: '/_nuxt/2c45ee321e9bdf567737.js',
      revision: 'f7fe049260e812ebd8c59643f1d9285f'
    },
    {
      url: '/_nuxt/3743ab1a37d44eeaf304.js',
      revision: '61b7570e7daac18dc41341513e393f7b'
    },
    {
      url: '/_nuxt/425d186550efe5c7ca64.js',
      revision: 'fcea07681c298437915e70673dd79847'
    },
    {
      url: '/_nuxt/4705c016e9769d336c03.js',
      revision: '1d9494a27922069135c99aff944e6ee8'
    },
    {
      url: '/_nuxt/599976ad4812526a2cee.js',
      revision: '46209cd300974f370e3eaf39313033ce'
    },
    {
      url: '/_nuxt/5be04bc7d59b49e0b5ac.js',
      revision: '33815ca9db2bd81d6dc454c25b7bc4fb'
    },
    {
      url: '/_nuxt/5ffc3552b50bf606530e.js',
      revision: 'd6ef71c06ad056ebe330a8e2073407db'
    },
    {
      url: '/_nuxt/751eeb8ab44e66e5a3d5.js',
      revision: 'da08be48dd687bd3adfb99d9d29e06dc'
    },
    {
      url: '/_nuxt/7fe2c93bab82dcd8e86c.js',
      revision: 'bd7616cc67e2c4661a51693fbe18de1a'
    },
    {
      url: '/_nuxt/80b37c5c17fb8fc4d08a.js',
      revision: 'dcedf8cc6ba1908d9253f783a5f7d4b9'
    },
    {
      url: '/_nuxt/8d97cab8b523367935dd.js',
      revision: '342cf519fe861a22b7904381eeb58d97'
    },
    {
      url: '/_nuxt/9e2ffc9af6f84be2c447.js',
      revision: '27203a2a85f05bba7874f7b45364b908'
    },
    {
      url: '/_nuxt/a9ede1aac2f35a092960.js',
      revision: 'd92ef97d11ad0996f4c3e5d4e6cedaf1'
    },
    {
      url: '/_nuxt/ac60d2c9529d3f5ecf33.js',
      revision: '761ea13cf33491ea9390f9e1661a6a5d'
    },
    {
      url: '/_nuxt/ace48878af6b14c401cd.js',
      revision: 'ae48364b9c53a90114b4100458681649'
    },
    {
      url: '/_nuxt/b17dbdf32a57b4a19597.js',
      revision: '56ecee94970b078582ce3de061354073'
    },
    {
      url: '/_nuxt/c2ed27aabce68ce076b6.js',
      revision: '16e7f523334a6865568a64b7f01975c0'
    },
    {
      url: '/_nuxt/c5db2edef2c80509b307.js',
      revision: '508b978305112a37c83eaf42a1756485'
    },
    {
      url: '/_nuxt/c8565ba2492af9bff682.js',
      revision: '4f8bfbc3029ea1917a277c7d85facb11'
    },
    {
      url: '/_nuxt/c9b0430f6fd744d6f8a1.js',
      revision: '2cb6ab4d6edf9615adbd23383ebdabc0'
    },
    {
      url: '/_nuxt/d1372e77aaeb61677452.js',
      revision: 'ddb3675e1ee14ea95b497c2abf873241'
    },
    {
      url: '/_nuxt/d768a385f3a61d0bb7fe.js',
      revision: '1c5c5545e981e74938629d96061d99bd'
    },
    {
      url: '/_nuxt/e70351199aa7735f466b.js',
      revision: '9c452b457a562f591ecfc309fe93054b'
    },
    {
      url: '/_nuxt/f4fdcae7070cda8f4af6.js',
      revision: '44141dab0f378e2fa14bd236184266f8'
    },
    {
      url: '/_nuxt/fa42305d40d70f50f442.js',
      revision: 'b9e5922ec5c2482c1e61b0ef061d105c'
    },
    {
      url: '/_nuxt/ff9669856b3607fce0a9.js',
      revision: '8dcaad7547f345d2a1d0ff6b2c090f7c'
    }
  ],
  {
    cacheId: 'dega-web',
    directoryIndex: '/',
    cleanUrls: false
  }
)

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(
  new RegExp('/_nuxt/.*'),
  workbox.strategies.cacheFirst({}),
  'GET'
)

workbox.routing.registerRoute(
  new RegExp('/.*'),
  workbox.strategies.networkFirst({}),
  'GET'
)
