export default function ({ $axios, error, app }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line
    config.headers.common['client'] = app.$env.CLIENT_ID;
  });
  $axios.onResponse((response) => {
    if (response.status !== 200) error({ code: 404, message: 'Something went wrong', homepage: true });
  });
  $axios.onError(() => {
    error({ code: 404, message: 'Something went wrong', homepage: true });
  });
}
