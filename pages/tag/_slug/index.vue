<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div v-if="story && story.length">
          <div class="columns">
            <div class="column is-8">
              <div>
                <StoryPreview
                  v-for="(p, index) in story"
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
import _ from 'lodash';

export default {
  components: {
    StoryPreview
  },
  data() {
    return {
      story: null,
      metaData: null
    };
  },
  methods: {
    validate({ params }) {
      return params.slug;
    }
  },
  async asyncData(params) {
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&tag=${params.params.slug}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&tag=${params.params.slug}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const stories = (posts || []).concat(factchecks || []);
    const sortedStories = _.orderBy(stories, ['published_date'], ['desc']);
    return {
      story: sortedStories,
      metaData: {
        title: sortedStories[0].tags[0].name,
        meta: [
          { hid: 'og:title', name: 'og:title', content: sortedStories[0].tags[0].name },
        ]
      }
    };
  },
  head() {
    if (this.story[0].tags[0].description) { this.metaData.meta.push({ hid: 'og:description', name: 'og:description', content: this.story[0].tags[0].description }); }
    return this.metaData;
  }
};
</script>
