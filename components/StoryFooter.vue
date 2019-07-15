<template>
  <div>
    <div class="updates" v-if="updates">
      <article class="message is-info">
        <div class="message-body">
          {{ updates }}
        </div>
      </article>
    </div>
    <div class="margin-horizontal-1" v-if="tags.length > 0">
      <div class="tags">
        <span 
          v-for="(t, index) in tags" 
          class="tag is-medium"
          :key="'tags'+index">
          <nuxt-link :to="localePath({ name: 'tag-slug', params: { slug: t.slug } })" class="has-text-black-bis">{{t.name}}</nuxt-link>
        </span>
      </div>
    </div>
    <div class="margin-horizontal-1">
      <div>
        <p class="is-size-5 has-text-info">{{ $t('story.about_author') }}</p>
      </div>
      <div class="margin-top-half">
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
    },
    updates: {
      type: String,
      default: ""
    }
  }
}
</script>