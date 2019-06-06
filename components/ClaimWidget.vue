<template>
  <div>
    <div class="box" :class="widgetBackground">
      <div class="media">
        <div class="media-left">
          <figure class="image is-32x32">
            <img
              :src="claim.claimant.image_url"
              alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5 has-text-weight-bold">{{ claim.claimant.name }}</p>
          <p class="subtitle is-6">{{ claim.claim }}</p>
          <div class="is-hidden-tablet">
            <figure class="image is-128x128">
              <img
                :src="claim.rating.icon_url"
                alt="Placeholder image">
            </figure>
          </div>
          <div class="subtitle">
            <span class="is-size-6 has-text-weight-bold">Fact</span>
            <span class="is-size-6">{{ claim.review }}</span>
          </div>
        </div>
        <div class="media-left is-hidden-mobile">
          <figure class="image is-96x96">
            <img
              :src="claim.rating.icon_url"
              alt="Placeholder image">
          </figure>
        </div>
      </div>
    </div>
    <br>
    <article
      class="post"
      style="text-align: justify;">
      <p v-html="claim.description">{{ claim.description }}</p>
    </article>
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
  components: {
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
  computed: {
    widgetBackground() {
      const backgrounglist = ['false-background', 'misleading-background', 'unverified-background', 'partly-true-background', 'true-background']
      return backgrounglist[parseInt(this.claim.rating.numeric_value, 10) - 1]
    }
  },
};
</script>
