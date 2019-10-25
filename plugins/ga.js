/* eslint-disable */
// const getGATracking = require('../utils/getGATracking.js');
const axios = require('axios');


export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  // if (process.env.NODE_ENV !== 'production') return
  /*
  ** Include Google Analytics Script
  */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    /*
    ** Set the current page
    */
  let config = {
    headers: {
      client: process.env.CLIENT_ID,
    }
  }
  const GAC = axios
  .get(`${process.env.API_URI}/api/v1/organizations`, config)
  .then(response => {
    ga('create', response.data.gaTrackingCode, 'auto')
    ga('send', 'pageview')
    app.router.afterEach((to, from) => {
      /*
      ** We tell Google Analytics to add a `pageview`
      */
      ga('set', 'page', to.fullPath)
      ga('send', 'pageview')
    })
  })
  .catch(err => console.log(err));
}
