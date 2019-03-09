<template>
  <div class="columns home-page">
    <div class="column is-three-fourth">
      <div class="main-content">
        <div 
          v-if="story" 
          class="container">
          <nuxt-link :to="'/'+ story[0]._class.split('.').pop().toLowerCase()+ '/' + story[0].slug">
            <div class="columns">
              <div class= "column is- 6 is-full-mobile">
                <div class="card">
                  <div class="card-image">
                    <figure class ="image is-5by3">
                      <img 
                        :src="story[0].featured_media" 
                        :alt="story[0]._class.split('.').pop()">
                      <div class="story-art">
                        <div 
                          v-if="story[0]._class.split('.').pop() == 'Factcheck'" 
                          class="fact-strip">
                          <h1>FACTCHECK</h1>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div class= "column is-6 is-full-mobile" >
                <div class="content subtitle has-text-centered">
                  <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop">{{ story[0].sub_title }}</p>
                </div>
                <div 
                  v-if="story[0].authors" 
                  class="subtitle is-6 is-uppercase has-text-centered">
                  BY
                  <span 
                    v-for="(author, index) in story[0].authors" 
                    :key="index" >{{ author.display_name }} 
                    <span v-if="index != story[0].authors.length -1">, </span>
                  </span>
                </div>
                <div class="has-text-centered">{{ getDate(story[0].last_updated_date) }}</div><br>
                <div class="has-text-justified">
                  {{ story[0].excerpt }}
                </div>
              </div>
            </div>
          </nuxt-link>
          <hr class="spacer is-1-5">
          <div class="columns">
            <!-- MoreStories Section -->
            <div class="column is-12">
              <section>
                <h3>MORE STORIES</h3>
                <br>
                <div
                  v-for="(p, index) in story.slice(1)"
                  :key="index"
                  class="container columns">
                  <nuxt-link :to="'/'+ p._class.split('.').pop().toLowerCase()+ '/' +p.slug">
                    <MoreStories 
                      :story="p" 
                      :categories= "true"/>
                  </nuxt-link>
                  <hr class="spacer is-1-5 is-hidden-desktop">
                </div>
              </section>
            </div>
          </div>
        </div>
        <div 
          v-else 
          class="subtitle is-6 is-uppercase has-text-centered">
          Dega API is not responding.<br> Please contact the administrator.
        </div>
      </div>
    </div>
    <!-- <PopularArticles></PopularArticles> -->
  </div>
</template>
<style>
.home-page {
  margin: 1%;
}

.story-art {
  position: relative;
  max-width: 800px; /* Maximum width */
  margin: 0 auto; /* Center it */
}

.story-art .fact-strip {
  position: absolute; /* Position the background text */
  bottom: 0; /* At the bottom. Use top:0 to append it to the top */
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1; /* Grey text */
  width: 100%; /* Full width */
  padding: 20px; /* Some padding */
}
</style>

<script>
import axios from 'axios'
import MoreStories from '~/components/MoreStories'
import PopularArticles from '~/components/PopularArticles'

export default {
  components: {
    MoreStories,
    PopularArticles
  },
  data() {
    return {
      posts: null,
      factchecks: null,
      story: null
    }
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
  async asyncData() {
    const posts = await axios
      .get(
        `${process.env.apiUri}/api/v1/posts/?client_id=${
          process.env.clientId
        }&sortBy=lastUpdatedDate&sortAsc=false`
      )
      .then(response => response.data)

    const factchecks = await axios
      .get(
        `${process.env.apiUri}api/v1/factchecks/?client_id=${
          process.env.clientId
        }&sortBy=lastUpdatedDate&sortAsc=false`
      )
      .then(response => response.data)

    const stories = posts && factchecks ? posts.concat(factchecks) : null

    return {
      story: stories
    }
  }
}
</script>
