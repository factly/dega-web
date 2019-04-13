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
          <div class="columns">
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
    <!-- <PopularArticles></PopularArticles> -->
  </div>
</template>

<script>
import axios from 'axios';
import MoreStories from '~/components/MoreStories';
import PopularArticles from '~/components/PopularArticles';
import Hero from '~/components/Hero';

export default {
  components: {
    MoreStories,
    PopularArticles,
    Hero
  },
  data() {
    return {
      factchecks: null
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
      .get(
        `${process.env.apiUri}/api/v1/factchecks/?client=${
          process.env.clientId
        }&sortBy=lastUpdatedDate&sortAsc=false`
      )
      .then(response => response.data)
      .catch(error => console.log(error));
      return{
        factchecks: factcheck
      };
  }
};
</script>
