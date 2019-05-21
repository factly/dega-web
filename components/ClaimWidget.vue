<template>
  <div>
    <br>
    <article class="post" style="text-align: justify;">
      <p v-html="claim.description">{{ claim.description }}</p>
    </article>
    <div class="card column is-full is-desktop" style="background-color: #f5faff; margin: 1rem 0 1rem 0;">
      <div class="columns is-vcentered" style="margin-bottom: 0;">
        <div class="column is-2 is-hidden-mobile">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="claim.claimant.image_url" alt="Claim Source" width="100%">
            </figure>
          </div>
        </div>
        <div class="column is-8">
          <div>
            <div>
              <a :href="claim.claim_source">
                <span
                  class="title is-size-3 is-size-6-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
                  style="color: #1976d2;"
                >Claimed by {{ claim.claimant.name }}</span>
              </a>
              <span
                v-if="claim.claim_date"
                class="title is-size-3 is-size-6-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
                style="color: #1976d2;"
              >on {{ getDate(claim.claim_date) }}</span>
            </div>
            <div class="padded-top">
              <span
                class="title is-size-3 is-size-6-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
                style="color: #1976d2;"
              >Claim:</span>
              <span
                class="title is-size-3 is-size-6-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
              >{{ claim.claim }}</span>
            </div>
            <div class="padded-top">
              <span class="title is-size-3 is-size-6-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2" style="color: #1976d2;">
                Rating:
              </span>
              <span class="title is-size-3 is-size-6-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2">
                {{ claim.rating.name }}
              </span>
            </div>
            <div class="columns is-hidden-mobile padded-top">
              <span class="column" style="color: #1976d2;">
                <SocialSharing :url="$nuxt.$route.path" :org="org"/>
              </span>
            </div>
          </div>
        </div>
        <div class="column is-size-3-tablet is-hidden-mobile is-centered">
          <div class="card-image">
            <figure class="image is-square ">
              <img :src="claim.rating.icon_url" alt="Claim Rating" style="max-width:50%, max-height:50%">
            </figure>
          </div>
        </div>
      </div>
      <div>
        <span style="color: #1976d2;" class="title is-size-3 is-size-6-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2">
          Fact:
        </span>
        <span class="subtitle is-size-3 is-size-6-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2 has-text-justified" v-html="claim.review">
        </span>
      </div>
      <div class="columns is-hidden-desktop is-hidden-tablet padded-top">
        <span class="column" style="color: #1976d2;">
          <SocialSharing :url="$nuxt.$route.path" :org="org"/>
        </span>
      </div>
    </div>
  </div>
</template>
<style>
.padded-top{
  padding-top: 0.75rem
}
</style>

<script>
import SocialSharing from '~/components/SocialSharing';

export default {
  components:{
    SocialSharing
  },
  props: {
    claim: {
      type: Object,
      required: true,
      default: null
    },
    org: {
      type: Object,
      required: false,
      default: null
    },
    index: {
      type: Number,
      required: true,
      default: null
    }
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
        'Dec'
      ];
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`;
    }
  }
};
</script>