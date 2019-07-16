<template>
  <div class="main-content">
    <div v-if="posts && posts.length">
      <Hero :story="posts[0]" />
      <hr class="spacer is-1-5 is-hidden-mobile">
      <div class="columns">
        <div class="column is-8">
          <div>
            <StoryPreview
              v-for="(p, index) in posts.slice(1)"
              :key="index"
              :story="p"
            />
          </div>
        </div>
        <div class="column is-4">
          <div class="is-hidden-mobile">
            <PopularArticles />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <ErrorBox />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';
import Hero from '@/components/Hero';

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
  async asyncData() {
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    posts.sort((a, b) => {
      if (a.published_date > b.published_date) return -1;
      if (b.published_date > a.published_date) return 1;
      return 0;
    });
    return {
      posts
    };
  },
  head() {
    return {
      /* eslint no-underscore-dangle: 0 */
      title: this.posts[0]._class.split('.').pop(),
      meta: [
        /* eslint no-underscore-dangle: 0 */
        { hid: 'og:title', name: 'og:title', content: this.posts[0]._class.split('.').pop() },
      ]
    };
  }
};
</script>
