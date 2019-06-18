<template>
  <div>
    <div class="box" :class="widgetBackground">
      <div class="media">
        <div class="media-content">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <figure class="image is-24x24">
                <img
                  :src="claim.claimant.image_url"
                  alt="Placeholder image">
              </figure>
            </div>
            <div class="control">
              <p class="is-size-5 has-text-weight-bold">{{ claim.claimant.name }}</p>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label"><span class="has-text-weight-bold">Claim:&nbsp;</span></div>
            <div class="field-body"><span class="is-size-6">{{ claim.claim }}</span></div>
          </div>
          <div class="is-hidden-tablet">
            <figure class="image is-128x128">
              <img
                :src="claim.rating.icon_url"
                alt="Placeholder image">
            </figure>
          </div>
          <div class="field is-horizontal">
              <div class="field-label"><p class="has-text-weight-bold">Fact:&nbsp;</p></div>
              <div class="field-body"><span class="has-text-weight-bold" v-html="claim.review"></span></div>
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
    <article>
      <div v-html="claim.description" class="has-text-justify is-size-5 mallanna-font" />
    </article>
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
      const backgrounglist = ['false-background', 'misleading-background', 'unverified-background', 'partly-true-background', 'true-background']
      return backgrounglist[parseInt(this.claim.rating.numeric_value, 10) - 1]
    }
  },
};
</script>
