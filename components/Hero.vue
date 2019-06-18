<template>
  <div>
    <div class="columns">
      <div class= "column is-6">
        <figure class ="image is-16by9">
          <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' + story.slug">
            <img
              :src="story.featured_media"
              :alt="story._class.split('.').pop()">
          </nuxt-link>
        </figure>
      </div>
      <div class="column is-6">
        <div>
          <p class="is-size-4 has-text-weight-bold mallanna-font">
            <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' + story.slug" class="has-text-black-bis">
            {{ story.title }}
            </nuxt-link>
          </p>
          <div>
            <p class="is-size-6 has-text-grey has-text-justified mallanna-font">{{ story.excerpt }}</p>
          </div>
        </div>
        <div class="margin-top-half">
          <div class="field is-grouped is-grouped-multiline">
            <div
              v-for="(p, index) in story.authors"
              :key="'author'+index"
              class="control"
            >
              <p class="is-size-7">
                <nuxt-link :to="'/author/' + p.slug" class="has-text-link">
                {{ p.display_name }}
                </nuxt-link>
                <span v-if="index !== story.authors.length - 1">,&nbsp;</span>
              </p>
            </div>
            <div class="control">
              <p class="is-size-7">&nbsp;in&nbsp;<nuxt-link :to="'/category/' + story.categories[0].slug" class="has-text-link">{{ story.categories[0].name }}</nuxt-link></p>
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
