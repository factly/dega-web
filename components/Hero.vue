<template>
  <div>
    <div class="columns is-vcentered">
      <div class= "column is-6">
        <figure class ="image is-16by9">
          <nuxt-link :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug } })" >
            <img
              :src="story.featured_media"
              :alt="story._class.split('.').pop()">
          </nuxt-link>
        </figure>
      </div>
      <div class="column is-6">
        <div>
          <p class="is-size-4 has-text-weight-bold hero-title-font">
            <nuxt-link :to="localePath({ name: story._class.split('.').pop().toLowerCase()+'-slug', params: { slug: story.slug } })" class="has-text-black-bis">
            {{ story.title }}
            </nuxt-link>
          </p>
          <div>
            <p class="is-size-6 has-text-grey has-text-justified hero-excerpt-font">{{ story.excerpt }}</p>
          </div>
        </div>
        <div class="margin-top-half">
          <MetaData
            :authors="story.authors"
            :category="story.categories[0]"
            :published="story.published_date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bookmark from '@/components/Bookmark';
import MetaData from '@/components/MetaData';

export default {
  components: {
    Bookmark,
    MetaData
  },
  props: {
    story: {
      type: Object,
      required: true,
      default: null
    }
  },
};
</script>
