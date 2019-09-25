<template>
  <div class="main-content">
    <div class="columns">
      <div class="column is-8">
        <div>
          <CollectionHeader
            :collection = "this.$route.params.collection"
            :slug = "this.$route.params.slug"
            :meta = "this.$route.params.meta"
            :heading = "this.$route.params.collection === 'user' ? collection.displayName : collection.name"
          />
        </div>
        <div class="margin-top-2">
          <StoryPreview
            v-for="(p, index) in stories"
            :key="index"
            :story="p"
          />
        </div>
        <div
          v-if="stories.length > 0 && !pagination.hasNext"
          class="margin-top-2">
          <h3 class="is-size-4 has-text-centered">No more stories</h3>
        </div>
        <div
          v-if="stories.length === 0 && collection"
          class="margin-top-2">
          <h3 class="is-size-4 has-text-centered">No stories</h3>
        </div>
      </div>
      <div class="column is-4">
        <div v-if="this.$route.params.collection === 'user'">
          <UserCard
            :collection="collection"
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
import CollectionHeader from '@/components/CollectionHeader';
import UserCard from '@/components/UserCard';

export default {
  components: {
    StoryPreview,
    RelatedArticle,
    CollectionHeader,
    UserCard
  },
  validate({ params, error }) {
    const collectionList = ['category', 'user', 'tag'];
    const metaList = ['factchecks', 'posts'];
    if (collectionList.includes(params.collection)) return true;
    if (metaList.includes(params.meta)) return true;
    return error({ code: 404, message: 'You have been lost', homepage: true });
  },
  data() {
    return {
      stories: [],
      collection: null,
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
        if (bottomOfWindow && (this.pagination.hasNext)) {
          this.getStories();
        }
      };
    },
    async getStories() {
      if (this.pagination.hasNext) {
        await axios
          .get(encodeURI(`${process.env.API_URI}/api/v1/${this.$route.params.meta}/?client=${process.env.CLIENT_ID}&${this.$route.params.collection}=${this.$route.params.slug}&sortBy=publishedDate&sortAsc=false&next=${this.pagination.next}&limit=5`))
          .then((response) => {
            this.stories = response.data.data;
            this.pagination = response.data.paging;
          })
          .catch(err => console.log(err));
      }
    }
  },
  async asyncData({ params, error }) {
    /* stories fetching */
    const stories = await axios
      .get(encodeURI(`${process.env.API_URI}/api/v1/${params.meta}/?client=${process.env.CLIENT_ID}&${params.collection}=${params.slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
      .then(response => response.data)
      .catch(err => console.log(err));

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

    return { stories: stories.data, pagination: stories.paging, collection };
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
