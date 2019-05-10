const pkg = require('./package');
require('dotenv').config()
module.exports = {
  env: {
    apiUri: process.env.API_URI || 'http://api.factly.in',
    clientId: process.env.CLIENT_ID || 'factly',
    domainHostname: process.env.DOMAIN_HOSTNAME || 'http://factcheck.factly.in',
    userDataApiUri: process.env.USER_DATA_API_URI || 'http://localhost:8081',
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
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      /* ,{ rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"} */
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
  plugins: ['~/plugins/i18n.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa',
    'nuxt-oauth'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  oauth: {
	sessionName: 'mySession',
	secretKey: process.env.SECRET_KEY,
	oauthHost: process.env.OAUTH_HOST,
	oauthClientID: process.env.OAUTH_CLIENT_ID,
	oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
	authorizationPath:process.env.AUTHORIZATION_PATH,
	accessTokenPath:process.env.ACCESS_TOKEN_PATH,
	scopes: ['openid','profile','email'],
	onLogout: (req, res) => {
	  console.log("req",req);
	  console.log("res",res);
	  console.log("Log out");
	},
  fetchUser: async (accessToken) => {
    console.log("Fetching User called");
      var config = {
        headers: {'Authorization': "bearer " + accessToken}
    };
    
    var bodyParameters = {
      key: "value"
    }
    let user;
    let axios = require('axios')
    let usercall = await axios.post( 
      'http://localhost:8080/auth/realms/Factly/protocol/openid-connect/userinfo',
      bodyParameters,
      config
    ).then((response) => {
      user = response.data;
      //console.log("fetch user response",response.data)
    }).catch((error) => {
      //console.log("fetch user error",error)
    });
    //const user = User.findByToken(accessToken, request)

    let userLiked = await axios.post(
      'http://localhost:8081/getliked',
      {
        user:user,
        accessToken:accessToken
      }).then((response)=>{
        console.log(response.data)
        user["prefs"] = response.data;
      })
    
    return user
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
  }
};
