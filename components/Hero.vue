<template>
  <div>
    <div class="columns">
      <div class= "column is-6">
        <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' + story.slug">
          <figure class ="image is-16by9">
            <img
              :src="story.featured_media"
              :alt="story._class.split('.').pop()">
          </figure>
        </nuxt-link>
      </div>
      <div class="column is-6">
        <div>
          <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' + story.slug">
            <p class="is-size-4 has-text-black-bis has-text-weight-bold mallanna-font">{{ story.title }}</p>
          </nuxt-link>
          <div>
            <p class="is-size-6 has-text-grey has-text-justified mallanna-font">{{ story.excerpt }}</p>
          </div>
        </div>
        <div class="margin-top-half">
          <div class="field is-grouped is-grouped-multiline">
            <div
              v-for="(p, index) in story.authors"
              :key="'author'+index"
            >
              <div class="contorl">
                <nuxt-link :to="'/author/' + p.slug">
                  <p class="is-size-7 has-text-link">{{ p.display_name }}<span v-if="index !== story.authors.length - 1">,&nbsp;</span></p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="is-size-7 has-text-grey">{{ story.published_date | date }}</div>
          <Bookmark :story=story />
        </div>
      </div>
    </div>
  </div>
</template>

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
  },
};
</script>
