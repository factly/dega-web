<template>
  <div>
    <div>
      <p class="is-size-4 has-text-black-bis has-text-weight-bold mallanna-font">{{ story.title }}</p>
    </div>
    <div class="margin-top-half">
      <div v-if="story.authors.length == 1">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <nuxt-link :to="'/author/' + story.authors[0].slug">
                <img
                  :src="story.authors[0].profile_picture"
                  class="is-rounded">
              </nuxt-link>
            </figure>
          </div>
          <div class="media-content">
            <MetaData
              :authors="story.authors"
              :category="story.categories[0]"
              :published="story.published_date"
              size="is-size-6"
            />
          </div>
        </article>
      </div>
      <div v-else>
        <div class="field is-grouped">
          <div
            v-for="(p, index) in story.authors"
            :key="'author'+index"
            class="control"
            style="margin-right:0.5rem;">
            <figure class="image is-64x64">
              <nuxt-link :to="'/author/' + p.slug">
                <img
                  :src="p.profile_picture"
                  class="is-rounded">
              </nuxt-link>
            </figure>
          </div>
        </div>
        <MetaData
          :authors="story.authors"
          :category="story.categories ? story.categories[0] : underfined"
          :published="story.published_date"
          size="is-size-6"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .headline-meta {
    margin-top: 1.5rem;
  }
  .headline-preview {
    font-family: 'Mallanna', sans-serif;
    font-size: 1.2rem;
    line-height: 1.3rem;
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
