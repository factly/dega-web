<template>
  <div class="story-preview-box">
    <div style="margin-bottom: 1rem;">
      <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug">
        <figure class="images is-16by9">
          <img
            :src="story.featured_media"
            alt="Placeholder image" >
        </figure>
      </nuxt-link>
    </div>
    <div>
      <div style="margin-bottom: 1rem;">
        <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug">
          <h2 class="has-text-black-bis story-preview-headline">{{ story.title }}</h2>
          <p class="subtitle story-preview-summary has-text-grey has-text-justified">{{ story.excerpt }}</p>
        </nuxt-link>
      </div>
      <div class="has-text-black-bis story-author-category">
        <span
          v-for="(author, index) in story.authors"
          :key="index" >
          <nuxt-link :to="'/author/' + author.slug">
            {{ author.display_name }}
          </nuxt-link>
          <span v-show="index != story.authors.length -1"> , </span>
        </span> in <nuxt-link :to="'/category/' + story.categories[0].slug">{{ story.categories[0].name }}</nuxt-link>
      </div>
      <div class="has-text-grey story-time">{{ story.published_date | date }}</div>
    </div>
  </div>
</template>

<style>
  .story-preview-box {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 5px;
  }
  .story-preview-headline {
    font-family: "Ramabhadra", sans-serif;
    font-size: 21px !important;
    line-height: 24px !important;
    overflow: hidden !important;
    max-height: 48px !important;
    text-overflow: ellipsis !important;
    margin-bottom: 0.5rem;
  }
  .story-preview-summary{
    font-family: 'Mallanna', sans-serif;
    font-size: 16px !important;
    line-height: 20px !important;
    overflow: hidden !important;
    max-height: 20px !important;
    text-overflow: ellipsis !important;
  }
  .story-author-category{
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "Geneva", "Arial", sans-serif;
    font-size: 12px !important;
    line-height: 20px !important;
  }
  .story-time{
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "Geneva", "Arial", sans-serif;
    font-size: 12px !important;
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
