const  { I18N } = require('./config');

module.exports = {
  env: {
    API_URI: process.env.API_URI,
    CLIENT_ID: process.env.CLIENT_ID,
    DOMAIN_HOSTNAME: process.env.DOMAIN_HOSTNAME,
    USER_DATA_API_URI: process.env.USER_DATA_API_URI,
    LOGOUT_ENDPOINT: process.env.LOGOUT_ENDPOINT,
    BASE_URL: process.env.BASE_URL,
    USER_MODULE: process.env.USER_MODULE
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
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/auth',
    'nuxt-i18n',
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    credentials: false
  },

  /*
  ** Auth module configuration
  */
  auth: {
    strategies: {
      social: {
        _scheme: 'oauth2',
        authorization_endpoint: process.env.AUTHORIZATION_ENDPOINT,
        userinfo_endpoint: process.env.USERINFO_ENDPOINT,
        scope: ['openid', 'profile', 'email'],
        response_type: 'code',
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        access_token_endpoint: process.env.ACCESS_TOKEN_ENDPOINT,
        end_session_endpoint: process.env.LOGOUT_ENDPOINT,
        grant_type: 'authorization_code'
      }
    }
  },

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
  },
};
