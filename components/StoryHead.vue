<template>
  <div>
    <div style="margin: 1rem;">
      <div>
        <div>
          <p class="title is-4 headline-title">{{ story.title }}</p>
        </div>
      </div>
      <div class="has-text-black-bis headline-meta">
        <span
          v-for="(author, index) in story.authors"
          :key="index" >
          <nuxt-link :to="'/author/' + author.slug">
            {{ author.display_name }}
          </nuxt-link>
          <span v-show="index != story.authors.length -1"> , </span>
        </span> in <nuxt-link :to="'/category/' + story.categories[0].slug">{{ story.categories[0].name }}</nuxt-link>
      </div>
      <div class="has-text-grey headline-time">{{ story.published_date | date }}</div>
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
