<template>
  <div>
    <nav
      class="navbar header has-shadow is-spaced is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link
          :to="localePath('index')"
          class="navbar-item">
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
            :to="localePath({ name:'collection', params: { collection: 'posts'} })"
            class="navbar-item">{{ $t('header.stories') }}</nuxt-link>
          <nuxt-link
            :to="localePath({ name:'collection-slug', params: { collection: 'category', slug: 'fake-news' } })"
            class="navbar-item">
            {{ $t('header.fake_news') }}
          </nuxt-link>
          <nuxt-link
            :to="localePath({ name:'collection-slug', params: { collection: 'category', slug: 'video' }})"
            class="navbar-item">{{ $t('header.videos') }}</nuxt-link>
          <nuxt-link
            :to="localePath({ name:'collection', params: { collection: 'factchecks'} })"
            class="navbar-item">{{ $t('header.fact_check') }}</nuxt-link>

        </div>
        <div class="navbar-end">
          <div class="navbar-item is-hidden-touch is-hidden-desktop-only">
            <SocialLink
              :organisation="organisation"
            />
          </div>
          <div
            v-if="userModule && !loggedIn"
            class="navbar-item">
            <a
              class="navbar-item button"
              @click="login()">
              <span class="icon">
                <i class="mdi mdi-account"/>
              </span>
              <span>Sign Up / Log In</span>
            </a>
          </div>
          <div
            v-if="userModule && loggedIn"
            class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link button has-dropdown">
              <span class="icon">
                <i class="mdi mdi-account"/>
              </span>
              <span>Account</span>
            </a>
            <div class="navbar-dropdown is-right">
              <div>
                <nuxt-link
                  to="/saved"
                  class="navbar-item">
                  <span class="icon is-size-4">
                    <i class="mdi mdi-bookmark"/>
                  </span>
                  <span>Saved</span>
                </nuxt-link>
                <nuxt-link
                  to="/profile"
                  class="navbar-item">
                  <span class="icon is-size-4">
                    <i class="mdi mdi-account-settings-variant"/>
                  </span>
                  <span>Profile</span>
                </nuxt-link>
                <a
                  class="navbar-item has-text-danger"
                  @click="logout()">
                  <span class="icon is-size-4">
                    <i class="mdi mdi-logout-variant"/>
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
      <div class="container">
        <div class="columns">
          <div class="column is-3 ">
            <ul>
              <li>
                <p class="is-size-6">
                  <nuxt-link
                    :to="localePath('page-about-us')"
                    class="has-text-black"
                  >About us
                  </nuxt-link>
                </p>
              </li>
              <li>
                <p class="is-size-6">
                  <nuxt-link
                    :to="localePath('page-corrections-policy')"
                    class="has-text-black">Corrections Policy
                  </nuxt-link>
                </p>
              </li>
              <li>
                <p class="is-size-6">
                  <nuxt-link
                    :to="localePath('page-team')"
                    class="has-text-black">Team
                  </nuxt-link>
                </p>
              </li>
              <li>
                <p class="is-size-6">
                  <nuxt-link
                    :to="localePath('page-fact-check-methodology')"
                    class="has-text-black">Fact Check Methodology
                  </nuxt-link>
                </p>
              </li>
              <li>
                <p class="is-size-6">
                  <nuxt-link
                    :to="localePath('page-submit-a-claim')"
                    class="has-text-black">Submit a Claim
                  </nuxt-link>
                </p>
              </li>
              <li>
                <p class="is-size-6">
                  <nuxt-link
                    :to="localePath('page-funding-details')"
                    class="has-text-black">Funding Details
                  </nuxt-link>
                </p>
              </li>
              <li>
                <p class="is-size-6">
                  <nuxt-link
                    :to="localePath('page-contact-us')"
                    class="has-text-black">Contact Us
                  </nuxt-link>
                </p>
              </li>
              <li>
                <p class="is-size-6">
                  <nuxt-link
                    :to="localePath('page-privacy-policy')"
                    class="has-text-black">Privacy Policy
                  </nuxt-link>
                </p>
              </li>
            </ul>
          </div>
          <div class="column is-3"/>
          <div class="column is-3"/>
          <div class="column is-3">
            <p class="is-size-6">Connect with us</p>
            <SocialLink
              :organisation="organisation"
              name
              way="horizontal"
              icon_size="is-size-6"
            />
          </div>
        </div>
    </div></footer>
  </div>
</template>

<script>
import DefaultImage from '~/assets/images/dega-default-image.png';
import SocialLink from '@/components/SocialLinks';

export default {
  components: {
    SocialLink
  },
  data() {
    return {
      toggleNavBar: false,
      toggleMore: true,
      loggedIn: this.$auth.loggedIn,
      userModule: process.env.userModule,
      organisation: Object
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  },
  created() {
    this.organisation = this.$store.getters.getOrganisation;
  },
  methods: {
    logout() {
      const url = `${process.env.logoutUri}?redirect_uri=${process.env.baseUrl}`;
      const logout = this.$auth.logout();
      logout.then(() => {
        window.location.replace(encodeURI(url));
      });
    },
    async login() {
      this.$auth.loginWith('social');
    }
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
