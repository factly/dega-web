<template>
  <div class="main-content">
    <div class="middle-div">
      <div class="has-text-centered">
        <div>
          <p class="title is-1">{{ error.code }}</p>
          <p class="subtitle is-4">{{ error.message }}</p>
          <p
            v-if="error.homepage"
            class="subtitle is-6"><a href="/">Go back to home page</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default() {
        return {
          code: '404',
          message: 'You have been lost',
          homepage: true
        };
      }
    }
  }
};
</script>
