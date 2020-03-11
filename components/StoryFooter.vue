<template>
  <div>
    <div
      v-if="updates"
      class="updates">
      <article class="message is-info">
        <div class="message-body">
          {{ updates }}
        </div>
      </article>
    </div>
    <div
      v-if="tags.length > 0"
      class="margin-horizontal-1">
      <div class="tags">
        <span
          v-for="(t, index) in tags"
          :key="'tags'+index"
          class="tag is-medium">
          <nuxt-link
            :to="localePath({ name: 'collection-slug-type', params: { collection: 'tag', slug: t.slug+'-'+t._id, type: null } })"
            class="has-text-black-bis">{{ t.name }}</nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    },
    updates: {
      type: String,
      default: ''
    }
  }
};
</script>
