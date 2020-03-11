<template>
  <div class="main-content">
    <Hero :story="stories[0]" />
    <hr class="spacer is-1-5 is-hidden-mobile">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryPreview
            v-for="(p, index) in stories.slice(1)"
            :key="index"
            :story="p"
          />
        </div>
        <div
          v-if="stories.length > 0 && stories.length >= total"
          class="margin-top-2">
          <h3 class="is-size-4 has-text-centered">No more stories</h3>
        </div>
      </div>
      <div class="column is-4">
        <div class="is-hidden-mobile">
          <RelatedArticle
            slug="bussiness-5c38f470569ed47e00c7002c"
            header="Recent Bussiness"
            collection="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import StoryPreview from '@/components/StoryPreview';
import Hero from '@/components/Hero';
import RelatedArticle from '@/components/RelatedArticle';
import { postsQuery } from '../../graphql/query/posts';

export default {
  components: {
    StoryPreview,
    Hero,
    RelatedArticle
  },
  data() {
    return {
      stories: [],
      total: 0,
      pagination: {
        pageNext: 2
      }
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && this.stories.length < this.total) {
          this.getStories();
        }
      };
    },
    async getStories() {
      /* fectching posts */
      const posts = await this.$apollo.query({
        query: gql(
          String.raw`
            query (
              $limit: Int
              $page: Int
              $category: [String!]
              $tag: [String!]
              $user: [String!]
              $sortBy: String
              $sortOrder: String 
            ) {
                ${postsQuery}
              }
            `),
        variables: {
          limit: 5,
          page: this.pagination.pageNext
        }
      })
        .then(p => p.data.posts.nodes)
        .catch(() => {
          this.error({ code: 500, message: 'Something went wrong', homepage: true });
        });
      this.pagination.pageNext += 1;
      this.stories = this.stories.concat(posts);
    }
  },
  async asyncData({ app, error }) {
    /* fectching posts */
    const posts = await app.apolloProvider.defaultClient.query({
      query: gql(
        String.raw`
          query (
            $limit: Int
            $page: Int
            $category: [String!]
            $tag: [String!]
            $user: [String!]
            $sortBy: String
            $sortOrder: String 
          ) {
              ${postsQuery}
            }
        `),
      variables: {
        limit: 5,
        page: 1
      }
    })
      .then(p => p.data.posts)
      .catch(() => {
        error({ code: 500, message: 'Something went wrong', homepage: true });
      });

    return {
      stories: posts.nodes,
      total: posts.total
    };
  }
};
</script>-->
