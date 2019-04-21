<template>
  <div class="columns is-vcentered is-centered">
    <div class= "column is-6">
      <div class="card">
        <div class="card-image">
          <figure class ="image is-5by3">
            <img
              :src="story.featured_media"
              alt="Factcheck"
              style="border-radius: 0px 0px 0px 0px;">
          </figure>
        </div>
      </div>
    </div>
    <div class= "column is-5" >
      <div class="content subtitle has-text-centered">
        <p class="title is-size-5 is-size-4-tablet is-size-3-mobile is-size-3-desktop has-text-centered-desktop">{{ story.title }}</p>
      </div>
      <div
        v-if="story.authors"
        class="subtitle is-6 is-uppercase has-text-centered is-size-3-mobile">
        BY
        <span
          v-for="(author, index) in story.authors"
          :key="index" >
          <!--<nuxt-link :to="'/author/' + author.slug">-->
            {{ author.display_name }}
          <!--</nuxt-link>-->
          <span v-if="index != story.authors.length -1">, </span>
        </span>
      </div>
      <div class="has-text-centered is-size-4-mobile">{{ getDate(story.last_updated_date) }}</div><br>
      <div class="has-text-justified is-hidden-mobile ">
        {{ story.excerpt }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
      default: null
    },
    categories: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    getDate(datetime) {
      const date = new Date(datetime);
      const ms = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`;
    }
  }
};
</script>
