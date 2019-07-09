<template>
  <div>
    <div class="margin-top-2">
      <div class="tags">
        <span 
          v-for="(t, index) in tags" 
          class="tag is-medium"
          :key="'tags'+index">
          <nuxt-link :to="'/tag/' +t.slug" class="has-text-black-bis">{{t.name}}</nuxt-link>
        </span>
      </div>
    </div>
    <div class="margin-top-2">
      <div>
        <p class="is-size-4 has-text-info">About authors</p>
      </div>
      <div class="margin-top-2">
        <AuthorDetailsCard
          v-for="(a, index) in authors"
          :key="'author'+index"
          :author="a"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorDetailsCard from '@/components/AuthorDetailsCard';
export default {
  components: {
    AuthorDetailsCard
  },
  props: {
    tags: {
      type: Array,
      required: true
    },
    authors: {
      type: Array,
      required: true
    }
  }
}
</script>