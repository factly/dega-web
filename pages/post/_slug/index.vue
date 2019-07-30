<template>
  <div class="main-content">
    <div

      class="columns">
      <div class="column is-8">
        <div
          v-for="(p, i) in posts"
          ref="posts"
          :key="i">
          <div>
            <StoryHead :story="p"/>
          </div>
          <div class="margin-top-2">
            <article
              v-twitter-widgets
              class="has-text-justify post-content-font"
              v-html="p.content" />
          </div>
          <div class="margin-top-2">
            <StoryFooter
              :tags="p.tags"
              :authors="p.authors"
              :updates="p.updates"
            />
          </div>
          <hr >
        </div>
      </div>
      <div class="column is-4">
        <div class="is-hidden-mobile">
          <PopularArticles />
        </div>
      </div>
    </div>
    <SocialSharingVertical
      :url="'/post/'+posts[on].slug"
      :quote="posts[on].title"
      :story="posts[on]"
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
      posts: [],
      on: 0
    };
  },
  validate({ params }) {
    return params.slug;
  },
  watch: {
    on() {
      document.title = this.posts[this.on].title;
      // eslint-disable-next-line no-restricted-globals
      history.pushState({}, null, `/post/${this.posts[this.on].slug}`);
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && this.posts.length === 1) {
          this.getLatestStories();
        }

        const postList = this.$refs.posts;
        for (let i = 0; i < postList.length; i += 1) {
          const top = postList[i].offsetTop;
          const bottom = top + postList[i].clientHeight;
          const scrolling = document.documentElement.scrollTop + window.innerHeight;
          if (scrolling >= top && bottom < scrolling) {
            if (this.on !== i) this.on = i;
          }
        }
      };
    },
    async getLatestStories() {
      await axios
        .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false&limit=5`))
        .then((response) => {
          const rawLatestPosts = response.data.data;
          const latestPosts = rawLatestPosts.filter(value =>
            // eslint-disable-next-line no-underscore-dangle
            value._id !== this.posts[0]._id
          );
          this.posts = this.posts.concat(latestPosts);
        })
        .catch(err => console.log(err));
    }
  },
  async asyncData({ params, error }) {
    const post = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&slug=${params.slug}`))
      .then(response => response.data.data)
      .catch(err => console.log(err));
    if (post.length === 0) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }
    return { posts: post };
  },
  head() {
    const metadata = {};
    const { posts } = this;
    if (posts.length > 0) {
      metadata.title = posts[0].title;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: posts[0].title },
        { hid: 'og:image', name: 'og:image', content: posts[0].featured_media },
        { hid: 'og:description', name: 'og:description', content: posts[0].excerpt ? posts[0].excerpt : null },
      ];
      metadata.script = [
        { src: 'https://platform.twitter.com/widgets.js', async: true },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.site_title; }

    return metadata;
  }
};
</script>
