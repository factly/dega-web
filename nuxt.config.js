const SitemapRoutes = require('./utils/getSitemapRoutes.js');
require('dotenv').config();
const  { I18N } = require('./config');

module.exports = {
  env: {
    apiUri: process.env.API_URI || 'https://api.factly.in',
    clientId: process.env.CLIENT_ID || 'factly-telugu',
    domainHostname: process.env.DOMAIN_HOSTNAME || 'https://factcheck.factly.in',
    userDataApiUri: process.env.USER_DATA_API_URI || 'http://localhost:8081/api/v1',
    logoutUri: process.env.LOGOUT_ENDPOINT,
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:3000',
    userModule: process.env.userModule || 'true'
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Mallanna&display=swap' },
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
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/auth',
    ['nuxt-i18n', I18N],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    credentials: false
  },


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
    },
    redirect: {
      callback: '/callback'
    }
  },
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

  sitemap: {
    hostname: process.env.DOMAIN_HOSTNAME,
    gzip: true,
    generate: false,
    exclude: [
    ],
    routes() {
      return SitemapRoutes;
    }
  }
};
