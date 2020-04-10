<template>
  <div>
    <div
      v-if="stories.length > 0"
      class="card">
      <header class="card-header">
        <p class="card-header-title">
          <nuxt-link
            :to="localePath({ name:'collection-slug-type', params: { collection, slug, type: null } })"
            class="has-text-black-bis">
            {{ header }}
          </nuxt-link>
        </p>
      </header>
      <div class="card-content">
        <div
          v-for="(story,index) in stories"
          :key="'category'+index"
          class="content">
          <div class="media">
            <div class="media-left">
              <figure
                v-if="story.media"
                class="image figure-width-5">
                <nuxt-link :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug+'-'+story._id } })">
                  <img
                    :src="story.media.source_url+'?resize:fill:80:45:0/gravity:sm'"
                    :alt="story.media.altText" >
                </nuxt-link>
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-6">
                <nuxt-link
                  :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug+'-'+story._id } })"
                  class="has-text-black-bis">
                  {{ story.title }}
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { pagingQuery as factchecksQuery } from '../graphql/query/factchecks';
import { pagingQuery as postsQuery } from '../graphql/query/posts';

export default {
  props: {
    collection: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    header: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      stories: []
    };
  },
  mounted() {
    this.getCollectionStories(this.collection, this.slug);
  },
  methods: {
    async getCollectionStories(collection, slug) {
      const variables = {
        limit: 5,
        sortBy: 'published_date',
        sort: 'DES'
      };

      if (collection && slug) variables[collection] = [slug.split('-').pop()];

      const result = await this.$apollo.query({
        query: gql(String.raw`
          query (
            $limit: Int
            $page: Int
            $category: [String!]
            $tag: [String!]
            $user: [String!]
            $sortBy: String
            $sortOrder: String 
          ) {
              ${factchecksQuery}
              ${postsQuery}
            }
          `),
        variables
      })
        .then(f => f.data)
        .catch(() => this.error({ code: 500, message: 'Something went wrong' }));

      const stories = (result.posts.nodes || []).concat(result.factchecks.nodes || []);

      stories.sort((a, b) => {
        if (a.publishedDate > b.publishedDate) return -1;
        if (b.publishedDate > a.publishedDate) return 1;
        return 0;
      });

      this.stories = this.id ? stories.filter(value =>
        // eslint-disable-next-line no-underscore-dangle
        value._id !== this.id
      ) : stories;
    }
  }
};
</script>
