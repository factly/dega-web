<template>
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
    <div v-else-if="story && story.length === 0">
      <LostBox />
    </div>
    <div v-else>
      <ErrorBox />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import StoryPreview from '@/components/StoryPreview';

export default {
  components: {
    StoryPreview
  },
  data() {
    return {
      story: []
    };
  },
  methods: {
    validate({ params }) {
      return params.slug;
    }
  },
  async asyncData(params) {
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&author=${params.params.slug}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&user=${params.params.slug}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const stories = (posts || []).concat(factchecks || []);
    const sortedStories = _.orderBy(stories, ['published_date'], ['desc']);
    return { story: sortedStories };
  },
  head() {
    const metadata = {};
    const { story } = this;
    if (story && story.length > 0) {
      metadata.title = story[0].authors[0].display_name;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: story[0].authors[0].display_name },
        { hid: 'og:image', name: 'og:image', content: story[0].authors[0].profile_picture ? story[0].authors[0].profile_picture : null },
        { hid: 'og:description', name: 'og:description', content: story[0].authors[0].description ? story[0].authors[0].description : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.site_title; }

    return metadata;
  }
};
</script>
