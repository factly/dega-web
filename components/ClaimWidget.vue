<template>
  <div>
    <br>
    <div class="card has-background-light">
      <div class="card-content">
        <div style="margin-bottom: 1rem;">
          <div class="columns">
            <div class="column is-6">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      :src="claim.rating.icon_url"
                      alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="is-size-6">Rating</p>
                  <p class="is-size-6 has-text-weight-bold">{{ claim.rating.name }}</p>
                </div>
              </div>
            </div>
            <div class="column is-6 is-hidden-mobile">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6 has-text-right">Claimed by {{ claim.claimant.name }}</p>
                  <p class="subtitle is-7 has-text-right">{{ claim.claim_date | date }}</p>
                </div>
                <div class="media-right">
                  <figure class="image is-48x48">
                    <img
                      :src="claim.claimant.image_url"
                      alt="Placeholder image">
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-bottom: 1rem;">
          <p class="is-size-6 has-text-weight-bold">Claim</p>
          <p class="is-size-6">{{ claim.claim }}</p>
        </div>
        <div style="margin-bottom: 1rem;">
          <p class="is-size-6 has-text-weight-bold">Fact</p>
          <span
            class="is-size-6"
            v-html="claim.review" />
        </div>
        <div
          class="is-hidden-desktop"
          style="margin-bottom: 1rem;">
          <div class="columns">
            <div class="column is-6"/>
            <div class="column is-6">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6 has-text-right">Claimed by {{ claim.claimant.name }}</p>
                  <p class="subtitle is-7 has-text-right">{{ claim.claim_date | date }}</p>
                </div>
                <div class="media-right">
                  <figure class="image is-48x48">
                    <img
                      :src="claim.claimant.image_url"
                      alt="Placeholder image">
                  </figure>
                </div>
              </div>
            </div>
          </div>
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
  }
};
</script>
