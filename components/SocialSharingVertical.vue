<template>
  <div class="sticky-horizontal-container">
    <div>
      <Bookmark
        v-if="userModule"
        :type="type"
        :id="id"
      />
    </div>
    <div>
      <a
        :href="'https://www.facebook.com/sharer/sharer.php?u='+ encodeURI(organisation.site_address + url) + '&quote='+quote"
        class="button is-white"
        target="_blank" >
        <span class="icon is-size-4 facebook-color">
          <i class="mdi mdi-facebook"/>
        </span>
      </a>
    </div>
    <div>
      <a
        :href="'https://twitter.com/share?text=' + quote + '&url=' + encodeURI(organisation.site_address + url)"
        target="_blank"
        class="button is-white">
        <span class="icon is-size-4 twitter-color">
          <i class="mdi mdi-twitter"/>
        </span>
      </a>
    </div>
    <div>
      <a
        :href="'https://api.whatsapp.com/send?text='+ quote + ' ' + encodeURI(organisation.site_address + url)"
        target="_blank"
        class="button is-white">
        <span class="icon is-size-4 whatsapp-color">
          <i class="mdi mdi-whatsapp"/>
        </span>
      </a>
    </div>
  </div>
</template>
<style scoped>
  .sticky-horizontal-container {
    position: fixed;
    top: 40%;
    left: 1rem;
    height: 13rem;
    z-index: 9999;
  }
</style>
<script>
import Bookmark from '~/components/Bookmark.vue';

export default {
  components: {
    Bookmark
  },
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
      organisation: this.$store.getters.getOrganisation,
      userModule: process.env.userModule
    };
  }
};
</script>
