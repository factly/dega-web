const { I18N } = require('./config');

module.exports = {
  env: {
    API_URI: process.env.API_URI,
    CLIENT_ID: process.env.CLIENT_ID,
    DOMAIN_HOSTNAME: process.env.DOMAIN_HOSTNAME,
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/css/main.css', '@/assets/css/custom.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components.js',
    '~/plugins/filters.js',
    '~/plugins/directives.js',
    { src: '~plugins/ga.js', ssr: false },
    '~/plugins/axios.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
  ],

  /*
  ** Axios module configuration
  */
  axios: {},

  /*
  ** i18n module configuration
  */
  i18n: I18N,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    }
  }
};
