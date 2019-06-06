<!-- Popular articles -->
<template>
  <div class="box padding-half">
    <div class="media">
      <figure class="media-left">
        <div class="image is-48x48">
          <p
            class="title has-text-grey-light is-3 has-text-centered"
          >{{ rank }}</p>
        </div>
      </figure>
      <div class="media-content">
        <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug">
          <p class="is-size-5 has-text-black-bis has-text-weight-bold mallanna-font">{{ story.title }}</p>
        </nuxt-link>
        <div>
          <div class="field is-grouped is-grouped-multiline">
            <div
              v-for="(p, index) in story.authors"
              :key="'author'+index"
            >
              <div class="contorl">
                <nuxt-link :to="'/author/' + p.slug">
                  <p class="is-size-7 has-text-link">{{ p.display_name }}<span v-if="index !== story.authors.length - 1">,&nbsp;</span></p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="is-size-7 has-text-grey">{{ story.published_date | date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rank: {
      type: String,
      required: true
    },
    story: {
      type: Object,
      required: true
    }
  }
};
</script>
