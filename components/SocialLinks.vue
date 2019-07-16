<template>
  <div class="field is-grouped">
    <p
      v-if="organisation.facebook_url"
      class="control">
      <a
        :href="organisation.facebook_url"
        target="_blank"
      >
        <span class="icon is-size-4 facebook-color">
          <i class="mdi mdi-facebook"/>
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
          <i class="mdi mdi-twitter"/>
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
          <i class="mdi mdi-youtube"/>
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
          <i class="mdi mdi-github-circle"/>
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
          <i class="mdi mdi-tumblr"/>
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
          <i class="mdi mdi-pinterest"/>
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
          <i class="mdi mdi-linkedin"/>
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
          <i class="mdi mdi-whatsapp"/>
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
          <i class="mdi mdi-instagram"/>
        </span>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    organisation: {
      type: Object,
      required: true
    }
  }
};
</script>
