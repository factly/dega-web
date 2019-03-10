<template>
  <div class="columns factcheck-list">
    <div class="column is-three-fourth">
      <div class="main-content">
        <div 
          v-if="factchecks" 
          class="container">
          <nuxt-link :to="'/factcheck/'+ factchecks[0].slug">
            <div class="columns">
              <div class= "column is-6">
                <div class="card">
                  <div class="card-image">
                    <figure class ="image is-5by3">
                      <img 
                        :src="factchecks[0].featured_media" 
                        alt="Factchecks">
                    </figure>
                  </div>
                </div>
              </div>
              <div class= "column is-6 is-full-mobile" >
                <div class="content subtitle has-text-centered">
                  <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop">{{ factchecks[0].sub_title }}</p>
                </div>
                <div 
                  v-if="factchecks[0].authors" 
                  class="subtitle is-6 is-uppercase has-text-centered">
                  BY
                  <span 
                    v-for="(author, index) in factchecks[0].authors" 
                    :key="index" >{{ author.display_name }}
                    <span v-if="index != factchecks[0].authors.length -1">, </span>
                  </span>
                </div>
                <div class="has-text-centered">{{ getDate(factchecks[0].last_updated_date) }}</div><br>
                <div class="has-text-justified">
                  {{ factchecks[0].excerpt }}
                </div>
              </div>
            </div>
          </nuxt-link>
          <hr class="spacer is-1-5 is-hidden-mobile">
          <div class="columns">
            <!-- MoreStories Section -->
            <div class="column is-12">
              <section>
                <h3>MORE STORIES</h3>
                <br>
                <div 
                  v-for="(p, index) in factchecks.slice(1)" 
                  :key="index" 
                  class="container columns">
                  <nuxt-link :to="'/factCheck/'+ p.slug">
                    <MoreStories 
                      :story="p" 
                      :categories="false"/>
                  </nuxt-link>
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
.factcheck-list {
  margin: 1%;
}
</style>

<script>
import axios from 'axios'
import MoreStories from '../../components/MoreStories'
import PopularArticles from '~/components/PopularArticles'

export default {
  components: {
    MoreStories,
    PopularArticles
  },
  data(){
    return{
      factchecks: null
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
    console.log(`${process.env.apiUri}/api/v1/factchecks/?client_id=${process.env.clientId}&sortBy=lastUpdatedDate&sortAsc=false`);
    const factChecks = await axios
      .get(
        `${process.env.apiUri}/api/v1/factchecks/?client_id=${
          process.env.clientId
        }&sortBy=lastUpdatedDate&sortAsc=false`
      )
      .then(response => response.data)
      .catch(error => console.log(error))
    return{
      factchecks: factChecks
    }
  }
}
</script>
