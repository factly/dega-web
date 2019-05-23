<template>
  <div class="columns">
    <div class= "column is-6">
      <div class="card">
        <div class="card-image">
          <figure class ="image is-5by3">
            <img
              :src="story.featured_media"
              :alt="story._class.split('.').pop()"
              style="border-radius: 0px 0px 0px 0px;">
          </figure>
        </div>
      </div>
    </div>
    <div class= "column is-6" >
      <div class="content has-text-justified">
        <p class="title is-size-5 is-size-4-tablet is-size-5-mobile is-size-3-desktop">{{ story.title }}</p>
      </div>
      <div class="content has-text-justified">
        <p class="subtitle is-6 is-hidden-mobile ">{{ story.excerpt }}</p>
      </div>
      <div
        v-if="story.authors"
        class="is-6 is-size-6-mobile">
        <span
          v-for="(author, index) in story.authors"
          :key="index" >
          <nuxt-link :to="'/author/' + author.slug">
            {{ author.display_name }}
          </nuxt-link>
          <span v-if="index != story.authors.length -1">, </span>
        </span>
      </div>
      <div class="content is-size-6-mobile">{{ story.published_date | date }}</div><br>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
      default: null
    },
    categories: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>
