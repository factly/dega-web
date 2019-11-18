import en from '../locales/en-US.js';
import te from '../locales/te-IN.js';
import dotenv from 'dotenv'

dotenv.config()

export default {
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
