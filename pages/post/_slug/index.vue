<template>
  <div>
    <div class="columns">
      <div class="column is-8">
        <div v-if="post && post.length">
          <section class="hero-title">
            <StoryHead :story="post[0]"/>
          </section>
          <section class="section">
            <div>
              <article
                class="post"
                v-html="post[0].content">
                {{ post[0].content }}
              </article>
            </div>
          </section>

        </div>
        <div
          v-else
          class="subtitle is-6 is-uppercase has-text-centered">
          Dega API is not responding.<br> Please contact the administrator.
        </div>
      </div>
      <div class="column is-4">
        <PopularArticles/>
      </div>
    </div>
    <SocialSharingVertical
      :url="$nuxt.$route.path"
      :quote="post[0].title"
    />
  </div>
</template>
<script>
import axios from 'axios';
import StoryHead from '@/components/StoryHead';

export default {
  components: {
    StoryHead
  },
  data() {
    return {
      post: null
    };
  },

  validate({ params }) {
    return params.slug;
  },

  async asyncData(params) {
    const post = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&slug=${params.params.slug}`))
      .then(response => response.data)
      .catch(err => console.log(err));
    return {
      post
    };
  },
  head() {
    return {
      title: this.post[0].title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.post[0].title },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
        { hid: 'og:image', name: 'og:image', content: this.post[0].featured_media },
      ]
    };
  }
};
</script>
