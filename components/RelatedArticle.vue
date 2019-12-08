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
                class="image figure-width-5">
                <nuxt-link :to="localePath({ name: story.class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug } })">
                  <img
                    v-if="story.claims"
                    alt="factcheck-image"
                    src="https://images.degacms.com/dega-content/factly/2019/12/1575707993291-rape-cases-in-india---thumbnail.jpg?resize:fill:80:45:0/gravity:sm">
                  <img
                    v-else
                    :src="story.media.sourceURL+'?resize:fill:80:45:0/gravity:sm'"
                    :alt="story.media.altText" >
                </nuxt-link>
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-6">
                <nuxt-link
                  :to="localePath({ name: story.class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug } })"
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
      const posts = await this.$axios.$get(`/api/v1/posts/?${collection}=${slug}&sortBy=publishedDate&sortAsc=false&limit=5`);

      const factchecks = await this.$axios.$get(`/api/v1/factchecks/?${collection}=${slug}&sortBy=publishedDate&sortAsc=false&limit=5`);

      const stories = (posts.data || []).concat(factchecks.data || []);
      stories.sort((a, b) => {
        if (a.publishedDate > b.publishedDate) return -1;
        if (b.publishedDate > a.publishedDate) return 1;
        return 0;
      });
      this.stories = this.id ? stories.filter(value =>
        // eslint-disable-next-line no-underscore-dangle
        value.id !== this.id
      ) : stories;
    }
  }
};
</script>
