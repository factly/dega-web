const en = require('../locales/en-US.js');
const te = require('../locales/te-IN.js');
require('dotenv').config();

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
    },
  ],
  defaultLocale: process.env.DEFAULT_LANG,
  vueI18n: {
    fallbackLocale: process.env.DEFAULT_LANG,
    messages: { en, te }
  }
};

module.exports = {
  I18N
};
