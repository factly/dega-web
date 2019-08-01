<template>
  <div class="main-content">
    <Hero :story="factchecks[0]"/>
    <hr class="spacer is-1-5 is-hidden-mobile">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryPreview
            v-for="(p, index) in factchecks.slice(1)"
            :story="p"
            :key="index"
          />
        </div>
        <div
          v-if="factchecks.length > 0 && !pagination.hasNext"
          class="margin-top-2">
          <h3 class="is-size-4 has-text-centered">No more factchecks</h3>
        </div>
      </div>
      <div class="column is-4">
        <div class="is-hidden-mobile">
          <RelatedArticle
            slug="video"
            header="Recent Videos"
            collection="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';
import Hero from '~/components/Hero';
import RelatedArticle from '@/components/RelatedArticle';

export default {
  components: {
    Hero,
    StoryPreview,
    RelatedArticle
  },
  data() {
    return {
      factchecks: [],
      pagination: {}
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && this.pagination.hasNext) {
          this.getFactchecks();
        }
      };
    },
    getFactchecks() {
      const next = this.pagination.next ? this.pagination.next : '';
      axios
        .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false&next=${next}&limit=5`))
        .then((response) => {
          this.factchecks = (this.factchecks || []).concat(response.data.data || []);
          this.pagination = response.data.paging;
        })
        .catch(err => console.log(err));
    }
  },
  async asyncData({ error }) {
    const rawData = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false&limit=5`))
      .then(response => response.data)
      .catch(err => console.log(err));
    if (rawData.data.length === 0) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }
    return {
      factchecks: rawData.data,
      pagination: rawData.paging
    };
  },
  head() {
    return {
      /* eslint no-underscore-dangle: 0 */
      title: this.factchecks[0]._class.split('.').pop(),
      meta: [
        /* eslint no-underscore-dangle: 0 */
        { hid: 'og:title', name: 'og:title', content: this.factchecks[0]._class.split('.').pop() },
      ]
    };
  }
};
</script>
