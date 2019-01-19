<template>
  <div class="columns" style="margin-bottom: 25px;"> <!--<div class="container columns">-->
    <!-- post-image  column-->
    <div class= "column is-4">
      <div class="card">
       <div class="card-image">
         <figure class ="image is-5by3">
           <img src="https://www.solidbackgrounds.com/images/2880x1800/2880x1800-spanish-sky-blue-solid-color-background.jpg" alt="Placeholder image">
         </figure>
       </div>
      </div>
    </div>
   <!-- post-title-column -->
   <div class="column is-4">
      <div class="content">
        <p class="title is-4">{{ post.title }}</p>
        <br>
        <p class="subtitle is-6 is-uppercase">BY {{ post.authors[0].display_name }}</p>
        <div v-for="(author, index) in post.authors.splice(1)"
                :key="index" class="has-text-centered">
              <span class="subtitle is-6 is-uppercase"> ,{{author.display_name}}</span>
        </div>
        <time datetime="2016-1-1">{{getDate(post.last_updated_date)}}</time>
      </div>
   </div>
   <!-- post-blockquote-column -->
   <div class="column is-4">
     <div class="content is-hidden-mobile">
        <p>{{post.excerpt}}
        </p>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
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
