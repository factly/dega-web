<template>
  <div class="main-content">
    <div class="is-vcentered middle-div">
      <figure class="image container is-96x96">
        <img :src="organisation.mobile_icon_url">
      </figure>
      <div class="has-text-centered margin-top-2">
        <p class="is-size-4 has-text-grey">
          <span class="icon">
            <i class="mdi mdi-loading mdi-spin"/>
          </span>
          <span>
            Fetching data...
          </span>
        </p>
      </div>
    </div>
    <div>
      <p class="is-size-6 bottom-right">Something wrong, <a
        href="/"
        class="has-text-link">Click here</a></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      organisation: Object
    };
  },
  created() {
    this.organisation = this.$store.getters.getOrganisation;
  }
};
</script>
