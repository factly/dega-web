<template>
  <div>
    <div v-if="post && post.length">
      <section class="hero-title has-text-centered">
        <Hero :story="post[0]" :categories= "true"/>
      </section>
      <section class="section">
        <div class="container">
          <article
            class="post has-text-justified"
            v-html="post[0].content">
            {{ post[0].content }}
          </article>
        </div>
      </section>
      <SocialSharingVertical class="is-hidden-mobile" :url="$nuxt.$route.path"/>
      <SocialSharingHorizontal class="is-hidden-desktop is-hidden-tablet" :url="$nuxt.$route.path"/>
    </div>
    <div v-else class="subtitle is-6 is-uppercase has-text-centered">
      Dega API is not responding.<br> Please contact the administrator.
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Hero from '~/components/Hero';
import SocialSharingVertical from '~/components/SocialSharingVertical';
import SocialSharingHorizontal from '~/components/SocialSharingHorizontal';

export default {
  components: {
    Hero,
    SocialSharingHorizontal,
    SocialSharingVertical
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
        `${process.env.apiUri}/api/v1/posts/?client=${
          process.env.clientId
        }&slug=${params.params.slug}`
      )
      .then(response => response.data)
      .catch(err => console.log(err));
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
