<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <nuxt-link :to="localePath({ name:'collection-slug', params: { collection: 'author', slug: author.slug } })">
          <img
            :src="author.profile_picture"
            class="is-rounded">
        </nuxt-link>
      </p>
    </figure>
    <div class="media-content">
      <div>
        <p class="title is-6 story-author-name-font">
          <nuxt-link
            :to="localePath({ name:'collection-slug', params: { collection: 'author', slug: author.slug } })"
            class="has-text-link">{{ author.display_name }}</nuxt-link>
        </p>
        <p class="subtitle is-6 has-text-justified story-author-desc-font">{{ author.description }}</p>
      </div>
      <div class="margin-horizontal-1">
        <p class="subtitle is-6">
          <span class="icon">
            <i class="mdi mdi-email"/>
          </span>
          <span>
            <a
              :href="'mailto:'+author.email"
              class="has-text-link">{{ author.email }}</a>
          </span>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
};
</script>
