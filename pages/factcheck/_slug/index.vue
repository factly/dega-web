<template>
  <div>
    <div class="columns">
      <div class="column is-8">
        <div v-if="factcheck && factcheck.length > 0">
          <StoryHead :story="factcheck[0]"/>
          <div class="columns">
            <div class="column is-full-mobile">
              <div class="column is-full">
                <div>
                  <article
                    class="post"
                    style="text-align: justify;">
                    <p v-html="factcheck[0].introduction">{{ factcheck[0].introduction }}</p>
                  </article>
                  <div
                    v-for="(claim,index) in factcheck[0].claims"
                    :key="index">
                    <a
                      :id="'claim'+(index+1)"
                      class="anchor"/>
                    <ClaimWidget
                      :claim="claim"
                      :index="index"/>
                  </div>
                  <article
                    class="post"
                    style="text-align: justify;">
                    <p v-html="factcheck[0].summary">{{ factcheck[0].summary }}</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
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
    />
  </div>
</template>
<style scoped>
a.anchor {
    display: block;
    position: relative;
    top: -80px;
}
</style>
<script>
import axios from 'axios';
import StoryHead from '@/components/StoryHead';
import ClaimWidget from '~/components/ClaimWidget';
import ListClaims from '~/components/ListClaims.vue';

export default {
  components: {
    StoryHead,
    ClaimWidget,
    ListClaims
  },
  data() {
    return {
      factcheck: null,
      ListClaimsHidden: false,
      structuredData: null
    };
  },
  methods: {
    validate({ params }) {
      return params.slug;
    }
  },
  async asyncData(params) {
    const factcheck = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&slug=${params.params.slug}`))
      .then(response => response.data)
      .catch(err => console.log(err));
    return {
      factcheck
    };
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.factcheck[0].schemas), type: 'application/ld+json' }],
      title: this.factcheck[0].title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.factcheck[0].title },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
        { hid: 'og:image', name: 'og:image', content: this.factcheck[0].featured_media },
      ]
    };
  }
};
</script>
