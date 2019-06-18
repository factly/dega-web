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
            <p class="is-size-6">
              <nuxt-link :to="'/author/' + story.authors[0].slug" class="has-text-link">
                {{ story.authors[0].display_name }}
              </nuxt-link>  
            </p>
            <p class="is-size-6">{{ story.published_date | date }}</p>
          </div>
        </article>
      </div>
      <div v-else>
        <div class="field">
          <div
            v-for="(p, index) in story.authors"
            :key="'author'+index"
            class="contorl"
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
        <div class="field">
          <div
            v-for="(p, index) in story.authors"
            :key="'author'+index"
            class="contorl"
          >
            <div>
              <p class="is-size-6">
                <nuxt-link :to="'/author/' + p.slug" class="has-text-link">
                  {{ p.display_name }}
                </nuxt-link>
                <span v-if="index !== story.authors.length - 1">,&nbsp;</span>
              </p>
            </div>
          </div>
        </div>
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
export default {
  props: {
    story: {
      type: Object,
      required: true,
      default: null
    }
  }
};
</script>
