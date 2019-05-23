<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div
          v-if="story && story.length"
          class="container">
          <nuxt-link :to="'/'+ story[0]._class.split('.').pop().toLowerCase()+ '/' + story[0].slug">
            <Hero :story="story[0]" :categories= "true"/>
          </nuxt-link>
          <hr class="spacer is-1-5">
          <div class="columns">
            <div class="column is-12" v-if="story.length > 1">
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
  </div>
</template>

<script>
import axios from 'axios';
import MoreStories from '~/components/MoreStories';
import PopularArticles from '~/components/PopularArticles';
import Hero from '~/components/Hero';
import _ from 'lodash';
export default {
  components: {
    MoreStories,
    PopularArticles,
    Hero
  },
  data() {
    return {
      story: null
    };
  },
  methods: {
    validate({ params }) {
      return params.slug;
    },
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
  async asyncData(params) {
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&author=${params.params.slug}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));
      
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&user=${params.params.slug}&sortBy=publishedDate&sortAsc=false`))
      .then(response => response.data)
      .catch(err => console.log(err));

    const stories = (posts || []).concat(factchecks || []);

    const sortedStories = _.orderBy(stories, ['published_date'], ['desc']);

    return {
      story: sortedStories
    };
  },
  head () {
    return {
      title: this.story[0].authors[0],
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.story[0].authors[0] },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
        { hid: 'og:image', name: 'og:image', content: '~/assets/images/dega-default-image.png' }
      ]
    }
  }
};
</script>
