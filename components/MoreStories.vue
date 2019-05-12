<template>
  <div class="columns" style="margin-bottom: 1rem; margin: 0.5rem"> <!--<div class="container columns">-->
    <!-- story-image  column-->
    <div class= "column is-4">
      <div class="card">
        <div class="card-image">
          <figure class ="image is-5by3">
            <img :src="story.featured_media" :alt="story._class.split('.').pop()"/>
            <div v-if="categories" class="story-art">
              <div v-if="story._class.split('.').pop() == 'Factcheck'" class="fact-strip">
                <h1>FACTCHECK</h1>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
    <!-- story-title-column -->
    <div class="column is-4">
      <div class="content">
        <p class="title is-4 is-size-5-mobile">{{ story.title }}</p><br>
        <div v-show="story.authors" class="subtitle is-6 is-uppercase is-size-6-mobile">
          BY
          <span v-for="(author, index) in story.authors" :key="index" >
            <no-ssr>
            <nuxt-link :to="'/author/' + author.slug">
              {{ author.display_name }}
            </nuxt-link>
            </no-ssr>
            <span v-show="index != story.authors.length -1"> , </span>
          </span>
        </div>
        <div class="is-size-6-mobile">{{ getDate(story.last_updated_date) }}</div><br>
      </div>
    </div>
    <!-- story-blockquote-column -->
    <div class="column is-4">
      <div class="content is-hidden-mobile has-text-justified">
        <p>{{ story.excerpt }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.story-art {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.story-art .fact-strip {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
</style>

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
  },
  methods: {
    getDate(datetime) {
      const date = new Date(datetime);
      const ms = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`;
    }
  }
};
</script>
