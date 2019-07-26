<template>
  <div>
    <div>
      <div>
        <p class="is-size-4 has-text-black-bis has-text-weight-bold post-title-font">{{ story.title }}</p>
      </div>
      <div class="margin-top-half">
        <p class="is-size-6 has-text-grey post-title-font">{{ story.excerpt }}</p>
      </div>
    </div>
    <div class="margin-horizontal-1">
      <div v-if="story.authors.length == 1">
        <article class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <nuxt-link :to="localePath({ name:'collection-slug', params: {collection: 'author', slug: story.authors[0].slug } })" >
                <img
                  :src="story.authors[0].profile_picture"
                  class="is-rounded">
              </nuxt-link>
            </figure>
          </div>
          <div class="media-content">
            <MetaData
              :authors="story.authors"
              :category="story.categories[0]"
              :published="story.published_date"
              size="is-size-6"
            />
          </div>
        </article>
      </div>
      <div v-else>
        <div class="field is-grouped">
          <div
            v-for="(p, index) in story.authors"
            :key="'author'+index"
            class="control"
            style="margin-right:0.5rem;">
            <figure class="image is-48x48">
              <nuxt-link :to="localePath({ name:'collection-slug', params: { collection: 'author', slug: p.slug } })">
                <img
                  :src="p.profile_picture"
                  class="is-rounded">
              </nuxt-link>
            </figure>
          </div>
        </div>
        <div class="margin-top-half">
          <MetaData
            :authors="story.authors"
            :category="story.categories ? story.categories[0] : underfined"
            :published="story.published_date"
            size="is-size-6"
          />
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
