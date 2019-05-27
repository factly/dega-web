<!-- Popular articles -->
<template>
  <div style="padding: 2rem; padding-top: 0rem">
    <div>
      <p
        class="title is-4"
        style="padding-bottom: 2rem;">Popular Articles</p>
    </div>
    <div>
      <PopularArticlePreview rank="01"/>
      <PopularArticlePreview rank="02"/>
      <PopularArticlePreview rank="03"/>
      <PopularArticlePreview rank="04"/>
      <PopularArticlePreview rank="05"/>
    </div>
  </div>
</template>
<script>
import PopularArticlePreview from '@/components/PopularArticlePreview';

export default {
  components: {
    PopularArticlePreview
  }
};
</script>
