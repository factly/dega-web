<template>
  <div>
    <!-- featured post section-->
    <section class="section is-hero">
      <div class="container">
        <figure class ="image is-5by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
        <nuxt-link :to="'/post/'+ posts[0].slug">
          <div class="content column">
            <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop"> {{posts[0].title}}</p>
            <div class="has-text-centered">
              <span class="subtitle is-6 is-uppercase">BY {{posts[0].authors[0].display_name}}, </span>
              <time datetime="2016-1-1">{{posts[0].last_updated_date}}</time>
            </div>
            <div class="content subtitle is-hidden-mobile has-text-centered">
              <p>{{posts[0].sub_title}}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </section>
    <hr class="spacer is-1-5 is-hidden-mobile">

    <!-- MORE STORIES Section -->
    <section class="section">
      <h3>MORE STORIES</h3>
      <br>
      <div
        v-for="(p, index) in posts"
        :key="index"
        class="container columns">
        <nuxt-link :to="'/post/'+ p.slug">
          <MoreStories :post="p"/>
        </nuxt-link>
      </div>

    </section>

  </div>
</template>

<script>
  import axios from 'axios'
  import MoreStories from "~/components/MoreStories";

  export default {
    components: {
      MoreStories,
      PostCard
    },
    methods: {},
    validate({ params }){
      return params.slug
    },
    async asyncData(params) {
      return axios
        .get(`http://127.0.0.1:8000/api/v1/posts/?category=${params.params.slug}`)
        .then(response => {
          const data = {
            posts: response.data
          }
          return data
        })
        .catch(error => console.log(error))
    }
  }
</script>
