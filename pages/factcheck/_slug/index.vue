<template>
  <div class="main-content">
    <div v-if="factcheck && factcheck.length > 0">
      <div class="columns">
        <div class="column is-8">
          <StoryHead :story="factcheck[0]"/>
          <div class="margin-top-half">
            <article>
              <div class="has-text-justify is-size-5 mallanna-font" v-html="factcheck[0].introduction" />
            </article>
            <br>
            <div v-for="(claim,index) in factcheck[0].claims" :key="index" :id="'claim'+index">
              <a class="anchor" :id="'claim'+(index+1)"></a>
              <Claim :claim="claim" :index="index"/>
            </div>
            <article>
              <div class="has-text-justify is-size-5 mallanna-font" v-html="factcheck[0].summary" />
            </article>
          </div>
          <StoryFooter 
            :tags="factcheck[0].tags"
            :authors="factcheck[0].authors"
          />
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
      factcheck: null,
      ListClaimsHidden: false,
      structuredData: null,
      metaData: null
    };
  },
  methods: {
    validate({ params }) {
      return params.slug;
    }
  },
  async asyncData(params) {
    const Factcheck = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&slug=${params.params.slug}`))
      .then(response => response.data)
      .catch(err => console.log(err));
    return {
      factcheck: Factcheck,
      metaData: {
        __dangerouslyDisableSanitizers: ['script'],
        script: [
          { innerHTML: JSON.stringify(Factcheck[0].schemas), type: 'application/ld+json' }],
        title: Factcheck[0].title,
        meta: [
          { hid: 'og:title', name: 'og:title', content: Factcheck[0].title },
          { hid: 'og:image', name: 'og:image', content: Factcheck[0].featured_media },
        ]
      }
    };
  },
  head() {
    if (this.factcheck[0].excerpt) { this.metaData.meta.push({ hid: 'og:description', name: 'og:description', content: this.factcheck[0].excerpt }); }
    return this.metaData;
  }
};
</script>
