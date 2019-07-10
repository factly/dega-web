<template>
  <div class="sticky-horizontal-container share-box">
    <Bookmark :story=story style="text-align:center;padding-bottom:5px"/>
    <div class="share-icon facebook-background is-vcentered">
      <a
        :href="'https://www.facebook.com/sharer/sharer.php?u='+ encodeURI(organisation.site_address + url) + '&quote='+quote"
        target="_blank" >
        <span class="icon is-size-3 white-color">
          <i class="mdi mdi-facebook white-color"></i>
        </span>
      </a>
    </div>
    <div class="share-icon twitter-background is-vcentered">
      <a
        :href="'https://twitter.com/share?text=' + quote + '&url=' + encodeURI(organisation.site_address + url)"
        target="_blank">
        <span class="icon is-size-3 white-color">
          <i class="mdi mdi-twitter"></i>
        </span>
      </a>
    </div>
    <div class="share-icon whatsapp-background is-vcentered">
      <a
        :href="'https://api.whatsapp.com/send?text='+ quote + ' ' + encodeURI(organisation.site_address + url)"
        target="_blank">
        <span class="icon is-size-3 white-color">
          <i class="mdi mdi-whatsapp"></i>
        </span>
      </a>
    </div>
  </div>
</template>
<style scoped>
  .share-icon {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 1.25rem;
  }
  .share-box {
    display: block;
    padding: 1.5rem;
  }
  .sticky-horizontal-container {
    position: fixed;
    top: 40%;
    left: 0px;
    height: auto;
    z-index: 9999;
  }
</style>
<script>
import Bookmark from '~/components/Bookmark.vue';
export default {
  components:{
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
    story: {
      type: Object,
      required: true,
      default: null
    }
  },
  data() {
    return {
      organisation: this.$store.getters.getOrganisation
    };
  }
};
</script>
