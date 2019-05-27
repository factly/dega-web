<template>
  <div class="columns">
    <div class="column">
      <div class="main-content">
        <div v-if="story && story.length">
          <div>
            <Hero :story="story[0]" />
          </div>
          <hr class="spacer is-1-5">
          <div class="columns">
            <div class="column is-8">
              <div class="columns is-multiline">
                <div
                  v-for="(p, index) in story.slice(1)"
                  :key="index"
                  class="column is-6"
                >
                  <StoryPreview
                    :story="p"
                  />
                </div>
              </div>
            </div>
            <div class="column is-4">
              <PopularArticles />
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
import StoryPreview from '@/components/StoryPreview';
import Hero from '@/components/Hero';
import BackgroundImage from '@/assets/images/dega-default-image.png';
import PopularArticles from '@/components/PopularArticles';

import _ from 'lodash';

export default {
  components: {
    Hero,
    StoryPreview,
    PopularArticles
  },
  data() {
    return {
      story: null,
      prodBaseUrl: process.env.domainHostname
    };
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
