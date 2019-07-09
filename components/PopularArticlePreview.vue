<!-- Popular articles -->
<template>
  <div class="box padding-half">
    <div class="media">
      <figure class="media-left">
        <div class="image is-48x48">
          <p class="title has-text-grey-light is-3 has-text-centered">{{ rank }}</p>
        </div>
      </figure>
      <div class="media-content">
        <p class="is-size-5 has-text-weight-bold mallanna-font">
          <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug" class="has-text-black-bis">
          {{ story.title }}
          </nuxt-link>
        </p>
        <MetaData
          :authors="story.authors"
          :category="story.categories[0]"
          :published="story.published_date"
        />
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
    rank: {
      type: String,
      required: true
    },
    story: {
      type: Object,
      required: true
    }
  }
};
</script>
