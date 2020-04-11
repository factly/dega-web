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
        <div
          v-if="stories.length > 0 && stories.length == total"
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
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import gql from 'graphql-tag';
import StoryPreview from '@/components/StoryPreview';
import CollectionHeader from '@/components/CollectionHeader';
import UserCard from '@/components/UserCard';
import { pagingQuery as postsQuery } from '@/graphql/query/posts';
import { pagingQuery as factchecksQuery } from '@/graphql/query/factchecks';

export default {
  components: {
    StoryPreview,
    CollectionHeader,
    UserCard
  },
  validate({ params }) {
    const collectionList = ['category', 'user', 'tag'];
    if (collectionList.includes(params.collection)) {
      return true;
    }
    return false;
  },
  data() {
    return {
      stories: [],
      collection: null,
      total: 0
    };
  },
  async asyncData({
    params, app, error
  }) {
    /* query fetching */
    const collectionQuery = require(`@/graphql/query/${params.collection}`);
    /* stories fetching */
    const variables = {
      limit: 5,
      page: 1,
      sortBy: 'published_date',
      sort: 'DES',
      id: params.slug.split('-').pop()
    };

    if (params.collection && params.slug) variables[params.collection] = [params.slug.split('-').pop()];

    const result = await app.apolloProvider.defaultClient.query({
      query: gql(String.raw`
          query (
            $limit: Int
            $page: Int
            $category: [String!]
            $tag: [String!]
            $user: [String!]
            $sortBy: String
            $sortOrder: String
            $id: String! 
          ) {
              ${postsQuery}
              ${factchecksQuery}
              ${collectionQuery[params.collection]}
            }
          `),
      variables
    })
      .then(f => f.data)
      .catch(() => error({ code: 500, message: 'Something went wrong', homepage: true }));

    const stories = (result.posts.nodes || []).concat(result.factchecks.nodes || []);
    const total = result.posts.total + result.factchecks.total;
    if (total === 0) {
      error({ code: 404, message: 'page not found', homepage: true });
    }
    return {
      stories, collection: result[params.collection], total
    };
  },
  head() {
    const metadata = {};
    const { collection } = this;
    if (collection) {
      const title = `${collection.name ? collection.name : collection.display_name} - ${this.$route.params.collection.charAt(0).toUpperCase() + this.$route.params.collection.slice(1)} - ${this.$store.getters.getOrganization.site_title}`;
      metadata.title = title;
      metadata.meta = [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:image', name: 'og:image', content: collection.media ? collection.media.source_url : null },
        { hid: 'og:description', name: 'og:description', content: collection.description ? collection.description : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganization.site_title; }
    return metadata;
  }
};
</script>
