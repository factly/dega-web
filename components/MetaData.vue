<template>
  <div class="margin-top-half">
    <div class="field is-grouped is-grouped-multiline">
      <div
        v-for="(p, index) in authors"
        :key="'author'+index"
      >
        <p :class="size">
          <span v-if="index !== 0">,&nbsp;</span>
          <nuxt-link :to="'/author/' + p.slug" class="has-text-link">{{ p.display_name }}</nuxt-link>
        </p>
      </div>
      <div v-if="category">
        <p :class="size">&nbsp;in&nbsp;<nuxt-link :to="'/category/' + category.slug" class="has-text-link">{{ category.name }}</nuxt-link></p>
      </div>
    </div>
    <div class="has-text-grey" :class="size">{{ published | date }}</div>
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
