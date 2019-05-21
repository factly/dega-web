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
            src="https://gateway.factly.in/core/dega-content/factly-telugu/2019/5/factly-telugu-logo.png"
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
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a
            class="navbar-item is-hidden-touch is-hidden-desktop-only"
            href="https://facebook.com/factlydotin"
            target="_blank">
            <span
              class="icon"
              style="color: #55acee;">
              <!--<svg class="svg-inline--fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">-->
              <svg
                style="width:24px;height:24px"
                viewBox="0 0 24 24">
                <path
                  fill="#3b5998"
                  d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
              </svg>
            </span>
          </a>
          <a
            class="navbar-item is-hidden-touch is-hidden-desktop-only"
            href="https://twitter.com/factlydotin"
            target="_blank">
            <span
              class="icon"
              style="color: #55acee;">
              <svg
                class="svg-inline--fa fa-twitter fa-w-16 fa-lg"
                aria-hidden="true"
                data-prefix="fab"
                data-icon="twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg="">
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
              </svg>
            </span>
          </a>
          <a
            class="navbar-item is-hidden-touch is-hidden-desktop-only"
            href="https://www.youtube.com/channel/UCpi2S8wW4xLlUCVryhyBtsA"
            target="_blank">
            <span
              class="icon"
              style="color: #333;">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="svg-inline--fa fa-youtube fa-w-15 fa-lg"
                data-icon="youtube-alt"
                viewBox="0 0 20 20">
                <path
                  fill="rgb(234, 23, 23)"
                  d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </nav>
    <div>
      <br class="is-hidden-mobile">
      <br>
      <nuxt/>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>DEGA</strong> by
          <a href="https://factly.in/">FACTLY</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<style>

</style>

<script>
export default {
  data() {
    return {
      toggleNavBar: false,
      toggleMore: true
    };
  },
  head() {
    return {
      // //Following needs to be dynamically updated from Organization entity
      link: [
        { rel: 'shortcut icon', type: 'image/png', href: 'https://gateway.factly.in/core/dega-content/factly-telugu/2019/5/factly-telugu-favicon.png' },
      ],
      htmlAttrs: {
        class: 'has-navbar-fixed-top'
      }
    };
  }
};
</script>
