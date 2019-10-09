export default function ({ $axios, error }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line
    config.headers.common['client'] = process.env.CLIENT_ID;
  });
  $axios.onResponse((response) => {
    if (response.status !== 200) error({ code: 404, message: 'Something went wrong', homepage: true });
  });
  $axios.onError((err) => {
    console.log(err);
    error({ code: 404, message: 'Something went wrong', homepage: true });
  });
}
