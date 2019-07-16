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
    <div v-else>
      <ErrorBox />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
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
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const stories = (posts || []).concat(factchecks || []);
    const sortedStories = _.orderBy(stories, ['published_date'], ['desc']);
    return {
      story: sortedStories
    };
  }
};
</script>
