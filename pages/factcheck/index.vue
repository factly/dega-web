<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div
          v-if="factchecks && factchecks.length"
          class="container">
          <nuxt-link :to="'/factcheck/'+ factchecks[0].slug">
            <Hero :story="factchecks[0]" :categories= "true"/>
          </nuxt-link>
          <hr class="spacer is-1-5 is-hidden-mobile">
          <div class="columns" v-if="factchecks.length > 1">
            <!-- MoreStories Section -->
            <div class="column is-12">
              <section>
                <h3>MORE STORIES</h3>
                <br>
                <div
                  v-for="(p, index) in factchecks.slice(1)"
                  :key="index"
                  class="container columns">
                  <nuxt-link :to="'/factcheck/'+ p.slug">
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
    <SocialSharingVertical class="is-hidden-mobile" :url="$nuxt.$route.path"/>
    <SocialSharingHorizontal class="is-hidden-desktop is-hidden-tablet" :url="$nuxt.$route.path"/>
  </div>
</template>

<script>
import axios from 'axios';
import MoreStories from '~/components/MoreStories';
import PopularArticles from '~/components/PopularArticles';
import Hero from '~/components/Hero';
import SocialSharingVertical from '~/components/SocialSharingVertical';
import SocialSharingHorizontal from '~/components/SocialSharingHorizontal';
import BackgroundImage from '~/assets/images/dega-default-image.png';

export default {
  components: {
    MoreStories,
    PopularArticles,
    Hero,
    SocialSharingHorizontal,
    SocialSharingVertical
  },
  data() {
    return {
      factchecks: null,
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
  async asyncData() {
    const factcheck = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(error => console.log(error));
      return{
        factchecks: factcheck
      };
  },
  head () {
    return {
      /* eslint no-underscore-dangle: 0 */
      title: this.factchecks[0]._class.split('.').pop(),
      meta: [
        /* eslint no-underscore-dangle: 0 */
        { hid: 'og:title', name: 'og:title', content: this.factchecks[0]._class.split('.').pop() },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
        { hid: 'og:image', name: 'og:image', content: this.prodBaseUrl + BackgroundImage }
      ]
    }
  }
};
</script>
