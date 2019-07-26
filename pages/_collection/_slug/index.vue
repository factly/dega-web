<template>
  <div class="main-content">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryPreview
            v-for="(p, index) in story"
            :key="index"
            :story="p"
          />
        </div>
        <div
          v-if="story.length > 0 && (!pagination.posts.hasNext && !pagination.factchecks.hasNext)"
          class="margin-top-2">
          <h3 class="is-size-4 has-text-centered">No more stories</h3>
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

export default {
  components: {
    StoryPreview
  },
  validate({ params, error }) {
    const collectionList = ['category', 'author', 'tag'];
    if (collectionList.includes(params.collection)) return true;
    return error({ code: 404, message: 'You have been lost', homepage: true });
  },
  data() {
    return {
      story: [],
      pagination: {
        posts: {},
        factchecks: {}
      }
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && (this.pagination.posts.hasNext || this.pagination.factchecks.hasNext)) {
          console.log('We are calling');
          this.getStories();
        }
      };
    },
    async getStories() {
      let next = this.pagination.posts.hasNext ? this.pagination.posts.next : '';
      let posts = [];
      let factchecks = [];
      await axios
        .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&${this.$route.params.collection}=${this.$route.params.slug}&sortBy=publishedDate&sortAsc=false&next=${next}&limit=5`))
        .then((response) => {
          posts = response.data;
        })
        .catch(err => console.log(err));
      next = this.pagination.factchecks.hasNext ? this.pagination.factchecks.next : '';
      await axios
        .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&${this.$route.params.collection === 'author' ? 'user' : this.$route.params.collection}=${this.$route.params.slug}&sortBy=publishedDate&sortAsc=false&next=${next}&limit=5`))
        .then((response) => {
          factchecks = response.data;
        })
        .catch(err => console.log(err));
      this.pagination = {
        posts: posts.paging,
        factchecks: factchecks.paging
      };
      const stories = (posts.data).concat(factchecks.data);
      stories.sort((a, b) => {
        if (a.published_date > b.published_date) return -1;
        if (b.published_date > a.published_date) return 1;
        return 0;
      });
      this.story = (this.story).concat(stories);
    }
  },
  async asyncData({ params, error }) {
    const posts = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&${params.collection}=${params.slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const factchecks = await axios
      .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&${params.collection === 'author' ? 'user' : params.collection}=${params.slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const pagination = {
      factchecks: factchecks.paging,
      posts: posts.paging
    };
    const story = (posts.data || []).concat(factchecks.data || []);
    story.sort((a, b) => {
      if (a.published_date > b.published_date) return -1;
      if (b.published_date > a.published_date) return 1;
      return 0;
    });
    if (story.length === 0) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }
    return { story, pagination };
  },
  head() {
    const metadata = {};
    const { story } = this;
    if (story && story.length > 0) {
      metadata.title = story[0].authors[0].display_name;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: story[0].authors[0].display_name },
        { hid: 'og:image', name: 'og:image', content: story[0].authors[0].profile_picture ? story[0].authors[0].profile_picture : null },
        { hid: 'og:description', name: 'og:description', content: story[0].authors[0].description ? story[0].authors[0].description : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.site_title; }

    return metadata;
  }
};
</script>
