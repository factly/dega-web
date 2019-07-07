<template>
  <div class="main-content">
    <div v-if="posts && posts.length">
      <Hero :story="topPost" />
      <hr class="spacer is-1-5 is-hidden-mobile" />
      <div class="columns">
        <div class="column is-8">
          <div>
            <StoryPreview v-for="(p, index) in posts" :key="index" :story="p" />
            <Pagination :list.sync="posts" :fetchData="fetchData" :paging.sync="paging" />
          </div>
        </div>
        <div class="column is-4">
          <div class="is-hidden-mobile">
            <PopularArticles />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="subtitle is-6 is-uppercase has-text-centered">
      Dega API is not responding.
      <br />Please contact the administrator.
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import StoryPreview from '@/components/StoryPreview'
import Hero from '@/components/Hero'
import _ from 'lodash'
import Pagination from '@/components/Pagination'
export default {
  components: {
    StoryPreview,
    Hero,
    Pagination
  },
  data() {
    const fetchData = async (next = null, previous = null) => {
      let paginationParams = ''
      paginationParams = '&limit=3'
      if (next) paginationParams += '&next=' + next
      if (previous) paginationParams += '&previous=' + previous
      console.log(paginationParams)
      const posts = await axios
        .get(
          encodeURI(
            `${process.env.apiUri}/api/v1/posts/?client=${
              process.env.clientId
            }&sortBy=publishedDate&sortAsc=false${paginationParams}`
          )
        )
        .then(response => response.data)
        .catch(err => console.log(err))
      console.log('posts api response', posts)
      const sortedPosts = _.orderBy(posts.data, ['published_date'], ['desc'])
      return { data: sortedPosts, paging: posts.paging }
    }
    return {
      fetchData: fetchData,
      posts: null
    }
  },
  // created(){
  //   console.log("created");
  //   this.posts = _.orderBy(this.$store.getters.getPosts, ['published_date'], ['desc']);
  // },
  async asyncData() {
    const posts = await axios
      .get(
        encodeURI(
          `${process.env.apiUri}/api/v1/posts/?client=${
            process.env.clientId
          }&sortBy=publishedDate&sortAsc=false&limit=3`
        )
      )
      .then(response => response.data)
      .catch(err => console.log(err))
    console.log('posts api response', posts)
    const sortedPosts = _.orderBy(posts.data, ['published_date'], ['desc'])
    return {
      topPost: sortedPosts[0],
      posts: sortedPosts.slice(1),
      paging: posts.paging
    }
  },
  head() {
    return {
      /* eslint no-underscore-dangle: 0 */
      title: this.posts[0]._class.split('.').pop(),
      meta: [
        /* eslint no-underscore-dangle: 0 */
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.posts[0]._class.split('.').pop()
        }
      ]
    }
  }
}
</script>
