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
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, te }
  }
}

module.exports = {
  I18N
}