<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div v-if="posts && posts.length" class="container">
          <nuxt-link :to="'/post/'+ posts[0].slug">
            <Hero :story="posts[0]" :categories= "true"/>
          </nuxt-link>
          <hr class="spacer is-1-5 is-hidden-mobile">
          <div class="columns">
            <div class="column is-12" v-if="posts.length > 1">
              <section>
                <h3>MORE STORIES</h3>
                <br>
                <div v-for="(p, index) in posts.slice(1)" :key="index" class="container columns">
                  <nuxt-link :to="'/post/'+ p.slug">
                    <MoreStories :story="p" :categories="true"/>
                  </nuxt-link>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div v-else class="subtitle is-6 is-uppercase has-text-centered">
          Dega API is not responding.<br> Please contact the administrator.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import MoreStories from '~/components/MoreStories';
import PopularArticles from '~/components/PopularArticles';
import Hero from '~/components/Hero';
import BackgroundImage from '~/assets/images/dega-default-image.png';
import _ from 'lodash';
export default {
  components: {
    MoreStories,
    PopularArticles,
    Hero
  },
  data() {
    return {
      posts: null,
      prodBaseUrl: process.env.domainHostname
    };
  },
  methods: {
    getDate(datetime) {
      const date = new Date(datetime);
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
        'Dec',
      ];
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`;
    }
  },
  // created(){
  //   console.log("created");
  //   this.posts = _.orderBy(this.$store.getters.getPosts, ['published_date'], ['desc']);
  // },
  async asyncData() {
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const sortedPosts = _.orderBy(posts, ['published_date'], ['desc']);
    return {
      posts: sortedPosts
    };
  },
  head () {
    return {
      /* eslint no-underscore-dangle: 0 */
      title: this.posts[0]._class.split('.').pop(),
      meta: [
        /* eslint no-underscore-dangle: 0 */
        { hid: 'og:title', name: 'og:title', content: this.posts[0]._class.split('.').pop() },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
        { hid: 'og:image', name: 'og:image', content: this.prodBaseUrl + BackgroundImage }
      ]
    }
  }
};
</script>
