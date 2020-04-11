<template>
  <div>
    <div>
      <div>
        <p class="is-size-4 has-text-black-bis has-text-weight-bold post-title-font">{{ story.title }}</p>
      </div>
      <div class="margin-top-half"/>
    </div>
    <div class="margin-horizontal-1">
      <div v-if="story.degaUsers.length == 1">
        <article class="media">
          <div class="media-left">
            <figure
              v-if="story.degaUsers[0].media"
              class="image is-48x48">
              <nuxt-link :to="localePath({ name:'collection-slug', params: {collection: 'user', slug: story.degaUsers[0].slug+'-'+story.degaUsers[0]._id} })" >
                <img
                  :src="story.degaUsers[0].media.source_url+'?resize:fill:50:50:0/quality:60/gravity:sm'"
                  :alt="story.degaUsers[0].media.alt_text"
                  class="is-rounded" >
              </nuxt-link>
            </figure>
          </div>
          <div class="media-content">
            <MetaData
              :users="story.degaUsers"
              :categories="story.categories"
              :published="story.published_date"
              size="is-size-6"
            />
          </div>
        </article>
      </div>
      <div v-else>
        <div class="field is-grouped">
          <div
            v-for="(user, index) in story.degaUsers"
            :key="'user'+index"
            class="control"
            style="margin-right:0.5rem;">
            <figure
              v-if="user.media"
              class="image is-48x48">
              <nuxt-link :to="localePath({ name:'collection-slug', params: { collection: 'user', slug: user.slug+'-'+user._id} })">
                <img
                  :src="user.media.source_url+'?resize:fill:50:50:0/quality:60/gravity:sm'"
                  :alt="user.media.alt_text"
                  class="is-rounded">
              </nuxt-link>
            </figure>
          </div>
        </div>
        <div class="margin-top-half">
          <MetaData
            :users="story.degaUsers"
            :categories="story.categories"
            :published="story.published_date"
            size="is-size-6"
          />
        </div>
      </div>
    </div>
    <div class="margin-top-2">
      <div class="padding-1">
        <div class="columns has-background-light">
          <div class="column is-6 padding-none">
            <figure
              v-if="story.media"
              class="image is-16by9">
              <img
                :src="story.media.source_url+'?resize:fill:200:112:0/gravity:sm'"
                :alt="story.media.alt_text"
              >
            </figure>
          </div>
          <div class="column is-6">
            <p class="is-size-5 has-text-black-bis">Excerpt</p>
            <hr class="has-background-black-bis margin-horizontal-1">
            <p class="is-size-6 has-text-black-bis">{{ story.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetaData from '@/components/MetaData';

export default {
  components: {
    MetaData
  },
  props: {
    story: {
      type: Object,
      required: true,
      default: null
    }
  }
};
</script>
