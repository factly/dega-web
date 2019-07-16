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
    <div v-else-if="post && post.length === 0">
      <LostBox />
    </div>
    <div v-else>
      <ErrorBox />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&tag=${params.params.slug}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&tag=${params.params.slug}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const stories = (posts || []).concat(factchecks || []);
    stories.sort((a, b) => {
      if (a.published_date > b.published_date) return -1;
      if (b.published_date > a.published_date) return 1;
      return 0;
    });
    return { story: stories };
  },
  head() {
    const metadata = {};
    const { story } = this;
    if (story && story.length > 0) {
      metadata.title = story[0].tags[0].name;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: story[0].tags[0].display_name },
        { hid: 'og:description', name: 'og:description', content: story[0].tags[0].description ? story[0].tags[0].description : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.site_title; }

    return metadata;
  }
};
</script>
