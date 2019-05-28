<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div v-if="posts && posts.length" class="container">
          <div class="columns">
            <div class="column is-12">
              <section>
                <h3>POSTS YOU LIKED</h3>
                <br>
                <div v-for="(p, index) in posts" :key="index" class="container columns">
                  <nuxt-link :to="'/post/'+ p.slug">
                    <MoreStories :story="p" :categories="true"/>
                  </nuxt-link>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div v-else class="subtitle is-6 is-uppercase has-text-centered">
          You havent bookmarked any posts<br>
        </div>
      </div>
    </div>
    <SocialSharingVertical class="is-hidden-mobile" :url="$nuxt.$route.path"/>
  </div>
</template>
<script>
import axios from 'axios';
import MoreStories from '~/components/MoreStories';
import PopularArticles from '~/components/PopularArticles';
import Hero from '~/components/Hero';
import SocialSharingVertical from '~/components/SocialSharingVertical';

export default {
  authenticated: true,
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
  mounted(){
     
        
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

  async asyncData({app}) {
    const post = await axios
      .post(
        `${process.env.userDataApiUri}/saved/posts`,
        {
          "user":app.$auth.user
        }
      )
      .then((response)=>
      {
        console.log("liked posts",response.data);
        return response.data
      })
      .catch(err => console.log(err));
    return {
      posts: post
    };
  }
};
</script>
