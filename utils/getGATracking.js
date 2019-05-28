const axios = require('axios');

module.exports = async function getGATracking() {
  console.log(`${process.env.API_URI}/api/v1/organizations/?client=factly-telugu`);
  const gaTrackingCode = await axios
    .get(`${process.env.API_URI}/api/v1/organizations/?client=${process.env.CLIENT_ID}`)
    .then(response => response.data[0].ga_tracking_code)
    .catch(err => console.log(err));
  console.log(`${process.env.CLIENT_ID}`);
  console.log(gaTrackingCode);
  return gaTrackingCode;
};
