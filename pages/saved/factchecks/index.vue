<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div v-if="factchecks && factchecks.length" class="container">
          <div class="columns">
            <div class="column is-12">
              <section>
                <h3>FACTCHECKS YOU SAVED</h3>
                <br>
                <div v-for="(f, index) in factchecks" :key="index" class="container columns">
                  <nuxt-link :to="'/factchecks/'+ f.slug">
                    <MoreStories :story="f" :categories="true"/>
                  </nuxt-link>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div v-else class="subtitle is-6 is-uppercase has-text-centered">
          You havent bookmarked any factcheck stories.<br>
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
      factchecks: null
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
    const factcheck = await axios
      .post(
        `${process.env.userDataApiUri}/saved/factchecks`,
        {
          "user":app.$auth.user
        }
      )
      .then((response)=>
      {
        console.log("liked factchecks",response.data);
        return response.data
      })
      .catch(err => console.log(err));
    return {
      factchecks: factcheck
    };
  }
};
</script>
