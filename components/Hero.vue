<template>
  <div>
    <div class="columns is-vcentered">
      <div class= "column is-6">
        <figure
          class="image is-16by9">
          <nuxt-link :to="localePath({ name: story.class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug } })" >
            <img
              v-if="story.claims"
              alt="factcheck-image"
              src="https://images.degacms.com/dega-content/factly/2019/12/1575707993291-rape-cases-in-india---thumbnail.jpg?resize:fill:800:450:0/gravity:sm">
            <img
              v-else
              :src="story.media.sourceURL+'?resize:fill:800:450:0/gravity:sm'"
              :alt="story.media.altText">
          </nuxt-link>
        </figure>
      </div>
      <div class="column is-6">
        <div>
          <p class="is-size-4 has-text-weight-bold hero-title-font">
            <nuxt-link
              :to="localePath({ name: story.class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug } })"
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
            :published="story.publishedDate"
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
