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
            <div v-if="userModule" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <span
                  class="icon"
                  style="color: #333;">
                  <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="currentColor"
                      d="M896 0q182 0 348 71t286 191 191 286 71 348q0 181-70.5 347t-190.5 286-286 191.5-349 71.5-349-71-285.5-191.5-190.5-286-71-347.5 71-348 191-286 286-191 348-71zm619 1351q149-205 149-455 0-156-61-298t-164-245-245-164-298-61-298 61-245 164-164 245-61 298q0 250 149 455 66-327 306-327 131 128 313 128t313-128q240 0 306 327zm-235-647q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5z"/>
                  </svg>
                </span>
              </a>
              <div class="navbar-dropdown">
                <nuxt-link to="/saved/posts" v-if="loggedIn" class="navbar-item">
                  Saved Posts
                </nuxt-link>
                <nuxt-link to="/saved/factchecks" v-if="loggedIn" class="navbar-item">
                  Saved Factchecks
                </nuxt-link>
                <nuxt-link to="/profile" v-if="loggedIn" class="navbar-item">
                  Profile
                </nuxt-link>
                <hr class="navbar-divider">
                <a v-if="loggedIn" class="navbar-item" v-on:click="logout()">
                  Logout
                </a>
                <a v-if="!loggedIn" class="navbar-item" v-on:click="login()">
                  Login
                </a>
              </div>
            </div>
            <!-- <ClientSocialButtons/> -->
            <a
              v-if="organisation.facebook_url"
              :href="organisation.facebook_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #55acee;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    fill="#3b5998"
                    d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
                  />
                </svg>
              </span>
            </a>
            <!-- Sharingbutton Twitter -->
            <a
              v-if="organisation.twitter_url"
              :href="organisation.twitter_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #55acee;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
                  />
                </svg>
              </span>
            </a>

            <!-- Sharingbutton Youtube -->
            <a
              v-if="organisation.you_tube_url"
              :href="organisation.you_tube_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #333;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-inline--fa fa-youtube fa-w-15 fa-lg"
                  data-icon="youtube-alt"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="rgb(234, 23, 23)"
                    d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"
                  />
                </svg>
              </span>
            </a>

            <!-- Sharingbutton Github -->
            <a
              v-if="organisation.github_url"
              :href="organisation.github_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #333;">
                <svg
                  class="svg-inline--fa fa-github-alt fa-w-15 fa-lg"
                  data-prefix="fab"
                  data-icon="github-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                  />
                </svg>
              </span>
            </a>

            <!-- Sharingbutton Google+ -->
            <a
              v-if="organisation.google_plus_url"
              :href="organisation.google_plus_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #dd4b39;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M11.37 12.93c-.73-.52-1.4-1.27-1.4-1.5 0-.43.03-.63.98-1.37 1.23-.97 1.9-2.23 1.9-3.57 0-1.22-.36-2.3-1-3.05h.5c.1 0 .2-.04.28-.1l1.36-.98c.16-.12.23-.34.17-.54-.07-.2-.25-.33-.46-.33H7.6c-.66 0-1.34.12-2 .35-2.23.76-3.78 2.66-3.78 4.6 0 2.76 2.13 4.85 5 4.9-.07.23-.1.45-.1.66 0 .43.1.83.33 1.22h-.08c-2.72 0-5.17 1.34-6.1 3.32-.25.52-.37 1.04-.37 1.56 0 .5.13.98.38 1.44.6 1.04 1.84 1.86 3.55 2.28.87.23 1.82.34 2.8.34.88 0 1.7-.1 2.5-.34 2.4-.7 3.97-2.48 3.97-4.54 0-1.97-.63-3.15-2.33-4.35zm-7.7 4.5c0-1.42 1.8-2.68 3.9-2.68h.05c.45 0 .9.07 1.3.2l.42.28c.96.66 1.6 1.1 1.77 1.8.05.16.07.33.07.5 0 1.8-1.33 2.7-3.96 2.7-1.98 0-3.54-1.23-3.54-2.8zM5.54 3.9c.33-.38.75-.58 1.23-.58h.05c1.35.05 2.64 1.55 2.88 3.35.14 1.02-.08 1.97-.6 2.55-.32.37-.74.56-1.23.56h-.03c-1.32-.04-2.63-1.6-2.87-3.4-.13-1 .08-1.92.58-2.5zM23.5 9.5h-3v-3h-2v3h-3v2h3v3h2v-3h3"
                  />
                </svg>
              </span>
            </a>

            <!-- Sharingbutton Tumblr -->
            <a
              v-if="organisation.tumbler_url"
              :href="organisation.tumbler_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #35465C;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M13.5.5v5h5v4h-5V15c0 5 3.5 4.4 6 2.8v4.4c-6.7 3.2-12 0-12-4.2V9.5h-3V6.7c1-.3 2.2-.7 3-1.3.5-.5 1-1.2 1.4-2 .3-.7.6-1.7.7-3h3.8z"
                  />
                </svg>
              </span>
            </a>

            <!-- Sharingbutton Pinterest -->
            <a
              v-if="organisation.pinterest_url"
              :href="organisation.pinterest_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #bd081c;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z"
                  />
                </svg>
              </span>
            </a>

            <!-- Sharingbutton LinkedIn -->
            <a
              v-if="organisation.linkedin_url"
              :href="organisation.linkedin_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #0077b5;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"
                  />
                </svg>
              </span>
            </a>

            <!-- Sharingbutton WhatsApp -->
            <a
              v-if="organisation.whatsapp_url"
              :href="organisation.whatsapp_url"
              class="navbar-item is-hidden-touch is-hidden-desktop-only"
              target="_blank"
            >
              <span
                class="icon"
                style="color: #25D366;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <br >
    <br >
    <main>
      <div class="container is-widescreen">
        <div style="padding: 1rem;">
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
<style>
</style>

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
