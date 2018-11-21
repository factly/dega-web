<template>
  <div class="columns" style="margin-bottom: 25px;"> <!--<div class="container columns">-->
    <!-- post-image  column-->
    <div class= "column is-4">
      <div class="card">
       <div class="card-image">
         <figure class ="image is-5by3">
           <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
         </figure>
       </div>
      </div>
    </div>
   <!-- post-title-column -->
   <div class="column is-4">
      <div class="content">
        <p class="title is-4">{{ post.title }}</p>
        <br>
        <p class="subtitle is-6">BY RAKESH DUBBUDU </p>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
  }
}
</script>
