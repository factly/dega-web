<template>
  <div class="box padding-none box-shadow-none">
    <div class="columns is-mobile">
      <div class="column is-8">
        <div>
          <div>
            <p class="is-size-4 has-text-weight-bold story-preview-title">
              <nuxt-link :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug } })" class="has-text-black-bis">
              {{ story.title }}
              </nuxt-link>
            </p>
            <p class="is-size-6 has-text-grey has-text-justified story-preview-summary story-preview-excerpt">{{ story.excerpt }}</p>
          </div>
          <MetaData
            :authors="story.authors"
            :category="story.categories[0]"
            :published="story.published_date"
          />
        </div>
      </div>
      <div class="column is-4">
        <nuxt-link :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug } })">
          <figure class="images is-16by9">
            <img
              :src="story.featured_media"
              alt="Placeholder image" >
          </figure>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
  .story-preview-summary{
    overflow: hidden !important;
    max-height: 20px !important;
    text-overflow: ellipsis !important;
  }
</style>

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
