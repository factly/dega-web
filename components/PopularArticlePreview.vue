<!-- Popular articles -->
<template>
  <div
    class="media"
    style="margin-bottom: 1rem;">
    <figure class="media-left">
      <div class="image is-48x48">
        <p
          class="title has-text-grey-light is-3 has-text-centered"
        >{{ rank }}</p>
      </div>
    </figure>
    <div class="media-content">
      <div class="content">
        <div style="margin-bottom: 1rem;">
          <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug">
            <h2 class="has-text-black-bis popular-headline">{{ story.title }}</h2>
          </nuxt-link>
        </div>
        <div>
          <div class="has-text-black-bis popular-author">
            <span
              v-for="(author, index) in story.authors"
              :key="index" >
              <nuxt-link :to="'/author/' + author.slug">
                {{ author.display_name }}
              </nuxt-link>
              <span v-show="index != story.authors.length -1"> , </span>
            </span>
          </div>
          <div class="has-text-grey popular-time">{{ story.published_date | date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .popular-headline {
    font-family: 'Mallanna', "sans-serif" !important;
    font-size: 21px !important;
    line-height: 24px !important;
    margin-bottom: 0.5rem;
    font-weight: 300;
  }
  .popular-author{
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "Geneva", "Arial", sans-serif;
    font-size: 12px !important;
    line-height: 20px !important;
  }
  .popular-time{
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "Geneva", "Arial", sans-serif;
    font-size: 12px !important;
  }
</style>
<script>
export default {
  props: {
    rank: {
      type: String,
      required: true
    },
    story: {
      type: Object,
      required: true
    }
  }
};
</script>
