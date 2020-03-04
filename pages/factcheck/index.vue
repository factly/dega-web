<template>
  <div class="main-content">
    <Hero :story="stories[0]" />
    <hr class="spacer is-1-5 is-hidden-mobile">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryPreview
            v-for="(p, index) in stories.slice(1)"
            :key="index"
            :story="p"
          />
        </div>
        <div
          v-if="stories.length > 0 && stories.length >= total"
          class="margin-top-2">
          <h3 class="is-size-4 has-text-centered">No more stories</h3>
        </div>
      </div>
      <div class="column is-4">
        <div class="is-hidden-mobile">
          <RelatedArticle
            slug="5c38f470569ed47e00c7002c"
            header="Recent Bussiness"
            collection="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoryPreview from '@/components/StoryPreview';
import Hero from '@/components/Hero';
import RelatedArticle from '@/components/RelatedArticle';
import factCheckQuery from '../../graphql/query/factcheck.gql';

export default {
  components: {
    StoryPreview,
    Hero,
    RelatedArticle
  },
  data() {
    return {
      stories: [],
      total: 0,
      pagination: {
        pageNext: 2
      }
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && this.stories.length < this.total) {
          this.getStories();
        }
      };
    },
    async getStories() {
      const factchecks = await this.$apollo.query({
        query: factCheckQuery,
        variables: {
          limit: 5,
          page: this.pagination.pageNext
        }
      })
        .then(f => f.data.factchecks.nodes)
        .catch(() => this.error({ code: 500, message: 'Something went wrong', homepage: true }));
      this.pagination.pageNext += 1;
      this.stories = this.stories.concat(factchecks);
    }
  },
  async asyncData({ app, error }) {
    // add error
    const factchecks = await app.apolloProvider.defaultClient.query({
      query: factCheckQuery,
      variables: {
        limit: 5,
        page: 1
      }
    })
      .then(f => f.data.factchecks)
      .catch(() => error({ code: 500, message: 'Something went wrong', homepage: true }));

    return {
      stories: factchecks.nodes,
      total: factchecks.total
    };
  },
  head() {
    const title = `Factchecks - ${this.$store.getters.getOrganization.site_title}`;
    return {
      title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
      ]
    };
  }
};
</script>
