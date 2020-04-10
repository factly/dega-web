<template>
  <div class="sticky-horizontal-container">
    <div>
      <a
        :href="'https://www.facebook.com/sharer/sharer.php?u='+ encodeURI(organization.site_address + url) + '&quote='+quote"
        class="button is-white"
        target="_blank" >
        <span class="icon is-size-4 facebook-color">
          <i class="mdi mdi-facebook"/>
        </span>
      </a>
    </div>
    <div>
      <a
        :href="'https://twitter.com/share?text=' + quote + '&url=' + encodeURI(organization.site_address + url)"
        target="_blank"
        class="button is-white">
        <span class="icon is-size-4 twitter-color">
          <i class="mdi mdi-twitter"/>
        </span>
      </a>
    </div>
    <div>
      <a
        :href="'https://api.whatsapp.com/send?text='+ quote + ' ' + encodeURI(organization.site_address + url)"
        target="_blank"
        class="button is-white">
        <span class="icon is-size-4 whatsapp-color">
          <i class="mdi mdi-whatsapp"/>
        </span>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    quote: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      organization: this.$store.getters.getOrganization
    };
  }
};
</script>
