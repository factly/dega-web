import I18N from './config';
import SitemapRoutes from './utils/getSitemapRoutes.js';

export default {
  env: {
    API_URI: process.env.API_URI,
    CLIENT_ID: process.env.CLIENT_ID
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
  css: ['bulma/css/bulma.css', '@/assets/css/main.css', '@/assets/css/custom.css'],

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
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
    '@nuxtjs/apollo',
  ],

  /*
  ** Apollo module configuration
  */

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.API_URI,
        httpLinkOptions: {
          headers: {
            client: process.env.CLIENT_ID
          }
        },
        inMemoryCacheOptions: {
          addTypename: false
        }
      }
    }
  },

  /*
  ** i18n module configuration
  */
  i18n: I18N,

  sitemap: {
    routes() {
      return SitemapRoutes();
    }
  },

  /*
  ** Build configuration
  */
  build: {
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
