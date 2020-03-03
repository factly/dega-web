<template>
  <div class="main-content">
    <div class="columns">
      <div class="column is-8">
        <div>
          <CollectionHeader
            :collection = "this.$route.params.collection"
            :slug = "this.$route.params.slug"
            :heading = "this.$route.params.collection === 'user' ? collection.display_name : collection.name"
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
/* eslint-disable import/no-dynamic-require */
import StoryPreview from '@/components/StoryPreview';
import RelatedArticle from '@/components/RelatedArticle';
import CollectionHeader from '@/components/CollectionHeader';
import UserCard from '@/components/UserCard';
import factCheckQuery from '../../../graphql/query/factcheck.gql';
import postQuery from '../../../graphql/query/post.gql';

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
  async asyncData({
    params, app, error
  }) {
    /* stories fetching */
    const variables = {
      limit: 5,
      sortBy: 'published_date',
      sort: 'DES'
    };

    if (params.collection && params.slug) variables[params.collection] = [params.slug];

    const factchecks = await app.apolloProvider.defaultClient.query({
      query: factCheckQuery,
      variables
    });

    const posts = await app.apolloProvider.defaultClient.query({
      query: postQuery,
      variables
    });

    const stories = (posts.data.posts.nodes || []).concat(factchecks.data.factchecks.nodes || []);
    stories.sort((a, b) => {
      if (a.publishedDate > b.publishedDate) return -1;
      if (b.publishedDate > a.publishedDate) return 1;
      return 0;
    });

    /* collection fetching */
    const collectionPluralList = {
      user: 'userById',
      category: 'categoryById',
      tag: 'tagById'
    };

    /* query fetching */
    // eslint-disable-next-line global-require
    const query = require(`../../../graphql/query/${collectionPluralList[params.collection]}`);

    const collection = await app.apolloProvider.defaultClient.query({
      query,
      variables: {
        id: params.slug
      }
    }).then(c => c.data)
      .catch(() => error({ code: 500, message: 'Something went wrong' }));

    return { stories, collection: collection[params.collection] };
  },
  head() {
    const metadata = {};
    const { collection } = this;
    if (collection) {
      const title = `${collection.name ? collection.name : collection.display_name} - ${this.$route.params.collection.charAt(0).toUpperCase() + this.$route.params.collection.slice(1)} - ${this.$store.getters.getOrganisation.siteTitle}`;
      metadata.title = title;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:image', name: 'og:image', content: collection.media ? collection.media.url : null },
        { hid: 'og:description', name: 'og:description', content: collection.description ? collection.description : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganisation.siteTitle; }

    return metadata;
  }
};
</script>
