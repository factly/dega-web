<template>
  <div class="main-content">
    <div
      v-for="(p, i) in posts"
      ref="posts"
      :key="i"
      class="columns">
      <div class="column is-8">
        <div>
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
              :updates="p.updates"
            />
          </div>
          <hr >
        </div>
      </div>
      <div class="column is-4">
        <div>
          <div v-if="p.categories.length > 0">
            <RelatedArticle
              v-for="(category, index) in p.categories"
              :key="'category-related'+index"
              :slug="category.slug+'-'+category._id"
              :header="`More in ${category.name}`"
              :id="p._id"
              class="margin-horizontal-1"
              collection="category"
            />
          </div>
          <div v-if="p.degaUsers.length > 0">
            <RelatedArticle
              v-for="(user, index) in p.users"
              :key="'user-related'+index"
              :slug="user.slug+'-'+user._id"
              :header="`More from ${user.display_name}`"
              :id="p._id"
              class="margin-horizontal-1"
              collection="user"
            />
          </div>
        </div>
      </div>
    </div>
    <SocialSharingVertical
      :url="'/post/'+posts[on]._id"
      :quote="posts[on].title"
      :id="posts[on]._id"
      type="post"
    />
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import gql from 'graphql-tag';
import StoryHead from '@/components/StoryHead';
import StoryFooter from '@/components/StoryFooter';
import RelatedArticle from '@/components/RelatedArticle';
import { postQuery, singlePageQuery as postsQuery } from '../../../graphql/query/posts';

export default {
  components: {
    StoryHead,
    StoryFooter,
    RelatedArticle
  },
  data() {
    return {
      posts: [],
      on: 0,
      total: 0,
      pagination: {
        pageNext: 2
      }
    };
  },
  validate({ params }) {
    return params.slug;
  },
  watch: {
    on() {
      document.title = `${this.posts[this.on].title} - ${this.$store.getters.getOrganization.site_title}`;
      // eslint-disable-next-line no-restricted-globals
      history.pushState({}, null, `/post/${this.posts[this.on].slug}-${this.posts[this.on]._id}`);
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const scrolling = document.documentElement.scrollTop + window.innerHeight;
        const bottomOfWindow = scrolling + 50 >= document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if (this.posts.length <= this.total) {
            this.getLatestStories();
          }
        }

        const postList = this.$refs.posts;
        for (let i = 0; i < postList.length; i += 1) {
          const top = postList[i].offsetTop;
          const bottom = top + postList[i].clientHeight;
          if (scrolling >= top && scrolling < bottom) {
            if (this.on !== i) {
              this.on = i;
            }
          }
        }
      };
    },
    async getLatestStories() {
      /* fectching posts */
      const latestPost = await this.$apollo.query({
        query: gql(
          String.raw`
            query (
              $limit: Int
              $page: Int
              $category: [String!]
              $tag: [String!]
              $user: [String!]
              $sortBy: String
              $sortOrder: String 
            ) {
                ${postsQuery}
              }
          `),
        variables: {
          limit: 1,
          page: this.pagination.pageNext,
          sortBy: 'published_date',
          sort: 'DES'
        }
      })
        .then(p => p.data.posts)
        .catch(() => {
          this.error({ code: 500, message: 'Something went wrong', homepage: true });
        });

      this.pagination.pageNext = this.pagination.pageNext + 1;
      this.total = latestPost.total;

      if (this.posts.find(value => value._id === latestPost.nodes[0]._id)) {
        console.log('Already there');
      } else {
        this.posts = this.posts.concat(latestPost.nodes);
      }
    }
  },
  async asyncData({
    app, params, error
  }) {
    /* fectching post by id */
    const post = await app.apolloProvider.defaultClient.query({
      query: gql(String.raw`${postQuery}`),
      variables: {
        id: params.slug.split('-').pop()
      }
    })
      .then(p => p.data.post)
      .catch(() => {
        error({ code: 500, message: 'Something went wrong', homepage: true });
      });

    if (!post) {
      error({ code: 404, message: 'page not found', homepage: true });
    }

    return {
      posts: [post],
      total: 1
    };
  },
  head() {
    const metadata = {};
    const { posts } = this;
    if (posts.length > 0) {
      metadata.title = `${posts[0].title} - ${this.$store.getters.getOrganization.site_title}`;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: `${posts[0].title} - ${this.$store.getters.getOrganization.site_title}` },
        { hid: 'og:image', name: 'og:image', content: posts[0].media ? posts[0].media.source_url : null },
        { hid: 'og:description', name: 'og:description', content: posts[0].excerpt ? posts[0].excerpt : null },
      ];
      metadata.script = [
        { src: 'https://platform.twitter.com/widgets.js', async: true },
      ];
    } else { metadata.title = this.$store.getters.getOrganization.site_title; }

    return metadata;
  }
};
</script>
