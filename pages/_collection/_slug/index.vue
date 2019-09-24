<template>
  <div class="main-content">
    <div class="columns">
      <div class="column is-8">
        <div>
          <StoryPreview
            v-for="(p, index) in stories"
            :key="index"
            :story="p"
          />
        </div>
        <div
          v-if="stories.length > 0 && (!pagination.posts.hasNext && !pagination.factchecks.hasNext)"
          class="margin-top-2">
          <h3 class="is-size-4 has-text-centered">No more stories</h3>
        </div>
      </div>
      <div class="column is-4">
        <div class="is-hidden-mobile">
          <RelatedArticle
            slug="video"
            header="Recent Videos"
            collection="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';
import RelatedArticle from '@/components/RelatedArticle';

export default {
  components: {
    StoryPreview,
    RelatedArticle
  },
  validate({ params, error }) {
    const collectionList = ['category', 'user', 'tag'];
    if (collectionList.includes(params.collection)) return true;
    return error({ code: 404, message: 'You have been lost', homepage: true });
  },
  data() {
    return {
      stories: [],
      collection: null,
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
          .get(encodeURI(`${process.env.API_URI}/api/v1/posts/?client=${process.env.CLIENT_ID}&${this.$route.params.collection}=${this.$route.params.slug}&sortBy=publishedDate&sortAsc=false&next=${this.pagination.posts.next}&limit=5`))
          .then((response) => {
            posts = response.data.data;
            this.pagination.posts = response.data.paging;
          })
          .catch(err => console.log(err));
      }

      if (this.pagination.factchecks.hasNext) {
        await axios
          .get(encodeURI(`${process.env.API_URI}/api/v1/factchecks/?client=${process.env.CLIENT_ID}&${this.$route.params.collection}=${this.$route.params.slug}&sortBy=publishedDate&sortAsc=false&next=${this.pagination.factchecks.next}&limit=5`))
          .then((response) => {
            factchecks = response.data.data;
            this.pagination.factchecks = response.data.paging;
          })
          .catch(err => console.log(err));
      }
      const stories = (posts).concat(factchecks);
      stories.sort((a, b) => {
        if (a.publishedDate > b.publishedDate) return -1;
        if (b.publishedDate > a.publishedDate) return 1;
        return 0;
      });

      this.stories = (this.stories).concat(stories);
    }
  },
  async asyncData({ params, error }) {
    /* stories fetching */
    const posts = await axios
      .get(encodeURI(`${process.env.API_URI}/api/v1/posts/?client=${process.env.CLIENT_ID}&${params.collection}=${params.slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const factchecks = await axios
      .get(encodeURI(`${process.env.API_URI}/api/v1/factchecks/?client=${process.env.CLIENT_ID}&${params.collection}=${params.slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
      .then(response => response.data)
      .catch(err => console.log(err));
    const pagination = {
      factchecks: factchecks.paging,
      posts: posts.paging
    };
    const stories = (posts.data ? posts.data : []).concat(factchecks.data ? factchecks.data : []);
    stories.sort((a, b) => {
      if (a.publishedDate > b.publishedDate) return -1;
      if (b.publishedDate > a.publishedDate) return 1;
      return 0;
    });

    /* collection fetching */
    const collectionPluralList = {
      user: 'users',
      category: 'categories',
      tag: 'tags'
    };

    const collection = await axios
      .get(encodeURI(`${process.env.API_URI}/api/v1/${collectionPluralList[params.collection]}/${params.slug}/?client=${process.env.CLIENT_ID}`))
      .then(response => response.data.data)
      .catch(() => error({ code: 404, message: 'You have been lost', homepage: true }));

    if (!collection) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }

    return { stories, pagination, collection };
  },
  head() {
    const metadata = {};
    const { collection } = this;
    if (collection) {
      const title = `${collection.name ? collection.name : collection.displayName} - ${this.$route.params.collection.charAt(0).toUpperCase() + this.$route.params.collection.slice(1)} - ${this.$store.getters.getOrganisation.siteTitle}`;
      metadata.title = title;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:image', name: 'og:image', content: collection.media ? collection.media.sourceURL : null },
        { hid: 'og:description', name: 'og:description', content: collection.description ? collection.description : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.siteTitle; }

    return metadata;
  }
};
</script>
