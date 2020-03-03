<template>
  <div>
    <div class="field is-grouped is-grouped-multiline">
      <div
        v-for="(user, index) in users"
        :key="'user'+index"
      >
        <p
          :class="size"
          class="meta-data-font">
          <span v-if="index !== 0">,&nbsp;</span>
          <nuxt-link
            :to="localePath({ name:'collection-slug', params: { collection: 'user', slug: user._id } })"
            class="has-text-link">{{ user.display_name }}</nuxt-link>
        </p>
      </div>
      <p
        :class="size"
        class="meta-data-font">
        &nbsp;in&nbsp;
      </p>
      <div
        v-for="(category, index) in categories"
        :key="'category'+index"
      >
        <p
          :class="size"
          class="meta-data-font">
          <span v-if="index !== 0">,&nbsp;</span>
          <nuxt-link
            :to="localePath({ name:'collection-slug', params: { collection: 'category', slug: category._id } })"
            class="has-text-link">{{ category.name }}</nuxt-link>
        </p>
      </div>
    </div>
    <p
      :class="size"
      class="has-text-grey meta-data-font">{{ published | date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => []
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
};
</script>
