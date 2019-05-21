<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div
          v-if="story && story.length"
          class="container">
          <nuxt-link :to="'/'+ story[0]._class.split('.').pop().toLowerCase()+ '/' + story[0].slug">
            <Hero
              :story="story[0]"
              :categories= "true"/>
          </nuxt-link>
          <hr class="spacer is-1-5">
          <div
            v-if="story.length > 1"
            class="columns">
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
    <SocialSharingVertical
      :url="$nuxt.$route.path"
      class="is-hidden-mobile"/>
    <SocialSharingHorizontal
      :url="$nuxt.$route.path"
      class="is-hidden-desktop is-hidden-tablet"/>
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
      story: null,
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
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const stories = (posts || []).concat(factchecks || []);
    const sortedStories = _.orderBy(stories, ['published_date'], ['desc']);
    return {
      story: sortedStories
    };
  },

  head() {
    return {
      title: 'Factly',
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'Factly' },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
        { hid: 'og:image', name: 'og:image', content: this.prodBaseUrl + BackgroundImage },
        { property: 'og:description', content: 'FACTLY is a platform that brings you various aspects of life that directly or indirectly affects the common man but with ONE difference. Each news story on FACTLY is backed by factual evidence/data that is either available in the public domain or that is collated/gathered/collected using tools such as the Right to Information (RTI).' },
      ],
      htmlAttrs: {
        class: 'has-navbar-fixed-top'
      }
    };
  }
};
</script>
