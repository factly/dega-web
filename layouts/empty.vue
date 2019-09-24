<template>
  <nuxt />
</template>

<script>
export default {
  data() {
    return {
      organisation: Object
    };
  },
  created() {
    this.organisation = this.$store.getters.getOrganisation;
  },
  head() {
    return {
      title: this.organisation.name,
      link: [
        { rel: 'shortcut icon', type: 'image/png', href: this.organisation.mediaLogo ? this.organisation.mediaLogo.sourceURL : null },
        { rel: 'icon', type: 'image/x-icon', href: this.organisation.mediaFavicon ? this.organisation.mediaFavicon.sourceURL : null },
      ]
    };
  }
};
</script>
