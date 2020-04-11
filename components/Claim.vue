<template>
  <div>
    <div
      :class="widgetBackground"
      class="box">
      <div class="media">
        <div class="media-content">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <figure
                v-if="claim.claimant.media"
                class="image is-24x24">
                <img
                  :src="claim.claimant.media.source_url+'?resize:fill:50:50:0/gravity:sm'"
                  :alt="claim.claimant.media.altText">
              </figure>
            </div>
            <div class="control">
              <p class="is-size-5 has-text-weight-bold">{{ claim.claimant.name }}</p>
            </div>
          </div>
          <div class="field is-horizontal">
            <span class="is-size-6"><span class="has-text-weight-bold">{{ $t('factcheck.claim') }}:&nbsp;</span>{{ claim.claim }}</span>
          </div>
          <div class="is-hidden-tablet">
            <figure
              v-if="claim.rating.media"
              class="image is-128x128">
              <img
                :src="claim.rating.media.source_url+'?resize:fill:80:80:0/gravity:sm'"
                :alt="claim.rating.media.altText">
            </figure>
          </div>
          <div class="field is-horizontal">
            <span class="is-size-6"><span class="has-text-weight-bold">{{ $t('factcheck.fact') }}:&nbsp;</span><span v-html="claim.review" /></span>
          </div>
        </div>
        <div class="media-left is-hidden-mobile">
          <figure
            v-if="claim.rating.media"
            class="image is-96x96">
            <img
              :src="claim.rating.media.source_url+'?resize:fill:100:100:0/gravity:sm'"
              :alt="claim.rating.media.altText">
          </figure>
        </div>
      </div>
    </div>
    <article
      class="has-text-justify claim-desc-font"
      v-html="claim.description" />
  </div>
</template>
<style>

.field-label{
    margin-right: 0rem;
    flex-grow: 0;
}
</style>

<script>
export default {
  props: {
    claim: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    widgetBackground() {
      const backgrounglist = ['false-background', 'misleading-background', 'unverified-background', 'partly-true-background', 'true-background'];
      return backgrounglist[parseInt(this.claim.rating.numeric_value, 10) - 1];
    }
  }
};
</script>
