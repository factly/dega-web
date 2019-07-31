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
          <div v-if="factcheck[0].authors.length > 0">
            <RelatedArticle
              v-for="(author, index) in factcheck[0].authors"
              :key="'author-related'+index"
              :slug="author.slug"
              :header="'More from '+author.display_name"
              :id="factcheck[0]._id"
              collection="author"
            />
          </div>
          <div
            v-if="factcheck[0].categories.length > 0"
            class="margin-top-2">
            <RelatedArticle
              v-for="(category, index) in factcheck[0].categories"
              :key="'author-related'+index"
              :slug="category.slug"
              :header="'More in '+category.name"
              :id="factcheck[0]._id"
              collection="category"
            />
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
import RelatedArticle from '@/components/RelatedArticle';

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
      factcheck: null
    };
  },
  validate({ params }) {
    return params.slug;
  },
  async asyncData({ params, error }) {
    const factcheck = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&slug=${params.slug}`))
      .then(response => response.data.data)
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
      metadata.title = `${factcheck[0].title} - ${this.$store.getters.getOrganisation.site_title}`;
      metadata.script = [
        { innerHTML: JSON.stringify(factcheck[0].schemas), type: 'application/ld+json' },
      ];
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: `${factcheck[0].title} - ${this.$store.getters.getOrganisation.site_title}` },
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
