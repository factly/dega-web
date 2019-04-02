<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div
          v-if="posts && posts.length"
          class="container">
          <nuxt-link :to="'/post/'+ posts[0].slug">
            <Hero :story="posts[0]" :categories= "true"/>
          </nuxt-link>
          <hr class="spacer is-1-5 is-hidden-mobile">
          <div class="columns">
            <!-- MoreStories Section -->
            <div class="column is-12">
              <section>
                <h3>MORE STORIES</h3>
                <br>
                <div
                  v-for="(p, index) in posts.slice(1)"
                  :key="index"
                  class="container columns">
                  <nuxt-link :to="'/post/'+ p.slug">
                    <MoreStories
                      :story="p"
                      :categories="true"/>
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
    <SocialSharingVertical class="is-hidden-mobile" :url="$nuxt.$route.path"/>
    <!-- <PopularArticles></PopularArticles> -->
  </div>
</template>
<script>
import axios from 'axios';
import MoreStories from '~/components/MoreStories';
import PopularArticles from '~/components/PopularArticles';
import Hero from '~/components/Hero';
import SocialSharingVertical from '~/components/SocialSharingVertical';

export default {
  components: {
    MoreStories,
    PopularArticles,
    Hero,
    SocialSharingVertical
  },
  data() {
    return {
      posts: null
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

  async asyncData() {
    const post = await axios
      .get(
        `${process.env.apiUri}/api/v1/posts/?client_id=${
          process.env.clientId
        }&sortBy=lastUpdatedDate&sortAsc=false`
      )
      .then(response => response.data);
    return {
      posts: post
    };
  }
};
</script>
