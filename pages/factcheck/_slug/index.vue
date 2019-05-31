<template>
  <div v-if="factcheck && factcheck.length > 0">
    <Hero
      :story="factcheck[0]"
      :categories= "true"/>
    <div class="column is-divider is-hidden-mobile is-offset-one-quarter is-half"/>
    <div class="columns">
      <div class="column is-2"/>
      <div class="column is-full-mobile">
        <div class="column is-full">
          <div>
            <hr class="spacer is-1-5 is-hidden-mobile">
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
      <div class="column is-2">
        <div
          v-if="factcheck[0].claims.length > 1"
          class="column is-hidden-mobile">
          <ListClaims :factcheck="factcheck[0]"/>
        </div>
      </div>
    </div>
    <SocialSharingVertical
      :url="$nuxt.$route.path"
      class="is-hidden-mobile" />
    <SocialSharingHorizontal
      :url="$nuxt.$route.path"
      class="is-hidden-desktop is-hidden-tablet"/>
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
import '~/node_modules/bulma-divider';
import Hero from '~/components/Hero';
import ClaimWidget from '~/components/ClaimWidget';
import SocialSharing from '~/components/SocialSharing';
import SocialSharingVertical from '~/components/SocialSharingVertical';
import SocialSharingHorizontal from '~/components/SocialSharingHorizontal';
import ListClaims from '~/components/ListClaims.vue';

export default {
  components: {
    Hero,
    ClaimWidget,
    SocialSharing,
    SocialSharingVertical,
    SocialSharingHorizontal,
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
    },
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
