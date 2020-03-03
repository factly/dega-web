<template>
  <div class="box">
    <div class="columns is-mobile">
      <div class="column is-9">
        <div>
          <div>
            <p class="is-size-4 has-text-weight-bold story-preview-title">
              <nuxt-link
                :to="localePath({ name: story._class.split('.').pop().toLowerCase() + '-slug', params: { slug: story._id
                } })"
                class="has-text-black-bis">
                {{ story.title }}
              </nuxt-link>
            </p>
            <p class="is-size-6 has-text-grey has-text-justified story-preview-summary story-preview-excerpt">{{ story.excerpt }}</p>
          </div>
          <div class="margin-top-half">
            <MetaData
              :users="story.degaUsers"
              :categories="story.categories"
              :published="story.published_date"
            />
          </div>
        </div>
      </div>
      <div class="column is-3">
        <nuxt-link
          :to="localePath({ name: story._class.split('.').pop().toLowerCase() + '-sug', params: { slug: story._id
        } })">
          <figure
            v-if="story.media"
            class="images is-16by9">
            <img
              :src="story.media.url+'?resize:fill:200:112:0/gravity:sm'"
              :alt="story.media.alt_text">
          </figure>
        </nuxt-link>
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
      required: true
    }
  }
};
</script>
