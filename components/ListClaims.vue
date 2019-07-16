<template>
  <div>
    <article class="message is-primary">
      <div class="message-header">
        <p>{{ $t('factcheck.list_of_claims') }}</p>
      </div>
      <div
        class="message-body"
        style="padding: 0rem;">
        <div class="panel">
          <a
            v-for="(claim, index) in factcheck[0].claims"
            :key="index"
            :href="'#claim'+(index+1)"
            class="panel-block"
            style="text-decoration: none">
            <h2 class="claims-text">#{{ index+1 }}. {{ claim.claim }}</h2>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    factcheck: {
      type: Array,
      required: true,
      default: null
    }
  }
};
</script>
