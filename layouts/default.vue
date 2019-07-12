<template>
  <div>
    <nav
      class="navbar header has-shadow is-spaced is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          :to="localePath('index')">
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
            :to="localePath('index')"
            class="navbar-item">{{ $t('header.home') }}</nuxt-link>
          <nuxt-link
            :to="localePath('post')"
            class="navbar-item">{{ $t('header.stories') }}</nuxt-link>
          <nuxt-link
            class="navbar-item"
            :to="localePath({ name:'category-slug', params: { slug: 'fake-news' } })">
            {{ $t('header.fake_news') }}
          </nuxt-link>
          <nuxt-link
            :to="localePath({ name:'category-slug', params: { slug: 'video' }})"
            class="navbar-item">{{ $t('header.videos') }}</nuxt-link>
          <nuxt-link
            :to="localePath('factcheck')"
            class="navbar-item">{{ $t('header.fact_check') }}</nuxt-link>
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
        <div class="navbar-end">
          <div class="navbar-item is-hidden-touch is-hidden-desktop-only">
            <div class="field is-grouped">
              <p 
                v-if="organisation.facebook_url" 
                class="control">
                <a
                  :href="organisation.facebook_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 facebook-color">
                    <i class="mdi mdi-facebook"></i>
                  </span>
                </a>
              </p>
              <p 
                v-if="organisation.twitter_url" 
                class="control">
                <a
                  :href="organisation.twitter_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 twitter-color">
                    <i class="mdi mdi-twitter"></i>
                  </span>
                </a>
              </p>
              <p 
                v-if="organisation.you_tube_url"
                class="control">
                <a
                  :href="organisation.you_tube_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 youtube-color">
                    <i class="mdi mdi-youtube"></i>
                  </span>
                </a>
              </p>
              <p 
                v-if="organisation.github_url"
                class="control">
                <a
                  :href="organisation.github_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 github-color">
                    <i class="mdi mdi-github-circle"></i>
                  </span>
                </a>
              </p>
              <p
                v-if="organisation.tumbler_url"  
                class="control">
                <a
                  :href="organisation.tumbler_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 tunbler-color">
                    <i class="mdi mdi-tumblr"></i>
                  </span>
                </a>
              </p>
              <p
                v-if="organisation.pinterest_url"
                class="control">
                <a
                  :href="organisation.pinterest_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 pinterest-color">
                    <i class="mdi mdi-pinterest"></i>
                  </span>
                </a>
              </p>
              <p 
                v-if="organisation.linkedin_url"
                class="control">
                <a
                  :href="organisation.linkedin_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 linkedin-color">
                    <i class="mdi mdi-linkedin"></i>
                  </span>
                </a>
              </p>
              <p
                v-if="organisation.whatsapp_url"  
                class="control">
                <a
                  :href="organisation.whatsapp_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 whatsapp-color">
                    <i class="mdi mdi-whatsapp"></i>
                  </span>
                </a>
              </p>
              <p
                v-if="organisation.instagram_url"  
                class="control">
                <a
                  :href="organisation.instagram_url"
                  target="_blank"
                >
                  <span class="icon is-size-4 instagram-color">
                    <i class="mdi mdi-instagram"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div class="navbar-item">
            <a class="navbar-item button" v-if="userModule && !loggedIn" v-on:click="login()">
              <span class="icon">
                <i class="mdi mdi-account"></i>
              </span>
              <span>Sign Up / Log In</span>
            </a>
          </div>
          <div class="navbar-item has-dropdown is-hoverable" v-if="userModule && loggedIn">
            <a class="navbar-link button has-dropdown">
              <span class="icon">
                <i class="mdi mdi-account"></i>
              </span>
              <span>Account</span>
            </a>
            <div class="navbar-dropdown is-right">
              <div>
                <nuxt-link to="/saved" class="navbar-item">
                  <span class="icon is-size-4">
                    <i class="mdi mdi-bookmark"></i>
                  </span>
                  <span>Saved</span>
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
            </div>
          </div>
          <div class="navbar-item">
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <main class="margin-top-6">
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

export default {
  data() {
    return {
      toggleNavBar: false,
      toggleMore: true,
      loggedIn: this.$auth.loggedIn,
      userModule: (process.env.userModule === "true"),
      organisation: Object,
    };
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
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
      this.$auth.loginWith('social')
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
      ]
    };
  }
};
</script>
