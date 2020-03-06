<template>
  <div class="main-content">
    <div class="columns">
      <div class="column is-8">
        <div>
          <CollectionHeader
            :collection = "this.$route.params.collection"
            :slug = "this.$route.params.slug"
            :heading = "this.$route.params.collection === 'user' ? collection.display_name : collection.name"
            meta = "posts"
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
import gql from 'graphql-tag';
import StoryPreview from '@/components/StoryPreview';
import RelatedArticle from '@/components/RelatedArticle';
import CollectionHeader from '@/components/CollectionHeader';
import UserCard from '@/components/UserCard';
import { postsQuery } from '../../../graphql/query/post';

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
      collection: null,
      total: 0,
      pagination: {
        pageNext: 1
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
        if (bottomOfWindow && this.stories.length < this.total) {
          this.getStories();
        }
      };
    },
    async getStories() {
      const posts = await this.$apollo.query({
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
          limit: 5,
          page: this.pagination.pageNext
        }
      })
        .then(p => p.data.posts.nodes)
        .catch(() => {
          this.error({ code: 500, message: 'Something went wrong', homepage: true });
        });

      this.pagination.pageNext += 1;
      this.stories = this.stories.concat(posts);
    }
  },
  async asyncData({
    params, error, app
  }) {
    /* query fetching */
    // eslint-disable-next-line global-require
    const collectionQuery = require(`../../../graphql/query/${params.collection}`);

    const variables = {
      page: 1,
      limit: 5,
      sortBy: 'published_date',
      sort: 'DES',
      id: params.slug
    };

    if (params.collection && params.slug) variables[params.collection] = [params.slug];
    /* stories fetching */
    const result = await app.apolloProvider.defaultClient.query({
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
            $id: String! 
          ) {
              ${postsQuery}
              ${collectionQuery[params.collection]}
            }
        `),
      variables
    })
      .then(p => p.data)
      .catch(() => {
        error({ code: 500, message: 'Something went wrong', homepage: true });
      });

    return {
      stories: result.posts.nodes, pagination: { pageNext: 2 }, collection: result[params.collection], total: result.posts.total
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
        { hid: 'og:image', name: 'og:image', content: collection.media ? collection.media.url : null },
        { hid: 'og:description', name: 'og:description', content: collection.description ? collection.description : null },
      ];
    } else { metadata.title = this.$store.getters.getOrganization.site_title; }

    return metadata;
  }
};
</script>
