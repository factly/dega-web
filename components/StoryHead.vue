<template>
  <div>
    <div>
      <div>
        <div>
          <p class="title is-4 headline-title">{{ story.title }}</p>
        </div>
      </div>
      <div>
        <div v-if="story.authors.length == 1">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  :src="story.authors[0].profile_picture"
                  class="is-rounded">
              </figure>
            </div>
            <div class="media-content">
              <p class="is-size-5 has-text-link">{{ story.authors[0].display_name }}</p>
              <p class="is-size-6">{{ story.published_date | date }}</p>
            </div>
          </article>
        </div>
        <div v-else>
          <div class="field is-grouped is-grouped-multiline">
            <div
              v-for="(p, index) in story.authors"
              :key="'author'+index"
              class="contorl">
              <figure class="image is-64x64">
                <img
                  :src="p.profile_picture"
                  class="is-rounded">
              </figure>
            </div>
          </div>
          <div class="field is-grouped is-grouped-multiline">
            <div
              v-for="(p, index) in story.authors"
              :key="'author'+index"
              class="contorl">
              <p class="is-size-5 has-text-link">{{ p.display_name }}</p>
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
  .headline-title {
    font-family: 'Ramabhadra', sans-serif;
    font-size: 2rem;
    line-height: 2.2rem;
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
