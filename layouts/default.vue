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
                <hr class="navbar-divider">
                <nuxt-link
                  to="/page/privacy-policy"
                  class="navbar-item">Privacy Policy</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="navbar-end">
            <!-- <ClientSocialButtons/> -->
            <a
              v-if="organisation.facebook_url"
              :href="organisation.facebook_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span class="icon is-size-4 facebook-color">
                <i class="mdi mdi-facebook"></i>
              </span>
            </a>
            <!-- Sharingbutton Twitter -->
            <a
              v-if="organisation.twitter_url"
              :href="organisation.twitter_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span class="icon is-size-4 twitter-color">
                <i class="mdi mdi-twitter"></i>
              </span>
            </a>
            <!-- Sharingbutton Youtube -->
            <a
              v-if="organisation.you_tube_url"
              :href="organisation.you_tube_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span class="icon is-size-4 youtube-color">
                <i class="mdi mdi-youtube"></i>
              </span>
            </a>
            <!-- Sharingbutton Github -->
            <a
              v-if="organisation.github_url"
              :href="organisation.github_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span class="icon is-size-4 github-color">
                <i class="mdi mdi-github-circle"></i>
              </span>
            </a>
            <!-- Sharingbutton Tumblr -->
            <a
              v-if="organisation.tumbler_url"
              :href="organisation.tumbler_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span class="icon is-size-4 tunbler-color">
                <i class="mdi mdi-tumblr"></i>
              </span>
            </a>
            <!-- Sharingbutton Pinterest -->
            <a
              v-if="organisation.pinterest_url"
              :href="organisation.pinterest_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span class="icon is-size-4 pinterest-color">
                <i class="mdi mdi-pinterest"></i>
              </span>
            </a>
            <!-- Sharingbutton LinkedIn -->
            <a
              v-if="organisation.linkedin_url"
              :href="organisation.linkedin_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span class="icon is-size-4 linkedin-color">
                <i class="mdi mdi-linkedin"></i>
              </span>
            </a>
            <!-- Sharingbutton WhatsApp -->
            <a
              v-if="organisation.whatsapp_url"
              :href="organisation.whatsapp_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span class="icon is-size-4 whatsapp-color">
                <i class="mdi mdi-whatsapp"></i>
              </span>
            </a>
            <div v-if="userModule" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link button">
                <span class="icon is-size-4">
                  <i class="mdi mdi-account"></i>
                </span>
                <span>Account</span>
              </a>
              <div class="navbar-dropdown is-right">
                <div v-if="loggedIn">
                  <nuxt-link to="/saved/posts" class="navbar-item">
                    Saved Posts
                  </nuxt-link>
                  <nuxt-link to="/saved/factchecks" class="navbar-item">
                    Saved Factchecks
                  </nuxt-link>
                  <nuxt-link to="/profile" class="navbar-item">
                    <span class="icon is-size-4">
                      <i class="mdi mdi-account-settings-variant"></i>
                    </span>
                    <span>Profile</span>
                  </nuxt-link>
                  <a class="navbar-item has-text-danger" v-on:click="logout()">
                    <span class="icon is-size-4">
                      <i class="mdi mdi-logout-variant"></i>
                    </span>
                    <span>Logout</span>
                  </a>
                </div>
                <div v-if="!loggedIn">
                  <a class="navbar-item" v-on:click="login()">
                    <span class="icon is-size-4">
                      <i class="mdi mdi-login-variant"></i>
                    </span>
                    <span>Log In</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br class="is-hidden-mobile">
    <br class="is-hidden-mobile">
    <main>
      <div class="container is-widescreen">
        <div class="padding-half">
          <nuxt/>
        </div>
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

<script>
import DefaultImage from '~/assets/images/dega-default-image.png';
import ClientSocialButtons from '~/components/ClientSocialButtons.vue';

export default {
  components: {
    ClientSocialButtons
  },
  data() {
    return {
      toggleNavBar: false,
      toggleMore: true,
      loggedIn:this.$auth.loggedIn,
      userModule:(process.env.userModule === "true"),
      organisation: Object,
    };
  },
  methods: {
    logout(){
      const url=process.env.logoutUri+"?redirect_uri="+(process.env.baseUrl);
      const logout = this.$auth.logout();
      logout.then(()=>{
        window.location.replace(encodeURI(url))
      })
    },
    async login(){
      this.$auth.loginWith('social').then(()=>{
            this.loggedIn = true;
          })
    }
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
        { name: 'google-site-verification', content: this.organisation.google_verification_code },
        { hid: 'og:site_name', name: 'og:site_name', content: this.organisation.name },
        { hid: 'og:title', name: 'og:title', content: this.$nuxt.$route.path.split('/').pop() },
        { hid: 'og:url', name: 'og:url', content: this.organisation.site_address + this.$nuxt.$route.path },
        { hid: 'og:image', name: 'og:image', content: this.organisation.site_address + DefaultImage },
        { hid: 'og:description', name: 'og:description', content: this.organisation.description },
      ],
      htmlAttrs: {
        class: 'has-navbar-fixed-top'
      }
    };
  }
};
</script>
