<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div v-if="posts && posts.length">
          <Hero :story="posts[0]" />
          <hr class="spacer is-1-5 is-hidden-mobile">
          <div class="columns">
            <div class="column is-8">
              <div class="columns is-multiline">
                <div
                  v-for="(p, index) in posts.slice(1)"
                  :key="index"
                  class="column is-6"
                >
                  <StoryPreview
                    :story="p"
                  />
                </div>
              </div>
            </div>
            <div class="column is-4">
              <PopularArticles />
            </div>
          </div>
        </div>
        <div
          v-else
          class="subtitle is-6 is-uppercase has-text-centered">
          Dega API is not responding.<br> Please contact the administrator.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';
import Hero from '@/components/Hero';
import _ from 'lodash';

export default {
  components: {
    StoryPreview,
    Hero
  },
  data() {
    return {
      posts: null
    };
  },
  // created(){
  //   console.log("created");
  //   this.posts = _.orderBy(this.$store.getters.getPosts, ['published_date'], ['desc']);
  // },
  async asyncData() {
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const sortedPosts = _.orderBy(posts, ['published_date'], ['desc']);
    return {
      posts: sortedPosts
    };
  },
  head() {
    return {
      /* eslint no-underscore-dangle: 0 */
      title: this.posts[0]._class.split('.').pop(),
      meta: [
        /* eslint no-underscore-dangle: 0 */
        { hid: 'og:title', name: 'og:title', content: this.posts[0]._class.split('.').pop() },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
      ]
    };
  }
};
</script>
