export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.headers.common['x-client'] = 'factly';
  });
}
