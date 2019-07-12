const en = require('../locales/en-US.js')
const te = require('../locales/te-IN.js')

const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    }, 
    {
      code: 'te',
      iso: 'te-IN',
      name: 'Telugu'
    }
  ],
  routes: {
    'post': {
      en: '/post',
      te: '/post'
    },
    'post/_slug': {
      en: '/post/:slug',
      te: '/post/:slug'
    },
    'factcheck': {
      en: '/factcheck',
      te: '/factcheck'
    },
    'factcheck/_slug': {
      en: '/factcheck/:slug',
      te: '/factcheck/:slug'
    },
    'category/_slug': {
      en: '/category/:slug',
      te: '/category/:slug',
    },
    'author/_slug': {
      en: '/author/:slug',
      te: '/author/:slug',
    },
    'tag/_slug': {
      en: '/tag/:slug',
      te: '/tag/:slug',
    },
  },
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, te }
  }
}

module.exports = {
  I18N
}