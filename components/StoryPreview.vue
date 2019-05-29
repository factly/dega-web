<template>
  <div class="story-preview-box">
    <div class="columns is-mobile">
      <div class="column is-8 story-preview-content">
        <div>
          <div>
            <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug">
              <h2 class="has-text-black-bis story-preview-headline">{{ story.title }}</h2>
            </nuxt-link>
            <p class="subtitle has-text-grey has-text-justified story-preview-summary">{{ story.excerpt }}</p>
          </div>
          <div class="has-text-black-bis story-author-category">
            <span
              v-for="(author, index) in story.authors"
              :key="index">
              <nuxt-link :to="'/author/' + author.slug">
                {{ author.display_name }}
              </nuxt-link>
              <span v-show="index != story.authors.length -1"> , </span>
            </span> in <nuxt-link :to="'/category/' + story.categories[0].slug">{{ story.categories[0].name }}</nuxt-link>
          </div>
          <div class="has-text-grey story-time">{{ story.published_date | date }}</div>
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
  .story-preview-box {
    margin-bottom: 1rem;
  }
  .story-preview-content {
    padding-right: 1rem;
  }
  .story-preview-headline {
    font-family: 'Mallanna', sans-serif;
    font-size: 24px !important;
    line-height: 28px !important;
    max-height: 56px !important;
    font-weight: 600 !important;
    overflow: hidden !important;
    text-decoration-style: solid !important;
  }
  .story-preview-summary{
    margin-top: 0.25rem;
    font-family: 'Mallanna', sans-serif;
    font-size: 16px !important;
    line-height: 20px !important;
    overflow: hidden !important;
    max-height: 20px !important;
    text-overflow: ellipsis !important;
  }
  .story-author-category{
    margin-top: 0.60rem;
    font-size: 13px !important;
  }
  .story-time{
    font-size: 13px !important;
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
