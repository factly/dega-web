const pkg = require('./package');
// const getAppRoutes = require('./utils/getRoutes.js');
// const getGATracking = require('./utils/getGATracking.js');
require('dotenv').config();

module.exports = {
  env: {
    apiUri: process.env.API_URI || 'https://api.factly.in',
    clientId: process.env.CLIENT_ID || 'factly-telugu',
    domainHostname: process.env.DOMAIN_HOSTNAME || 'https://factcheck.factly.in',
    userDataApiUri: process.env.USER_DATA_API_URI || 'http://localhost:8081',
    logoutUri: process.env.LOGOUT_ENDPOINT,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    userModule: process.env.userModule || 'true'
    // eslint-disable-next-line linebreak-style
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Mallanna|Ramabhadra&display=swap'}
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      //  { rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/css/main.css'],

  router: {
    middleware: 'i18n'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/core-components.js',
    '~/plugins/date-filter.js',
    '~/plugins/i18n.js',
    { src: '~plugins/ga.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: false
  },


  auth: {
    rewriteRedirect: true,
    strategies: {
      social: {
        _scheme: 'oauth2',
        authorization_endpoint: process.env.AUTHORIZATION_ENDPOINT,
        userinfo_endpoint: process.env.USERINFO_ENDPOINT,
        // propertyName: false,
        scope: ['openid', 'profile', 'email'],
        response_type: 'code',
        // token_type: 'id_token',
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        access_token_endpoint: process.env.ACCESS_TOKEN_ENDPOINT,
        end_session_endpoint: process.env.LOGOUT_ENDPOINT,
        grant_type: 'authorization_code',
        // token_key:  'access_token',
        // state: 'UNIQUE_AND_NON_GUESSABLE'
        fetchUser() {
          console.log('Fetching User');
        }
      }
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
    // routes() {
    //   return getAppRoutes();
    // }
    routes: [
      // 'authors',
      // 'category',
      // 'tags',
      // {
      //   url: '/pages/author',
      //   changefreq: 'daily',
      //   priority: 1,
      //   lastmodISO: '2017-06-30T13:30:00.000Z'
      // },
      // {
      //   url: '/pages/category',
      //   changefreq: 'daily',
      //   priority: 1,
      //   lastmodISO: '2017-06-30T13:30:00.000Z'
      // },
      // {
      //   url: '/pages/factcheck',
      //   changefreq: 'daily',
      //   priority: 1,
      //   lastmodISO: '2017-06-30T13:30:00.000Z'
      // },
      // {
      //   url: '/pages/post',
      //   changefreq: 'daily',
      //   priority: 1,
      //   lastmodISO: '2017-06-30T13:30:00.000Z'
      // },
      // {
      //   url: '/pages/tag',
      //   changefreq: 'daily',
      //   priority: 1,
      //   lastmodISO: '2017-06-30T13:30:00.000Z'
      // },
    ]
  }

  // googleAnalytics: {
  // id: getGATracking()
  // id: 'UA-139226775-1'
  // }
};
