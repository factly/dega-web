<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img
              :src="collection.media.sourceURL"
              alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ collection.displayName }}</p>
          <p class="subtitle is-6"><a :href="'mailto:'+collection.email">{{ collection.email }}</a></p>
        </div>
      </div>

      <div class="content">{{ collection.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collection: {
      type: Object,
      required: true
    }
  }
};
</script>
