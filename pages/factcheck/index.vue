<template>
  <div class="main-content">
    <div v-if="factchecks && factchecks.length">
      <Hero :story="factchecks[0]"/>
      <hr class="spacer is-1-5 is-hidden-mobile">
      <div class="columns">
        <div class="column is-8">
          <div>
            <StoryPreview
              :story="p"
              v-for="(p, index) in factchecks.slice(1)"
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
    <div v-else>
      <ErrorBox />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';
import Hero from '~/components/Hero';
import _ from 'lodash';

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
  async asyncData() {
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(error => console.log(error));
    const sortedFactchecks = _.orderBy(factchecks, ['published_date'], ['desc']);
    return {
      factchecks: sortedFactchecks
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
