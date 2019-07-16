<!-- Popular articles -->
<template>
  <div>
    <div class="box has-background-dark padding-half">
      <p class="is-size-5 has-text-white-ter">{{ $t('header.recent_videos') }}</p>
    </div>
    <PopularArticlePreview
      v-for="(p, index) in popular"
      :key="'popular' + index"
      :rank="'0' + (index + 1)"
      :story="p"
    />
  </div>
</template>

<script>
import PopularArticlePreview from '@/components/PopularArticlePreview';

export default {
  components: {
    PopularArticlePreview
  },
  data() {
    return {
      popular: this.$store.getters.getPopular
    };
  }
};
</script>
