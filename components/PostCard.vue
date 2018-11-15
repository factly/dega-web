<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by1">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 has-text-weight-semibold">{{ post.title }}</p>
          <p class="subtitle is-6">An infographic published by the government claims that financial future has been secured for crores of girls in India.
          This claim is part of a series on ‘speed and scale of transformation’ in India. Here is a fact check of the claim.</p>
          <time style="color: #b3b2b2">By Aila Bandagi Kandlakunta On October 10, 2018</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>
