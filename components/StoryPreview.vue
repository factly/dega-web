<template>
  <div class="box padding-none box-shadow-none">
    <div class="columns is-mobile">
      <div class="column is-8">
        <div>
          <div>
            <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug">
              <p class="is-size-4 has-text-black-bis has-text-weight-bold mallanna-font">{{ story.title }}</p>
            </nuxt-link>
            <p class="is-size-6 has-text-grey has-text-justified mallanna-font story-preview-summary">{{ story.excerpt }}</p>
          </div>
          <div class="margin-top-half">
            <div class="field">
              <div
                v-for="(p, index) in story.authors"
                :key="'author'+index"
                class="contorl"
              >
                <nuxt-link :to="'/author/' + p.slug">
                  <p class="is-size-7 has-text-link">{{ p.display_name }}<span v-if="index !== story.authors.length - 1">,&nbsp;</span></p>
                </nuxt-link>
              </div>
            </div>
            <div class="is-size-7 has-text-grey">{{ story.published_date | date }}</div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug">
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
