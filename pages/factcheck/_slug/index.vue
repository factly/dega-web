<template>
  <div class="main-content">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryHead :story="factcheck[0]"/>
        </div>
        <div class="margin-top-2">
          <article
            class="has-text-justify factcheck-intro-font"
            v-html="factcheck[0].introduction" />
          <br>
          <div
            v-for="(claim,index) in factcheck[0].claims"
            :key="index"
            :id="'claim'+index">
            <a
              :id="'claim'+(index+1)"
              class="anchor"/>
            <Claim
              :claim="claim"
              :index="index"/>
          </div>
          <article
            class="has-text-justify factcheck-summary-font"
            v-html="factcheck[0].summary" />
        </div>
        <div class="margin-top-2">
          <StoryFooter
            :tags="factcheck[0].tags"
            :authors="factcheck[0].authors"
            :updates="factcheck[0].updates"
          />
        </div>
      </div>
      <div class="column is-4">
        <div>
          <div
            v-if="factcheck[0].claims.length > 1"
            class="is-hidden-mobile"
            style="margin-bottom: 1rem;">
            <ListClaims :factcheck="factcheck"/>
          </div>
          <div class="is-hidden-mobile">
            <PopularArticles />
          </div>
        </div>
      </div>
    </div>
    <SocialSharingVertical
      :url="$nuxt.$route.path"
      :quote="factcheck[0].title"
      :story="factcheck[0]"
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
import axios from 'axios';
import StoryHead from '@/components/StoryHead';
import StoryFooter from '@/components/StoryFooter';
import Claim from '~/components/Claim';
import ListClaims from '~/components/ListClaims.vue';

export default {
  components: {
    StoryHead,
    StoryFooter,
    Claim,
    ListClaims
  },
  data() {
    return {
      factcheck: null
    };
  },
  methods: {
    validate({ params }) {
      return params.slug;
    }
  },
  async asyncData({ params, error }) {
    const factcheck = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&slug=${params.slug}`))
      .then(response => response.data)
      .catch(err => console.log(err));
    if (factcheck.length === 0) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }
    return { factcheck };
  },
  head() {
    const metadata = {};
    const { factcheck } = this;
    if (factcheck && factcheck.length === 1) {
      metadata.title = factcheck[0].title;
      metadata.script = [
        { innerHTML: JSON.stringify(factcheck[0].schemas), type: 'application/ld+json' },
      ];
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: factcheck[0].title },
        { hid: 'og:image', name: 'og:image', content: factcheck[0].featured_media },
        { hid: 'og:description', name: 'og:description', content: factcheck[0].excerpt ? factcheck[0].excerpt : null },
      ];
      metadata.script = [
        { src: 'https://platform.twitter.com/widgets.js', async: true },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.site_title; }

    return metadata;
  }
};
</script>
