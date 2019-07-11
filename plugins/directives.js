import Vue from 'vue'

const loadTwitter = (target) => process.browser && window.twttr && window.twttr.widgets.load(target)

Vue.directive('twitter-widgets', {
  bind: function(el){
    loadTwitter(el)
  },
  update: function(el){
    loadTwitter(el)
  }
})