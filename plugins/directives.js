import Vue from 'vue';

function loadTwitter(el) {
  const html = el;
  if (process.browser && window.twttr) {
    const tweets = html.getElementsByClassName('tweet');
    for (let i = 0; i < tweets.length; i += 1) {
      if (tweets[i].hasAttribute('data-id')) {
        tweets[i].classList.add('tw-align-center');
        const tweetID = tweets[i].getAttribute('data-id');
        window.twttr.widgets.createTweet(
          tweetID,
          tweets[i]
        )
          .then(
            html.querySelector('#twitter-widget-4').style.display = 'none'
          );
      }
    }
  } loadTwitter(el);
}

Vue.directive('twitter-widgets', {
  bind(el) {
    loadTwitter(el);
  }
});
