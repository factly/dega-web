<template>
  <nuxt />
</template>

<script>
export default {
  data() {
    return {
      organization: Object
    };
  },
  created() {
    this.organization = this.$store.getters.getOrganization;
  },
  head() {
    return {
      title: this.organization.name,
      link: [
        { rel: 'shortcut icon', type: 'image/png', href: this.organization.mediaLogo ? this.organization.mediaLogo.url : null },
        { rel: 'icon', type: 'image/x-icon', href: this.organization.mediaFavicon ? this.organization.mediaFavicon.url : null },
      ]
    };
  }
};
</script>
