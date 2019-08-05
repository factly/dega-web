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
          v-for="(p,index) in stories"
          :key="'category'+index"
          class="content">
          <div class="media">
            <div class="media-left">
              <figure class="image figure-width-5">
                <nuxt-link :to="localePath({ name: p._class.split('.').pop().toLowerCase()+'-slug', params: { slug: p.slug } })">
                  <img
                    :src="p.featured_media"
                    alt="Related Image">
                </nuxt-link>
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-6">
                <nuxt-link
                  :to="localePath({ name: p._class.split('.').pop().toLowerCase()+'-slug', params: { slug: p.slug } })"
                  class="has-text-black-bis">
                  {{ p.title }}
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
import axios from 'axios';

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
      const posts = await axios
        .get(encodeURI(`${process.env.API_URI}/api/v1/posts/?client=${process.env.CLIENT_ID}&${collection}=${slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
        .then(response => response.data.data)
        .catch(err => console.log(err));
      const factchecks = await axios
        .get(encodeURI(`${process.env.API_URI}/api/v1/factchecks/?client=${process.env.CLIENT_ID}&${collection === 'author' ? 'user' : collection}=${slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
        .then(response => response.data.data)
        .catch(err => console.log(err));

      const stories = (posts || []).concat(factchecks || []);
      stories.sort((a, b) => {
        if (a.published_date > b.published_date) return -1;
        if (b.published_date > a.published_date) return 1;
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
