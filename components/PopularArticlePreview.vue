<!-- Popular articles -->
<template>
  <div class="box padding-half">
    <div class="media">
      <figure class="media-left">
        <div class="image is-48x48">
          <p class="title has-text-grey-light is-3 has-text-centered">{{ rank }}</p>
        </div>
      </figure>
      <div class="media-content">
        <p class="is-size-5 has-text-weight-bold mallanna-font">
          <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' +story.slug" class="has-text-black-bis">
          {{ story.title }}
          </nuxt-link>
        </p>
        <div>
          <div class="field is-grouped is-grouped-multiline">
            <div
              v-for="(p, index) in story.authors"
              :key="'author'+index"
            >
              <div class="contorl">
                <p class="is-size-7">
                  <nuxt-link :to="'/author/' + p.slug" class="has-text-link">
                    {{ p.display_name }}
                  </nuxt-link>  
                  <span v-if="index !== story.authors.length - 1">,&nbsp;</span>
                </p>
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
