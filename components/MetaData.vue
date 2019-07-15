<template>
  <div class="margin-top-half meta-data-font">
    <div class="field is-grouped is-grouped-multiline">
      <div
        v-for="(p, index) in authors"
        :key="'author'+index"
      >
        <p :class="size">
          <span v-if="index !== 0">,&nbsp;</span>
          <nuxt-link :to="localePath({ name:'author-slug', params: { slug: p.slug } })" class="has-text-link">{{ p.display_name }}</nuxt-link>
        </p>
      </div>
      <div v-if="category">
        <p :class="size">&nbsp;in&nbsp;<nuxt-link :to="localePath({ name:'category-slug', params: { slug: category.slug } })" class="has-text-link">{{ category.name }}</nuxt-link></p>
      </div>
    </div>
    <p class="has-text-grey" :class="size">{{ published | date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    authors: {
      type: Array,
      required: true,
    },
    category: {
      type: Object,
      default: null,
    },
    published: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'is-size-7'
    }
  }
}
</script>
