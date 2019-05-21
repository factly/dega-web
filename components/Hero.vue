<template>
  <div class="columns is-vcentered is-centered">
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
    <div class= "column is-5" >
      <div class="content subtitle has-text-centered">
        <p class="title is-size-5 is-size-4-tablet is-size-5-mobile is-size-3-desktop has-text-centered-desktop">{{ story.title }}</p>
      </div>
      <div
        v-if="story.authors"
        class="subtitle is-6 is-uppercase has-text-centered is-size-6-mobile">
        BY
        <span
          v-for="(author, index) in story.authors"
          :key="index" >
          <no-ssr>
            <nuxt-link :to="'/author/' + author.slug">
              {{ author.display_name }}
            </nuxt-link>
          </no-ssr>
          <span v-if="index != story.authors.length -1">, </span>
        </span>
      </div>
      <div class="has-text-centered is-size-6-mobile">{{ story.published_date | date }}</div><br>
      <div class="has-text-justified is-hidden-mobile ">
        {{ story.excerpt }}
      </div>
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
