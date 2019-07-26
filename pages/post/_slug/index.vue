<template>
  <div class="main-content">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryHead :story="post[0]"/>
        </div>
        <div class="margin-top-2">
          <article
            v-twitter-widgets
            class="has-text-justify post-content-font"
            v-html="post[0].content" />
        </div>
        <div class="margin-top-2">
          <StoryFooter
            :tags="post[0].tags"
            :authors="post[0].authors"
            :updates="post[0].updates"
          />
        </div>
      </div>
      <div class="column is-4">
        <div class="is-hidden-mobile">
          <PopularArticles />
        </div>
      </div>
    </div>
    <SocialSharingVertical
      :url="$nuxt.$route.path"
      :quote="post[0].title"
      :story="post[0]"
    />
  </div>
</template>

<script>
import axios from 'axios';
import StoryHead from '@/components/StoryHead';
import StoryFooter from '@/components/StoryFooter';

export default {
  components: {
    StoryHead,
    StoryFooter
  },
  data() {
    return {
      post: null
    };
  },

  validate({ params }) {
    return params.slug;
  },

  async asyncData({ params, error }) {
    const post = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&slug=${params.slug}`))
      .then(response => response.data.data)
      .catch(err => console.log(err));
    if (post.length === 0) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }
    return { post };
  },
  head() {
    const metadata = {};
    const { post } = this;
    if (post && post.length === 1) {
      metadata.title = post[0].title;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: post[0].title },
        { hid: 'og:image', name: 'og:image', content: post[0].featured_media },
        { hid: 'og:description', name: 'og:description', content: post[0].excerpt ? post[0].excerpt : null },
      ];
      metadata.script = [
        { src: 'https://platform.twitter.com/widgets.js', async: true },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.site_title; }

    return metadata;
  }
};
</script>
