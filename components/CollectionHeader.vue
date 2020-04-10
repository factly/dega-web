<template>
  <div class="tabs">
    <ul>
      <li :class="meta === 'all' ? 'is-active': null">
        <nuxt-link :to="localePath({ name:'collection-slug-type', params: { collection, slug, type: null } })">
          {{ heading }}
        </nuxt-link>
      </li>
      <li :class="meta === 'posts' ? 'is-active': null">
        <nuxt-link :to="localePath({ name:'collection-slug-type', params: { collection, slug, type: 'posts' } })">
          Stories
        </nuxt-link>
      </li>
      <li :class="meta === 'factchecks' ? 'is-active': null">
        <nuxt-link :to="localePath({ name:'collection-slug-type', params: { collection, slug, type: 'factchecks' } })">
          Factchecks
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    collection: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    meta: {
      type: String,
      required: true
    }
  }
};
</script>
