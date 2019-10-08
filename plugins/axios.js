export default function ({ $axios }) {
  $axios.onRequest((config) => {
    $axios.setHeader('client', 'check');
    console.log(config.url);
    console.log(config.headers.common.client);
  });
}
