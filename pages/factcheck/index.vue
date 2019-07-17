<template>
  <div class="main-content">
    <Hero :story="factchecks[0]"/>
    <hr class="spacer is-1-5 is-hidden-mobile">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryPreview
            v-for="(p, index) in factchecks.slice(1)"
            :story="p"
            :key="index"
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
</template>

<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';
import Hero from '~/components/Hero';

export default {
  components: {
    Hero,
    StoryPreview
  },
  data() {
    return {
      factchecks: null
    };
  },
  async asyncData({ error }) {
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    if (factchecks.length === 0) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }
    return {
      factchecks
    };
  },
  head() {
    return {
      /* eslint no-underscore-dangle: 0 */
      title: this.factchecks[0]._class.split('.').pop(),
      meta: [
        /* eslint no-underscore-dangle: 0 */
        { hid: 'og:title', name: 'og:title', content: this.factchecks[0]._class.split('.').pop() },
      ]
    };
  }
};
</script>
