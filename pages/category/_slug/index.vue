<template>
  <div>
    <br><br><br><br><br>
    <nuxt-link :to="'/post/'+ posts[0].slug">
      <div 
        class="columns" 
        style="margin-bottom: 25px;">
        <div class= "column is-6">
          <div class="card">
            <div class="card-image">
              <figure class ="image is-5by3">
                <img 
                  src="https://www.publicdomainpictures.net/pictures/200000/nahled/plain-blue-background.jpg" 
                  alt="Placeholder image">
              </figure>
            </div>
          </div>
        </div>
        <div class= "column is-6">
          <br><br><br><br>
          <div class="content subtitle is-hidden-mobile has-text-centered">
            <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop">{{ posts[0].sub_title }}</p>
          </div>
          <div 
            v-if="posts[0].authors.length >= 1" 
            class="has-text-centered">
            <span class="subtitle is-6 is-uppercase">BY {{ posts[0].authors[0].display_name }}</span>
          </div>
          <div
            v-for="(author, index) in posts[0].authors.splice(1)"
            :key="index" 
            class="has-text-centered">
            <span class="subtitle is-6 is-uppercase"> ,{{ author.display_name }}</span>
          </div>
          <div class="has-text-centered">{{ getDate(posts[0].last_updated_date) }}</div>
        </div>
      </div>
    </nuxt-link>
    <hr class="spacer is-1-5 is-hidden-mobile">

    <section class="section">
      <h3>MORE STORIES</h3>
      <br>
      <div
        v-for="(p, index) in posts.slice(1)"
        :key="index"
        class="container columns">
        <nuxt-link :to="'/post/'+ p.slug">
          <MoreStories :story="p"/>
        </nuxt-link>
      </div>

    </section>

  </div>
</template>

<script>
import axios from 'axios'
import MoreStories from '~/components/MoreStories'

export default {
  components: {
    MoreStories
  },
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
  async asyncData(params) {
    return axios
      .get(
        `http://127.0.0.1:8000/api/v1/posts/?category=${
          params.params.slug
        }&sortBy=lastUpdatedDate&sortAsc=false`
      )
      .then(response => response.data)
      .catch(error => console.log(error))
  }
}
</script>
