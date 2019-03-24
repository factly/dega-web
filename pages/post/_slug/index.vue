<template>
  <div>
    <section class="hero-title has-text-centered">
      <Hero :story="post[0]" :categories= "true"/>
    </section>
    <!-- post content -->
    <section class="section">
      <div class="container">
        <article
          class="post has-text-justified"
          v-html="post[0].content">
          {{ post[0].content }}
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Hero from '~/components/Hero';

export default {
  components: {
    Hero
  },
  data() {
    return {
      post: null
    };
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
  },

  validate({ params }) {
    return params.slug;
  },

  async asyncData(params) {
    const posts = await axios
      .get(
        `${process.env.apiUri}/api/v1/posts/?client_id=${
          process.env.clientId
        }&slug=${params.params.slug}`
      )
      .then(response => response.data);
    return {
      post: posts
    };
  },
  head () {
    return {
      title: this.post[0].title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.post[0].title },
        // { hid: 'og:url', name: 'og:url', content:  process.env.domainHostname + $nuxt.$route.name},
        { hid: 'og:image', name: 'og:image', content: this.post[0].featured_media }
      ]
    }
  }
};
</script>
