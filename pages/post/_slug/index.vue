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
              :slug="category.slug"
              :header="`More in ${category.name}`"
              :id="p.id"
              class="margin-horizontal-1"
              collection="category"
            />
          </div>
          <div v-if="p.users.length > 0">
            <RelatedArticle
              v-for="(user, index) in p.users"
              :key="'user-related'+index"
              :slug="user.slug"
              :header="`More from ${user.displayName}`"
              :id="p.id"
              class="margin-horizontal-1"
              collection="user"
            />
          </div>
        </div>
      </div>
    </div>
    <SocialSharingVertical
      :url="'/post/'+posts[on].slug"
      :quote="posts[on].title"
      :id="posts[on].id"
      type="post"
    />
  </div>
</template>

<script>
import StoryHead from '@/components/StoryHead';
import StoryFooter from '@/components/StoryFooter';
import RelatedArticle from '@/components/RelatedArticle';

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
      pagination: {
        hasNext: true,
        next: ''
      }
    };
  },
  validate({ params }) {
    return params.slug;
  },
  watch: {
    on() {
      document.title = `${this.posts[this.on].title} - ${this.$store.getters.getOrganisation.siteTitle}`;
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
        const scrolling = document.documentElement.scrollTop + window.innerHeight;
        const bottomOfWindow = scrolling + 50 >= document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if (this.pagination.hasNext) this.getLatestStories();
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
      await this.$axios
        .$get(`api/v1/posts/?sortBy=publishedDate&sortAsc=false&limit=1&next=${this.pagination.next}`)
        .then((response) => {
          const latestPost = response.data;
          this.pagination = response.paging;
          // eslint-disable-next-line no-underscore-dangle
          if (this.posts.find(value => value.id === latestPost[0].id)) {
            console.log('Already there');
            // this.getLatestStories();
          } else this.posts = this.posts.concat(latestPost);
        });
    }
  },
  async asyncData({
    params, error, $axios
  }) {
    return $axios.$get(`/api/v1/posts/${params.slug}`)
      .then(post => ({ posts: [post.data] || [] }))
      .catch(() => error({ code: 404, message: 'You have been lost', homepage: true }));
  },
  head() {
    const metadata = {};
    const { posts } = this;
    if (posts.length > 0) {
      metadata.title = `${posts[0].title} - ${this.$store.getters.getOrganisation.siteTitle}`;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: `${posts[0].title} - ${this.$store.getters.getOrganisation.siteTitle}` },
        { hid: 'og:image', name: 'og:image', content: posts[0].media ? posts[0].media.sourceURL : null },
        { hid: 'og:description', name: 'og:description', content: posts[0].excerpt ? posts[0].excerpt : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.siteTitle; }

    return metadata;
  }
};
</script>
