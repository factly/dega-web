<template>
  <div class="main-content">
    <div v-if="story && story.length">
      <div>
        <Hero :story="story[0]"/>
      </div>
      <hr class="spacer is-1-5">
      <div class="columns">
        <div class="column is-8">
          <div>
            <StoryPreview v-for="(p, index) in story.slice(1)" :key="index" :story="p"/>
            <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
              <button class="button is-light pagination-previous" @click="fetchPreviousPage">⬅️ Previous</button>
              <button class="button is-light pagination-next" @click="fetchNextPage">Next page ➡️</button>
            </nav>
          </div>
        </div>
        <div class="column is-4">
          <div class="is-hidden-mobile">
            <PopularArticles/>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="subtitle is-6 is-uppercase has-text-centered">
      Dega API is not responding.
      <br>Please contact the administrator.
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import StoryPreview from '@/components/StoryPreview'
import Hero from '@/components/Hero'

import _ from 'lodash'

export default {
  authenticated: true,
  components: {
    Hero,
    StoryPreview
  },
  data() {
    return {
      story: null
    }
  },
  async asyncData() {
    const posts = await axios
      .get(
        encodeURI(
          `${process.env.apiUri}/api/v1/posts/?client=${
            process.env.clientId
          }&sortBy=publishedDate&sortAsc=false`
        )
      )
      .then(response => response.data.data)
      .catch(err => console.log(err))
    const factchecks = await axios
      .get(
        encodeURI(
          `${process.env.apiUri}/api/v1/factchecks/?client=${
            process.env.clientId
          }&sortBy=publishedDate&sortAsc=false`
        )
      )
      .then(response => response.data.data)
      .catch(err => console.log(err))
    const stories = (posts || []).concat(factchecks || [])
    const sortedStories = _.orderBy(stories, ['published_date'], ['desc'])
    return {
      story: sortedStories,
      perPage: 2,
      current: 1
    }
  },

  head() {
    return {
      htmlAttrs: {
        class: 'has-navbar-fixed-top'
      }
    }
  },
  methods: {
   fetchNextPage(){
     console.log("fetchNextPage");
   },
   fetchPreviousPage(){
     console.log("fetchPreviousPage")
   }
  }
}
</script>
