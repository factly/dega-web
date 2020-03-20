<template>
  <div
    :class="way === 'vertical' ? 'is-grouped': ''"
    class="field">
    <div
      v-if="organization.facebook_url"
      class="control">
      <a
        :href="organization.facebook_url"
        target="_blank"
      >
        <span
          :class="icon_size"
          class="icon facebook-color">
          <i class="mdi mdi-facebook"/>
        </span>
        <span
          v-if="name"
          class="is-size-6 has-text-black">
          Facebook
        </span>
      </a>
    </div>
    <div
      v-if="organization.twitter_url"
      class="control">
      <a
        :href="organization.twitter_url"
        target="_blank"
      >
        <span
          :class="icon_size"
          class="icon twitter-color">
          <i class="mdi mdi-twitter"/>
        </span>
        <span
          v-if="name"
          class="is-size-6 has-text-black">
          Twitter
        </span>
      </a>
    </div>
    <div
      v-if="organization.youTube_url"
      class="control">
      <a
        :href="organization.youTube_url"
        target="_blank"
      >
        <span
          :class="icon_size"
          class="icon youtube-color">
          <i class="mdi mdi-youtube"/>
        </span>
        <span
          v-if="name"
          class="is-size-6 has-text-black">
          Youtube
        </span>
      </a>
    </div>
    <div
      v-if="organization.github_url"
      class="control">
      <a
        :href="organization.github_url"
        target="_blank"
      >
        <span
          :class="icon_size"
          class="icon github-color">
          <i class="mdi mdi-github-circle"/>
        </span>
        <span
          v-if="name"
          class="is-size-6 has-text-black">
          Github
        </span>
      </a>
    </div>
    <div
      v-if="organization.pinterest_url"
      class="control">
      <a
        :href="organization.pinterest_url"
        target="_blank"
      >
        <span
          :class="icon_size"
          class="icon pinterest-color">
          <i class="mdi mdi-pinterest"/>
        </span>
        <span
          v-if="name"
          class="is-size-6 has-text-black">
          Pinterest
        </span>
      </a>
    </div>
    <div
      v-if="organization.linked_in_url"
      class="control">
      <a
        :href="organization.linked_in_url"
        target="_blank"
      >
        <span
          :class="icon_size"
          class="icon linkedin-color">
          <i class="mdi mdi-linkedin"/>
        </span>
        <span
          v-if="name"
          class="is-size-6 has-text-black">
          Linkedin
        </span>
      </a>
    </div>
    <div
      v-if="organization.whatsapp_url"
      class="control">
      <a
        :href="organization.whatsapp_url"
        target="_blank"
      >
        <span
          :class="icon_size"
          class="icon whatsapp-color">
          <i class="mdi mdi-whatsapp"/>
        </span>
        <span
          v-if="name"
          class="is-size-6 has-text-black">
          Whatsapp
        </span>
      </a>
    </div>
    <div
      v-if="organization.instagram_url"
      class="control">
      <a
        :href="organization.instagram_url"
        target="_blank"
      >
        <span
          :class="icon_size"
          class="icon instagram-color">
          <i class="mdi mdi-instagram"/>
        </span>
        <span
          v-if="name"
          class="is-size-6 has-text-black">
          Instagram
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    organization: {
      type: Object,
      required: true
    },
    way: {
      type: String,
      default: 'vertical'
    },
    name: {
      type: Boolean,
      default: false
    },
    icon_size: {
      type: String,
      default: 'is-size-4'
    }
  }
};
</script>
