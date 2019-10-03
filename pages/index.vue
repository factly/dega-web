<template>
  <div class="main-content">
    <div v-if="stories && stories.length">
      <div>
        <Hero :story="stories[0]" />
      </div>
      <hr class="spacer is-1-5">
      <div class="columns">
        <div class="column is-8">
          <div>
            <StoryPreview
              v-for="(story, index) in stories.slice(1)"
              :key="index"
              :story="story"
            />
          </div>
        </div>
        <div class="column is-4">
          <div class="is-hidden-mobile">
            <RelatedArticle
              slug="video"
              header="Recent Videos"
              collection="category"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoryPreview from '@/components/StoryPreview';
import Hero from '@/components/Hero';
import RelatedArticle from '@/components/RelatedArticle';

export default {
  components: {
    Hero,
    StoryPreview,
    RelatedArticle
  },
  data() {
    return {
      stories: null
    };
  },
  async asyncData({ $axios }) {
    const posts = await $axios
      .get(encodeURI(`${process.env.API_URI}/api/v1/posts/?client=${process.env.CLIENT_ID}&sortBy=publishedDate&sortAsc=false&limit=10`))
      .then(response => response.data.data)
      .catch(err => console.log(err));
    const factchecks = await $axios
      .get(encodeURI(`${process.env.API_URI}/api/v1/factchecks/?client=${process.env.CLIENT_ID}&sortBy=publishedDate&sortAsc=false&limit=10`))
      .then(response => response.data.data)
      .catch(err => console.log(err));
    const stories = (posts || []).concat(factchecks || []);
    stories.sort((a, b) => {
      if (a.publishedDate > b.publishedDate) return -1;
      if (b.publishedDate > a.publishedDate) return 1;
      return 0;
    });
    return {
      stories
    };
  }
};
</script>
