<template>
  <div class="main-content">
    <div v-if="post && post.length">
      <div class="columns">
        <div class="column is-8">
          <StoryHead :story="post[0]"/>
          <div>
            <article>
              <div class="has-text-justify is-size-5 mallanna-font" v-html="post[0].content" />
            </article>
          </div>
          <StoryFooter 
            :tags="post[0].tags"
            :authors="post[0].authors"
          />
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
      post: null,
      metaData: null
    };
  },

  validate({ params }) {
    return params.slug;
  },

  async asyncData(params) {
    const Post = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&slug=${params.params.slug}`))
      .then(response => response.data)
      .catch(err => console.log(err));
    return {
      post: Post,
      metaData: {
        title: Post[0].title,
        meta: [
          { hid: 'og:title', name: 'og:title', content: Post[0].title },
          { hid: 'og:image', name: 'og:image', content: Post[0].featured_media },
        ]
      }
    };
  },
  head() {
    if (this.post[0].excerpt) { this.metaData.meta.push({ hid: 'og:description', name: 'og:description', content: this.post[0].excerpt }); }
    return this.metaData;
  }
};
</script>
