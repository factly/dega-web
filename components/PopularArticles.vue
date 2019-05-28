<!-- Popular articles -->
<template>
  <div style="padding: 2rem; padding-top: 0rem">
    <div>
      <p
        class="title is-4"
        style="padding-bottom: 2rem;">Popular Articles</p>
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
