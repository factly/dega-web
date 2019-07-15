import Vue from 'vue'
function loadTwitter(el) { 
  var html = el
  if(process.browser) {
    let tweets = html.getElementsByClassName('tweet');
    for( var i = 0; i < tweets.length; i += 1){
      if(tweets[i].hasAttribute('data-id')){
        let tweetID = tweets[i].getAttribute('data-id')
        window.twttr.widgets.createTweet(
          tweetID,
          tweets[i]
        )
        .then(
          html.querySelector('#twitter-widget-4').style.display = "none"
        )
      }
    }
  }
}

Vue.directive('twitter-widgets', {
  bind: function(el){
    loadTwitter(el)
  },
  update: function(el){
    loadTwitter(el)
  }
})