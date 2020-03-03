
<template>
  <div
    class="main-content">
    <div
      v-for="(f, i) in factchecks"
      ref="factchecks"
      :key="i"
      class="columns">
      <div class="column is-8">
        <div>
          <StoryHead :story="f"/>
        </div>
        <div class="margin-top-2">
          <article
            class="has-text-justify factcheck-intro-font"
            v-html="f.introduction" />
          <br>
          <div
            v-for="(claim,index) in f.claims"
            :key="index"
            :id="'claim-div-'+index">
            <a
              :id="'claim'+(index)"
              class="anchor"/>
            <Claim
              :claim="claim"
              :index="index"/>
          </div>
          <article
            class="has-text-justify factcheck-summary-font"
            v-html="f.summary" />
        </div>
        <div class="margin-top-2">
          <StoryFooter
            :tags="f.tags"
            :updates="f.updates"
          />
        </div>
      </div>
      <div class="column is-4">
        <div>
          <div v-if="f.claims.length > 0">
            <ListClaims
              v-if="f.claims.length > 1"
              :claims="f.claims" />
          </div>
          <div v-if="f.categories.length > 0">
            <RelatedArticle
              v-for="(category, index) in f.categories"
              :key="'user-related'+index"
              :slug="category._id"
              :header="`More in ${category.name}`"
              :id="f.id"
              class="margin-horizontal-1"
              collection="category"
            />
          </div>
          <div v-if="f.degaUsers.length > 0">
            <RelatedArticle
              v-for="(user, index) in f.degaUsers"
              :key="'user-related'+index"
              :slug="user._id"
              :header="`More from ${user.display_name}`"
              :id="f.id"
              class="margin-horizontal-1"
              collection="user"
            />
          </div>
        </div>
      </div>
    </div>
    <SocialSharingVertical
      :url="'/factcheck/'+factchecks[on]._id"
      :quote="factchecks[on].title"
      :id="factchecks[on].id"
      type="factcheck"
    />
  </div>
</template>
<style>
a.anchor {
    display: block;
    position: relative;
    top: -80px;
}
</style>
<script>
/* eslint-disable no-underscore-dangle */
import StoryHead from '@/components/StoryHead';
import StoryFooter from '@/components/StoryFooter';
import Claim from '@/components/Claim';
import ListClaims from '@/components/ListClaims';
import RelatedArticle from '@/components/RelatedArticle';
import factcheckByIdQuery from '../../../graphql/query/factcheckById.gql';
import factcheckQuery from '../../../graphql/query/factcheck.gql';

export default {
  components: {
    StoryHead,
    StoryFooter,
    Claim,
    ListClaims,
    RelatedArticle
  },
  data() {
    return {
      factchecks: [],
      on: 0,
      total: 0,
      pagination: {
        pageNext: 2
      }
    };
  },
  validate({ params }) {
    return params.slug;
  },
  watch: {
    on() {
      document.title = `${this.factchecks[this.on].title} - ${this.$store.getters.getOrganisation.siteTitle}`;
      // eslint-disable-next-line no-restricted-globals
      history.pushState({}, null, `/factcheck/${this.factchecks[this.on]._id}`);
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const scrolling = document.documentElement.scrollTop + window.innerHeight;
        const bottomOfWindow = scrolling + 50 >= document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          if (this.factchecks.length <= this.total) this.getLatestFactchecks();
        }

        const factchecksList = this.$refs.factchecks;
        for (let i = 0; i < factchecksList.length; i += 1) {
          const top = factchecksList[i].offsetTop;
          const bottom = top + factchecksList[i].clientHeight;
          if (scrolling >= top && scrolling < bottom) {
            if (this.on !== i) {
              this.on = i;
            }
          }
        }
      };
    },
    async getLatestFactchecks() {
      const latestFactcheck = await this.$apollo.query({
        query: factcheckQuery,
        variables: {
          limit: 1,
          page: this.pagination.pageNext,
          sortBy: 'published_date',
          sort: 'DES'
        }
      });
      this.pagination.pageNext = this.pagination.pageNext + 1;
      this.total = latestFactcheck.data.factchecks.total;
      console.log(latestFactcheck.data.factchecks.nodes);
      if (this.factchecks.find(value => value.id === latestFactcheck.data.factchecks.nodes[0]._id)) {
        console.log('Already there');
      } else {
        this.factchecks = this.factchecks.concat(latestFactcheck.data.factchecks.nodes);
      }
      console.log(this.factchecks.length, this.total);
    }
  },
  async asyncData({
    params, app
  }) {
    const result = await app.apolloProvider.defaultClient.query({
      query: factcheckByIdQuery,
      variables: {
        id: params.slug
      }
    });
    return {
      factchecks: [result.data.factcheck],
      total: 1
    };
  },
  head() {
    const metadata = {};
    const { factchecks } = this;
    if (factchecks.length > 0) {
      metadata.title = `${factchecks[0].title} - ${this.$store.getters.getOrganisation.siteTitle}`;
      metadata.script = [
        { innerHTML: JSON.stringify(factchecks[0].schemas), type: 'application/ld+json' },
        { src: 'https://platform.twitter.com/widgets.js', async: true },
      ];
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: `${factchecks[0].title} - ${this.$store.getters.getOrganisation.siteTitle}` },
        { hid: 'og:image', name: 'og:image', content: factchecks[0].media ? factchecks[0].media.url : null },
        { hid: 'og:description', name: 'og:description', content: factchecks[0].excerpt ? factchecks[0].excerpt : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.siteTitle; }

    return metadata;
  }
};
</script>
