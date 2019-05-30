<template>
  <div>
    <nav
      class="navbar header has-shadow is-spaced is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/">
          <!--<img src="~assets/images/logo.png" alt="Dega" height="110"/>-->
          <img
            :src="organisation.logo_url"
            alt="Dega"
            height="110">
        </nuxt-link>
        <div
          class="navbar-burger burger"
          @click="toggleNavBar = !toggleNavBar">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
      <div
        :class="{ 'is-active': toggleNavBar }"
        class="navbar-menu">
        <div class="navbar-start is-uppercase has-text-weight-semibold">
          <nuxt-link
            to="/"
            class="navbar-item">Home</nuxt-link>
          <nuxt-link
            to="/post"
            class="navbar-item">Stories</nuxt-link>
          <nuxt-link
            to="/category/fake-news"
            class="navbar-item">Fake News</nuxt-link>
          <nuxt-link
            to="/category/video"
            class="navbar-item">Videos</nuxt-link>
          <nuxt-link
            to="/factcheck"
            class="navbar-item">Fact Check</nuxt-link>
          <!--<nuxt-link to="/category/fake-news" class="navbar-item">Fake News</nuxt-link>-->
          <div class="navbar-item has-dropdown is-hoverable">
            <div
              class="navbar-link has-dropdown"
              @click="toggleMore = !toggleMore">More
              <div
                id="aboutUsDropdown"
                :class="{ 'is-hidden-mobile': toggleMore }"
                class="navbar-dropdown has-text-weight-semibold">
                <nuxt-link
                  to="/page/about-us"
                  class="navbar-item">About us</nuxt-link>
                <hr class="navbar-divider">
                <nuxt-link
                  to="/page/corrections-policy"
                  class="navbar-item">Corrections Policy</nuxt-link>
                <hr class="navbar-divider">
                <nuxt-link
                  to="/page/team"
                  class="navbar-item">Team</nuxt-link>
                <hr class="navbar-divider">
                <nuxt-link
                  to="/page/fact-check-methodology"
                  class="navbar-item">Fact Check Methodology</nuxt-link>
                <hr class="navbar-divider">
                <nuxt-link
                  to="/page/privacy-policy"
                  class="navbar-item">Privacy Policy</nuxt-link>
                <hr class="navbar-divider">
                <nuxt-link
                  to="/page/submit-a-claim"
                  class="navbar-item">Submit a Claim</nuxt-link>
                <hr class="navbar-divider">
                <nuxt-link
                  to="/page/funding-details"
                  class="navbar-item">Funding Details</nuxt-link>
                <hr class="navbar-divider">
                <nuxt-link
                  to="/page/contact-us"
                  class="navbar-item">Contact Us</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ClientSocialButtons/>
        </div>
      </div>
    </nav>
    <br >
    <br >
    <main>
      <div class="container is-widescreen">
        <nuxt/>
      </div>
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <a :href="organisation.site_address">{{ organisation.site_title }}. </a> {{ organisation.tag_line }}<br>The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<style>

</style>

<script>
import DefaultImage from '~/assets/images/dega-default-image.png';
import ClientSocialButtons from '~/components/ClientSocialButtons.vue'
export default {
  components: {
    ClientSocialButtons
  },
  data() {
    return {
      toggleNavBar: false,
      toggleMore: true,
      organisation: Object,
    };
  },
  created() {
    this.organisation = this.$store.getters.getOrganisation;
  },
  head() {
    return {
      title: this.organisation.name,
      link: [
        { rel: 'shortcut icon', type: 'image/png', href: this.organisation.logo_url },
        { rel: 'icon', type: 'image/x-icon', href: this.organisation.fav_icon_url },
      ],
      meta: [
        { name: 'google-site-verification', content: this.organisation.google_verification_code},
        { hid: 'og:site_name', name: 'og:site_name', content: this.organisation.name },
        { hid: 'og:title', name: 'og:title', content: this.$nuxt.$route.path.split('/').pop() },
        { hid: 'og:url', name: 'og:url', content:  this.organisation.site_address + this.$nuxt.$route.path},
        { hid: 'og:image', name: 'og:image', content: this.organisation.site_address + DefaultImage },
        { hid: 'og:description', name: 'og:description', content: this.organisation.description},
      ],
      htmlAttrs: {
        class: 'has-navbar-fixed-top'
      }
    };
  }
};
</script>
