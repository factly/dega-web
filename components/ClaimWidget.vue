<template>
  <div>
    <br>
    <article :id="'claim'+(index+1)" class="post" style="text-align: justify;">
      <p v-html="claim.description">{{ claim.description }}</p>
    </article>
    <div class="card column is-full" style="background-color: #f5faff; margin: 1rem 0 1rem 0;">
      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="claim.claimant.image_url" alt="Claim Source" width="100%">
            </figure>
          </div>
        </div>
        <div class="column is-8">
          <div class="card-content" style="padding-top: 0px; padding-bottom: 0px;">
            <div class style="padding-bottom: 0.75rem">
              <a :href="claim.claim_source">
                <span
                  class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
                  style="color: #1976d2;"
                >Claimed by {{ claim.claimant.name }}</span>
              </a>
              <span
                v-if="claim.claim_date"
                class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
                style="color: #1976d2;"
              >on {{ getDate(claim.claim_date) }}</span>
            </div>
            <div class style="padding-bottom: 0.75rem">
              <span
                class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
                style="color: #1976d2;"
              >Claim:</span>
              <span
                class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
              >{{ claim.claim }}</span>
            </div>
            <div class="columns">
              <p class="column title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile" style="color: #1976d2;" >
                <!-- Share: -->
                <SocialSharing :url="$nuxt.$route.path"/>  <!-- + Add the claims number to the url+'#({{ index }}+1)' -->
              </p>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="claim.rating.icon_url" alt="Claim Rating" width="90%">
            </figure>
          </div>
        </div>
      </div>
      <div>
        <p>
          <span
            style="color: #1976d2;"
            class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
          >Fact:</span>
          <span
            class="subtitle is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"
          >{{ claim.review }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

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