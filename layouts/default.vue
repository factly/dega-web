<template>
  <div>
    <nav
      class="navbar header has-shadow is-spaced is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">"
        <a
          class="navbar-item"
          href="/">
          <img
            src="~assets/images/logo.png"
            alt="Dega"
            height="110">
        </a>

        <div class="navbar-burger">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
      <div id="navMenuDocumentation" class="navbar-menu">
        <div class="navbar-start is-uppercase">
          <a class="navbar-item bd-navbar-item-documentation  is-active" href="/">
            <span class="is-hidden-touch is-hidden-widescreen">
              Factchecks
            </span>
            <span class="is-hidden-desktop-only">
              Factchecks
            </span>
          </a>
          <a class="navbar-item bd-navbar-item-category " href="http://127.0.0.1:3000/category/">
            <span>Videos</span>
          </a>
          <a class="navbar-item bd-navbar-item-blog " href="/">
            <span>Stories</span>
          </a>
          <a class="navbar-item bd-navbar-item-author " href="http://127.0.0.1:3000/author/">
            <span>Infographics</span>
          </a>
          <a class="navbar-item bd-navbar-item-love " href="/">
            <span>About Us</span>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
              More
            </a>
            <div id="moreDropdown" class="navbar-dropdown">
              <a class="navbar-item " href="/">
                <span>
                  <span class="icon has-text-success">
                    <svg class="svg-inline--fa fa-rocket fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505.1 19.1C503.8 13 499 8.2 492.9 6.9 460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.9c-18.2 0-34.8 10.3-42.9 26.5L2.6 253.3c-8 16 3.6 34.7 21.5 34.7h95.1c-5.9 12.8-11.9 25.5-18 37.7-3.1 6.2-1.9 13.6 3 18.5l63.6 63.6c4.9 4.9 12.3 6.1 18.5 3 12.2-6.1 24.9-12 37.7-17.9V488c0 17.8 18.8 29.4 34.7 21.5l98.7-49.4c16.3-8.1 26.5-24.8 26.5-42.9V312.8c72.6-46.3 128-108.4 128-211.1.1-25.2.1-50.4-6.8-82.6zM400 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path></svg><!-- <i class="fas fa-rocket"></i> -->
                  </span>
                  <strong>First More Menu Item</strong>
                  <br>
                  First menu item subtitle
                </span>
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item " href="/">
                <span>
                  <span class="icon has-text-primary">
                    <svg class="svg-inline--fa fa-certificate fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="certificate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"></path></svg><!-- <i class="fas fa-certificate"></i> -->
                  </span>
                  <strong>Second More Menu Item</strong>
                  <br>
                  Second menu item subtitle
                </span>
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item " href="/">
                <span>
                  <span class="icon has-text-bootstrap">
                    <svg class="svg-inline--fa fa-exchange-alt fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="exchange-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path></svg><!-- <i class="fas fa-exchange-alt"></i> -->
                  </span>
                  <strong>Third More Menu Item</strong>
                  <br>
                  Third menu item subtitle
                </span>
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item " href="/">
                <span>
                  <span class="icon has-text-patreon">
                    <svg class="svg-inline--fa fa-patreon fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="patreon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"></path></svg><!-- <i class="fab fa-patreon"></i> -->
                  </span>
                  <strong>Fourth More Menu Item</strong>
                  <br>
                  Fourth menu item subtitle
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://facebook.com/factlydotin" target="_blank">
            <span class="icon" style="color: #55acee;">
              <!--<svg class="svg-inline&#45;&#45;fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">-->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#3b5998" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
              </svg>
            </span>
          </a>
          <a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://twitter.com/factlydotin" target="_blank">
            <span class="icon" style="color: #55acee;">
              <svg class="svg-inline--fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </span>
          </a>
          <a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://github.com/factly" target="_blank">
            <span class="icon" style="color: #333;">
              <svg class="svg-inline--fa fa-github-alt fa-w-15 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg="">
                <path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
/*  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', to: { name: 'index' } },
        { title: 'Inspire', icon: 'lightbulb', to: { name: 'inspire' } }
      ]
    }
  }*/
}
</script>
