<template>
  <div class="columns" style="margin-bottom: 1rem; margin: 0.5rem"> <!--<div class="container columns">-->
    <!-- story-image  column-->
    <div class= "column is-4">
      <div class="card">
        <div class="card-image">
          <figure class ="image is-5by3">
            <img :src="story.featured_media" :alt="story._class.split('.').pop()">
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
        <p class="title is-4 is-size-6-mobile">{{ story.sub_title }}</p><br>
        <div v-if="story.authors" class="subtitle is-6 is-uppercase is-size-6-mobile">
          BY
          <span  v-for="(author, index) in story.authors" :key="index" >{{author.display_name}} 
            <span v-if="index != story.authors.length -1"> , </span>
          </span>
        </div>
        <time datetime="2016-1-1">{{getDate(story.last_updated_date)}}</time>
      </div>
    </div>
    <!-- story-blockquote-column -->
    <div class="column is-4">
      <div class="content is-hidden-mobile has-text-justified">
        <p>{{story.excerpt}}
        </p>
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
    },
  },
  methods: {
    getDate(datetime) {
      let date = new Date(datetime);
      var ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return date.getDate() + ' ' + ms[date.getMonth()] + ' ' + date.getFullYear();
    }
  },
}
</script>
