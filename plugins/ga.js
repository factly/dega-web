/* eslint-disable */
// const getGATracking = require('../utils/getGATracking.js');
const axios = require('axios');

async function getGATracking(app) {
  const gaTrackingCode = await axios
    .get(`${process.env.apiUri}/api/v1/organizations/?client=${process.env.clientId}`)
    .then(response => response.data[0].ga_tracking_code)
    .catch(err => console.log(err));
  console.log(gaTrackingCode);
  ga('create', gaTrackingCode, 'auto')
  app.router.afterEach((to, from) => {
    /*
    ** We tell Google Analytics to add a `pageview`
    */
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}

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
   getGATracking(app)
  }
