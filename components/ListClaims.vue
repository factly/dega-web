<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ $t('factcheck.list_of_claims') }}</p>
      </header>
      <div class="card-content">
        <div
          v-for="(c, index) in claims"
          :key="'claim-a-'+index"
          class="content">
          <div class="media">
            <div class="media-left">
              <figure
                v-if="c.rating.media"
                class="image figure-width-5 is-64x64">
                <a :href="'#claim'+(index)">
                  <img
                    :src="c.rating.media.sourceURL+'?resize:fill:100:100:0/gravity:sm'"
                    :alt="c.rating.media.altText">
                </a>
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-6">
                <a
                  :href="'#claim'+(index)"
                  class="has-text-black-bis">{{ c.claim }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    claims: {
      type: Array,
      required: true
    }
  }
};
</script>
