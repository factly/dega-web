importScripts('/_nuxt/workbox.4c4f5ca6.js');


workbox.precaching.precacheAndRoute([
  {
    url: '/_nuxt/04a12cb489f4ff8b9a0c.js',
    revision: 'f13e50045aa46abf76f1c31218363fc8'
  },
  {
    url: '/_nuxt/0cfeffb8fbbe0dcfccf2.js',
    revision: '35754e4bc5fa44bc48a9bfd411de5d04'
  },
  {
    url: '/_nuxt/10cf5b7030a96098703a.js',
    revision: '797cdfffc1e79dbf6d3b6e8a8acc37e5'
  },
  {
    url: '/_nuxt/1c58119d7bfbd6d805f3.js',
    revision: 'f875cc22cadd19e86d3e53b7af3abbfa'
  },
  {
    url: '/_nuxt/1f5f0409f762d1cf2ca7.js',
    revision: '0ee7d8340e8440cd51df34ce3138e5cc'
  },
  {
    url: '/_nuxt/2589bc722965876ad0f7.js',
    revision: '7f229bd951189bcc5e8289f9e2a1ff3c'
  },
  {
    url: '/_nuxt/31d1886ca66d65285550.js',
    revision: 'ace880cc1def7e3aad6ef7b83790f7e9'
  },
  {
    url: '/_nuxt/5a4cb96b984ba80f2c2d.js',
    revision: '893d232a96de4715dd84079b0cc5214d'
  },
  {
    url: '/_nuxt/5b85df5d29d608f2fe05.js',
    revision: '947e01d722fde279f4e5fb7c9ff0395f'
  },
  {
    url: '/_nuxt/61cab2ffcdef4ef66029.js',
    revision: '458f9b6f3e9426d1d3246c0af3487d83'
  },
  {
    url: '/_nuxt/6222803394c6991a7814.js',
    revision: '354e553a997ee502c60143ecff89f536'
  },
  {
    url: '/_nuxt/62c772355108f83711f3.js',
    revision: '9d3f96142f7e04a6b4ff170ee3dd9336'
  },
  {
    url: '/_nuxt/696712f1a4217d7f4d94.js',
    revision: '78f4679df5afe97a86aa451ebf30d32a'
  },
  {
    url: '/_nuxt/71edb3e9fecfe5b2ca31.js',
    revision: '45fd2f91118102c7632782761f3b5581'
  },
  {
    url: '/_nuxt/7306e00e4dddf03e4401.js',
    revision: '68fd80bef6548d3ad9915fae2e649a94'
  },
  {
    url: '/_nuxt/830bcf5bc42df8a83e71.js',
    revision: 'd6b99d8a9b57d7face995b85d012701c'
  },
  {
    url: '/_nuxt/9142b4b9a447e09d7861.js',
    revision: 'dc872b5981e3d524697794a2de9c6bc1'
  },
  {
    url: '/_nuxt/a63b7a4b93ae71ef0f6e.js',
    revision: '35d2de0f41641d349ab362e7f805c014'
  },
  {
    url: '/_nuxt/ad7730746988b9cceceb.js',
    revision: '47b5ab4f6d3fa6d6761d03e9e8802f57'
  },
], {
  cacheId: 'dega-web',
  directoryIndex: '/',
  cleanUrls: false
});


workbox.clientsClaim();
workbox.skipWaiting();


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET');

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET');
