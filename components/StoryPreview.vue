<template>
  <nuxt-link :to="'/' + story._class.split('.').pop().toLowerCase()+ '/' + story.slug">
    <div class="card">
      <div class="card-image">
        <figure class="images is-5by3">
          <img
            :src="story.featured_media"
            alt="Placeholder image">
        </figure>
      </div>
      <div
        class="card-content"
        style="padding-top: 0.5rem">
        <div class="content">
          <div
            class="level"
            style="margin-bottom:0.75rem">
            <div class="level-left">
              <p class="subtitle is-7 level-item">{{ story.published_date | date }}</p>
            </div>
            <div
              v-show="story.authors"
              class="level-right subtitle is-7">
              <span
                v-for="(author, index) in story.authors"
                :key="index"
                class="level-item" >
                <nuxt-link :to="'/author/' + author.slug">
                  {{ author.display_name }}
                </nuxt-link>
                <span v-show="index != story.authors.length -1"> , </span>
              </span>
            </div>
          </div>
          <p class="title is-3 story-preview-headline">{{ story.title }}</p>
          <p class="subtitle is-5 story-preview-summary has-text-justified">{{ story.excerpt }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style>
  .story-preview-headline {
    font-family: 'Ramabhadra', sans-serif;
    height:6.45rem;
    line-height:2.15rem;
    overflow:hidden;
  }
  .story-preview-summary{
    font-family: 'Mallanna', sans-serif;
    height: 6rem;
    line-height: 1.5rem;
    overflow:hidden;
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
