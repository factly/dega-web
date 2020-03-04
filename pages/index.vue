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
              slug="5c38f470569ed47e00c7002c"
              header="Recent Bussiness"
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
import factCheckQuery from '../graphql/query/factchecks.gql';
import postQuery from '../graphql/query/posts.gql';

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
  async asyncData({ app, error }) {
    const factchecks = await app.apolloProvider.defaultClient.query({
      query: factCheckQuery,
      variables: {
        limit: 5,
        sortBy: 'published_date',
        sort: 'DES'
      }
    })
      .then(f => f.data.factchecks.nodes)
      .catch(() => error({ code: 500, message: 'Something went wrong' }));

    const posts = await app.apolloProvider.defaultClient.query({
      query: postQuery,
      variables: {
        limit: 5,
        sortBy: 'published_date',
        sort: 'DES'
      }
    })
      .then(p => p.data.posts.nodes)
      .catch(() => error({ code: 500, message: 'Something went wrong' }));

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
