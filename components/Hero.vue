<template>
  <div>
    <div class="columns is-vcentered">
      <div class= "column is-6">
        <figure
          v-if="story.media"
          class="image is-16by9">
          <nuxt-link :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story._id } })" >
            <img
              :src="story.media.url+'?resize:fill:800:450:0/gravity:sm'"
              :alt="story.media.alt_text">
          </nuxt-link>
        </figure>
      </div>
      <div class="column is-6">
        <div>
          <p class="is-size-4 has-text-weight-bold hero-title-font">
            <nuxt-link
              :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story._id } })"
              class="has-text-black-bis">
              {{ story.title }}
            </nuxt-link>
          </p>
          <div>
            <p class="is-size-6 has-text-grey has-text-justified hero-excerpt-font">{{ story.excerpt }}</p>
          </div>
        </div>
        <div class="margin-top-half">
          <MetaData
            :users="story.users"
            :categories="story.categories"
            :published="story.published_date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetaData from '@/components/MetaData';

export default {
  components: {
    MetaData
  },
  props: {
    story: {
      type: Object,
      required: true,
      default: null
    }
  }
};
</script>
