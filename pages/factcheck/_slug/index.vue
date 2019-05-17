<template>
  <div v-if="factchecks && factchecks.length > 0">
    <Hero :story="factchecks[0]" :categories= "true"/>
    <div class="column is-divider is-hidden-mobile is-offset-one-quarter is-half"/>
    <div class="columns">
      <div class="column is-1"/>
      <div class="column is-full-mobile">
        <div class="column is-full">
          <div>
            <article class="post" style="text-align: justify;">
              <p v-html="factchecks[0].introduction">{{ factchecks[0].introduction }}</p>
            </article>
            <div v-for="(claim,index) in factchecks[0].claims" :key="index">
              <a class="anchor" :id="'claim'+(index+1)"></a>
              <ClaimWidget :claim="claim" :index="index"/>
            </div>
            <article class="post" style="text-align: justify;">
              <p v-html="factchecks[0].summary">{{ factchecks[0].summary }}</p>
            </article>
          </div>
        </div>
      </div>
      <div v-if="factchecks[0].claims.length > 1" class="column is-one-quarter is-hidden-mobile">
        <ListClaims :factchecks="factchecks"/> 
      </div>
      <div class="column is-1"/>
    </div>
    <SocialSharingVertical class="is-hidden-mobile" :url="$nuxt.$route.path" :org="organizations"/>
    <SocialSharingHorizontal class="is-hidden-desktop is-hidden-tablet" :url="$nuxt.$route.path"/>
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
      factchecks: null,
      organizations: null,
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
      .then((response) => response.data)
      .catch(err => console.log(err));
    const organizations = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/organizations/?client=${process.env.clientId}`))
      .then(response => response.data)
      .catch(err => console.log(err));

    return{
      factchecks: factcheck,
      organizations: organizations
      // structuredData: factcheck.schemas[0]
    };
  },
  head () {
    return {
      script: [
        { src: JSON.stringify(this.factchecks.schemas), type: 'application/ld+json' }],
      title: this.factchecks[0].title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.factchecks[0].title },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
        { hid: 'og:image', name: 'og:image', content: this.factchecks[0].featured_media }
      ]
    }
  }
};
</script>
