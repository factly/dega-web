<template>
  <div>
    <div
      v-if="stories.length > 0"
      class="card">
      <header class="card-header">
        <p class="card-header-title">
          <nuxt-link
            :to="localePath({ name:'collection-slug', params: { collection, slug } })"
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
                <nuxt-link :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story._id } })">
                  <img
                    :src="story.media.url+'?resize:fill:80:45:0/gravity:sm'"
                    :alt="story.media.altText" >
                </nuxt-link>
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-6">
                <nuxt-link
                  :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story._id } })"
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
import factCheckQuery from '../graphql/query/factchecks.gql';
import postQuery from '../graphql/query/posts.gql';

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

      if (collection && slug) variables[collection] = [slug];

      const factchecks = await this.$apollo.query({
        query: factCheckQuery,
        variables
      });

      const posts = await this.$apollo.query({
        query: postQuery,
        variables
      });

      const stories = (posts.data.posts.nodes || []).concat(factchecks.data.factchecks.nodes || []);
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
