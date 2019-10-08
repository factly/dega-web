<template>
  <div class="main-content">
    <div class="columns">
      <div class="column is-8">
        <div>
          <CollectionHeader
            :collection = "this.$route.params.collection"
            :slug = "this.$route.params.slug"
            :heading = "this.$route.params.collection === 'user' ? collection.displayName : collection.name"
            meta = "all"
          />
        </div>
        <div class="margin-top-2">
          <StoryPreview
            v-for="(p, index) in stories"
            :key="index"
            :story="p"
          />
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
    if (collectionList.includes(params.collection)) return true;
    return error({ code: 404, message: 'You have been lost', homepage: true });
  },
  data() {
    return {
      stories: [],
      collection: null
    };
  },
  async asyncData({ params, error, $axios }) {
    /* stories fetching */
    const posts = await $axios.$get(encodeURI(`${process.env.API_URI}/api/v1/posts/?client=${process.env.CLIENT_ID}&${params.collection}=${params.slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
      
    const factchecks = await $axios.$get(encodeURI(`${process.env.API_URI}/api/v1/factchecks/?client=${process.env.CLIENT_ID}&${params.collection}=${params.slug}&sortBy=publishedDate&sortAsc=false&limit=5`))
      

    const stories = (posts.data || []).concat(factchecks.data || []);
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

    const collection = await $axios
      .$get(encodeURI(`${process.env.API_URI}/api/v1/${collectionPluralList[params.collection]}/${params.slug}/?client=${process.env.CLIENT_ID}`))
      .then(response => response.data)
      .catch(() => error({ code: 404, message: 'You have been lost', homepage: true }));

    if (!collection) {
      return error({ code: 404, message: 'You have been lost', homepage: true });
    }

    return { stories, collection };
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
