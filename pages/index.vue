<template>
  <div class="main-content">
    <div v-if="story && story.length">
      <div>
        <Hero :story="story[0]" />
      </div>
      <hr class="spacer is-1-5">
      <div class="columns">
        <div class="column is-8">
          <div>
            <StoryPreview
              v-for="(p, index) in story.slice(1)"
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
  </div>
</template>

<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';
import Hero from '@/components/Hero';

export default {
  authenticated: true,
  components: {
    Hero,
    StoryPreview
  },
  data() {
    return {
      story: null
    };
  },
  async asyncData() {
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false&limit=10`))
      .then(response => response.data.data)
      .catch(err => console.log(err));
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false&limit=10`))
      .then(response => response.data.data)
      .catch(err => console.log(err));
    const stories = (posts || []).concat(factchecks || []);
    stories.sort((a, b) => {
      if (a.published_date > b.published_date) return -1;
      if (b.published_date > a.published_date) return 1;
      return 0;
    });
    return {
      story: stories
    };
  }
};
</script>
