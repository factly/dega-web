<template>
  <div>
    <div>
      <div style="margin-bottom: 1rem;">
        <div>
          <p class="title is-4 headline-title">{{ story.title }}</p>
        </div>
      </div>
      <div>
        <div v-if="story.authors.length == 1">
          <article class="media">
            <div class="media-left">
              <nuxt-link :to="'/author/' + story.authors[0].slug">
                <figure class="image is-64x64">
                  <img
                    :src="story.authors[0].profile_picture"
                    class="is-rounded">
                </figure>
              </nuxt-link>
            </div>
            <div class="media-content">
              <nuxt-link :to="'/author/' + story.authors[0].slug">
                <p class="is-size-6 has-text-link">{{ story.authors[0].display_name }}</p>
              </nuxt-link>
              <p class="is-size-7">{{ story.published_date | date }}</p>
            </div>
          </article>
        </div>
        <div v-else>
          <div class="field is-grouped is-grouped-multiline">
            <div
              v-for="(p, index) in story.authors"
              :key="'author'+index"
              class="contorl"
              style="margin-right:0.5rem;">
              <nuxt-link :to="'/author/' + p.slug">
                <figure class="image is-64x64">
                  <img
                    :src="p.profile_picture"
                    class="is-rounded">
                </figure>
              </nuxt-link>
            </div>
          </div>
          <div class="field is-grouped is-grouped-multiline">
            <div
              v-for="(p, index) in story.authors"
              :key="'author'+index"
            >
              <div class="contorl">
                <nuxt-link :to="'/author/' + p.slug">
                  <p class="is-size-6 has-text-link">{{ p.display_name }}<span v-if="index !== story.authors.length - 1">,&nbsp;</span></p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bookmark :story=story />
    </div>
  </div>
</template>

<style scoped>
  .headline-meta {
    margin-top: 1.5rem;
  }
  .headline-title {
    font-family: 'Ramabhadra', sans-serif;
    font-size: 2rem;
    line-height: 2.2rem;
  }
  .headline-preview {
    font-family: 'Mallanna', sans-serif;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
</style>

<script>
import Bookmark from '~/components/Bookmark.vue';
export default {
  components:{
    Bookmark
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
