<template>
  <div class="columns" style="margin-bottom: 25px;"> <!--<div class="container columns">-->
    <!-- story-image  column-->
    <div class= "column is-4">
      <div class="card">
       <div class="card-image">
         <figure class ="image is-5by3">
           <img src="https://www.solidbackgrounds.com/images/2880x1800/2880x1800-spanish-sky-blue-solid-color-background.jpg" alt="Placeholder image">
         </figure>
       </div>
      </div>
    </div>
   <!-- story-title-column -->
   <div class="column is-4">
      <div class="content">
        <p class="title is-4">{{ story.title }}</p>
        <div v-if="story.authors">
              <span v-if="story.authors" class="subtitle is-6 is-uppercase">BY {{story.authors[0].display_name}}</span>
              <span v-for="(author, index) in story.authors.splice(1)"
                :key="index"  class="subtitle is-6 is-uppercase">, {{author.display_name}}
                <!-- <span class="subtitle is-6 is-uppercase">, {{author.display_name}}</span> -->
              </span>
        </div>
              <br>
        <!-- <div v-if="story.authors">
          <p class="subtitle is-6 is-uppercase">BY {{ story.authors[0].display_name }}</p>
          <div v-for="(author, index) in story.authors.splice(1)"
                  :key="index" class="has-text-centered">
                <span class="subtitle is-6 is-uppercase"> ,{{author.display_name}}</span>
          </div>
        </div> -->
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
    }
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
