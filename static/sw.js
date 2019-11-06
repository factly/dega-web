importScripts('/_nuxt/workbox.4c4f5ca6.js');

workbox.precaching.precacheAndRoute([
  {
    url: '/_nuxt/1033afbbdbd68e528fcc.js',
    revision: '2ae103fa0d36b1364b68594262dc354d'
  },
  {
    url: '/_nuxt/1a94892778ad10e638ab.js',
    revision: 'b8500e15cc62d4ebb9ebae826b96fbe9'
  },
  {
    url: '/_nuxt/1ff26a83837020423144.js',
    revision: '1faa6085d63e547af5080117c396874f'
  },
  {
    url: '/_nuxt/22cabedc938a80813fff.js',
    revision: '9bb5ff801a7a3d30176669ea48adacf9'
  },
  {
    url: '/_nuxt/311f6abba00f29e14983.js',
    revision: 'd45171c3f275bb1f20893088a966b53e'
  },
  {
    url: '/_nuxt/378ca69a0ce52860cc1a.js',
    revision: 'd3062904041824d2ac790b3218b8f87c'
  },
  {
    url: '/_nuxt/52e76d596d706b115f90.js',
    revision: '0953f604abe7385dd2c8ab882971831b'
  },
  {
    url: '/_nuxt/5cb3cd25a29913af1da9.js',
    revision: 'be043d1eafcd7ebff200357cd68ac18e'
  },
  {
    url: '/_nuxt/6bd84fc763b7e2e71f1d.js',
    revision: 'e8988c91fe1d88c5873666ebfa60ee11'
  },
  {
    url: '/_nuxt/76b6557668862177aa09.js',
    revision: '23341ab07c0393dc84894308abecfecf'
  },
  {
    url: '/_nuxt/88fee198325d5210cf9f.js',
    revision: '7917fdbd1601a7b8dbae27bb5202b2da'
  },
  {
    url: '/_nuxt/8aaa98974fe5292cf6f4.js',
    revision: '73b3c07b1b36bf78c406a7a270f6b7da'
  },
  {
    url: '/_nuxt/9bb05b791a1a097fffe5.js',
    revision: 'a09ceaae108509a02de75cc6d5afa441'
  },
  {
    url: '/_nuxt/9f3c6719245dbad4a228.js',
    revision: '549307026f59dc024b47916d736a9f90'
  },
  {
    url: '/_nuxt/bd55ecdd248f624a8225.js',
    revision: '1438b666c0e495283cd3763f2fdcdeed'
  },
  {
    url: '/_nuxt/c5f284eaa68fb2ffd9e2.js',
    revision: '0bab0415233a27c400809817f796cd45'
  },
  {
    url: '/_nuxt/c83946ce1f16875a4054.js',
    revision: 'b0a308679c73a1c8714c949403186efc'
  },
  {
    url: '/_nuxt/d8b04f3126b8697d89bc.js',
    revision: 'e6cffb5e1b168f94480b6749aa1d677f'
  },
  {
    url: '/_nuxt/dd835df9ef0167922156.js',
    revision: '7d930a2d3e91dd4bea97880745805add'
  },
  {
    url: '/_nuxt/e8f71156ecd10aabc363.js',
    revision: '69c691e1f8a7ac7a62b6eca9af5193f4'
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
