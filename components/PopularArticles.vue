<!-- Popular articles -->
<template>
  <div style="padding: 2rem; padding-top: 0rem">
    <div
      class="has-background-dark"
      style="padding: 0.75rem; margin-bottom: 1rem;">
      <p class="title is-5 has-text-white-ter">Popular Articles</p>
    </div>
    <div
      v-for="(p, index) in popular"
      :key="'popular' + index"
    >
      <PopularArticlePreview
        :rank="'0' + (index + 1)"
        :story="p"
      />
    </div>
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
