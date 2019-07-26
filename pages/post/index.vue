<template>
  <div class="main-content">
    <Hero :story="posts[0]" />
    <hr class="spacer is-1-5 is-hidden-mobile">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryPreview
            v-for="(p, index) in posts.slice(1)"
            :key="index"
            :story="p"
          />
        </div>
        <div
          v-if="posts.length > 0 && !pagination.hasNext"
          class="margin-top-2">
          <h3 class="is-size-4 has-text-centered">No more posts</h3>
        </div>
      </div>
      <div class="column is-4">
        <div class="is-hidden-mobile">
          <PopularArticles />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';
import Hero from '@/components/Hero';

export default {
  components: {
    StoryPreview,
    Hero
  },
  data() {
    return {
      posts: [],
      pagination: {}
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && this.pagination.hasNext) {
          this.getPosts();
        }
      };
    },
    getPosts() {
      const next = this.pagination.next ? this.pagination.next : '';
      axios
        .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false&next=${next}&limit=5`))
        .then((response) => {
          this.posts = (this.posts || []).concat(response.data.data || []);
          this.pagination = response.data.paging;
        })
        .catch(err => console.log(err));
    }
  },
  async asyncData({ error }) {
    const rawData = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&sortBy=publishedDate&sortAsc=false&limit=5`))
      .then(response => response.data)
      .catch(err => console.log(err));
    if (rawData.data.length === 0) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }
    return {
      posts: rawData.data,
      pagination: rawData.paging
    };
  },
  head() {
    return {
      title: 'Stories',
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'Stories' },
      ]
    };
  }
};
</script>
