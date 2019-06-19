const axios = require('axios');

async function getSitemapRoutes() {
  const sitemap = await axios
    .get(`${process.env.API_URI}/api/v1/sitemap/?client=${process.env.CLIENT_ID}`)
    .then(response => response.data)
    .catch(err => console.log(err));
  return sitemap;
}

module.exports = getSitemapRoutes();
