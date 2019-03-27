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
            <!-- MoreStories Section -->
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
    <!-- <PopularArticles></PopularArticles> -->
    <SocialSharingVertical :url="$nuxt.$route.path"/>
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
      story: null
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
      .get(
        `${process.env.apiUri}/api/v1/posts/?client_id=${
          process.env.clientId
        }&sortBy=lastUpdatedDate&sortAsc=false`
      )
      .then(response => response.data);

    const factchecks = await axios
      .get(
        `${process.env.apiUri}/api/v1/factchecks/?client_id=${
          process.env.clientId
        }&sortBy=lastUpdatedDate&sortAsc=false`
      )
      .then(response => response.data);

    const stories = (posts || []).concat(factchecks || []);

    const sortedStories = stories.sort(
      (storyFirst, storySecond) =>
        storyFirst.last_updated_date > storySecond.last_updated_date ? 1 : -1
    );

    return {
      story: sortedStories
    };
  }
};
</script>
