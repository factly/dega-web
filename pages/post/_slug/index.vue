<template>
  <div class="post-page">
    <section class="hero-title has-text-centered">
      <!-- <div class="hero-body"> -->
      <div class="container post-article">
        <h1 class="title is-size-5 is-size-4-tablet is-size-3-desktop is-spaced is-2 has-text-weight-semibold">{{ post[0].sub_title }}</h1>
        <span class="is-uppercase">
          BY
          <nuxt-link 
            :to="'/author/'+ post[0].authors[0].slug" 
            class="has-tint has-text-weight-semibold">{{ post[0].authors[0].display_name }}</nuxt-link>
          <div class="has-text-centered">{{ getDate(post[0].last_updated_date) }}</div>
        </span>
      </div>
      <!-- </div> -->
    </section>
    <!-- featured image-section -->
    <section class="section is-paddingless">
      <div class="container">
        <figure class="image is-2by1">
          <img
            :src="post[0].featured_media"
            alt="Post"
            style="border-radius: 5px 5px 5px 5px;">
        </figure>
      </div>
    </section>
    <!-- post content -->
    <section class="section">
      <div class="container">
        <article
          class="post has-text-justified"
          v-html="post[0].content">
          {{ post[0].content }}
        </article>
      </div>
    </section>
  </div>
</template>


<style>
.post-page {
  margin: 1%;
}
</style>

<script>
import axios from 'axios'

export default {
  methods: {
    getDate(datetime) {
      const date = new Date(datetime)
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
        'Dec'
      ]
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`
    }
  },
  validate({ params }) {
    return params.slug
  },
  data() {
    return {
      post: null
    }
  },
  async asyncData(params) {
    const posts = await axios
      .get(
        `${process.env.apiUri}/api/v1/posts/?client_id=${
          process.env.clientId
        }&slug=${params.params.slug}`
      )
      .then(response => response.data)
      .catch(error => console.log(error))
    return{
      post: posts
    }
  }
}
</script>
