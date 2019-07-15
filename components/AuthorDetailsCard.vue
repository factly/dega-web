<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-96x96">
        <nuxt-link :to="localePath({ name:'author-slug', params: { slug: author.slug } })">
          <img :src="author.profile_picture" class="is-rounded">
        </nuxt-link>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p class="title is-5">
          <nuxt-link :to="localePath({ name:'author-slug', params: { slug: author.slug } })" class="has-text-link">{{author.display_name}}</nuxt-link>
        </p>
        <p class="subtitle is-6 has-text-justified">{{author.description}}</p>
      </div>
      <div>
        <p class="subtitle is-6">
          <span class="icon">
            <i class="mdi mdi-email"></i>
          </span>
          <span>
            <a :href="'mailto:'+author.email" class="has-text-link">{{author.email}}</a>
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
}
</script>