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
          this.getStories();
        }
      };
    },
    async getStories() {
      let posts = [];
      let factchecks = [];

      if (this.pagination.posts.hasNext) {
        await axios
          .get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&${this.$route.params.collection}=${this.$route.params.slug}&sortBy=publishedDate&sortAsc=false&next=${this.pagination.posts.next}&limit=5`))
          .then((response) => {
            posts = response.data.data;
            this.pagination.posts = response.data.paging;
          })
          .catch(err => console.log(err));
      }

      if (this.pagination.factchecks.hasNext) {
        await axios
          .get(encodeURI(`${process.env.apiUri}/api/v1/factchecks/?client=${process.env.clientId}&${this.$route.params.collection === 'author' ? 'user' : this.$route.params.collection}=${this.$route.params.slug}&sortBy=publishedDate&sortAsc=false&next=${this.pagination.factchecks.next}&limit=5`))
          .then((response) => {
            factchecks = response.data.data;
            this.pagination.factchecks = response.data.paging;
          })
          .catch(err => console.log(err));
      }
      const stories = (posts).concat(factchecks);
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
      const collectionPluralList = {
        author: 'authors',
        category: 'categories',
        tag: 'tags'
      };
      const rawStoryData = story[0][collectionPluralList[this.$route.params.collection]].find(a => a.slug === this.$route.params.slug);
      metadata.title = this.$route.params.collection === 'author' ? rawStoryData.display_name : rawStoryData.name;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: this.$route.params.collection === 'author' ? rawStoryData.display_name : rawStoryData.name },
        { hid: 'og:image', name: 'og:image', content: rawStoryData.profile_picture ? rawStoryData.profile_picture : null },
        { hid: 'og:description', name: 'og:description', content: rawStoryData.description ? rawStoryData.description : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.site_title; }

    return metadata;
  }
};
</script>
