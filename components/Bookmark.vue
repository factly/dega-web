<template>
  <a class="button is-white">
    <span
      class="icon is-size-4"
      @click="saved ? undoSave() : save()">
      <i
        :class="saved ? 'mdi-bookmark-remove' : 'mdi-bookmark-outline'"
        class="mdi"/>
    </span>
  </a>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    const { type } = this;
    let saved = false;

    if (this.$auth.loggedIn && this.$auth.user.prefs && this.$auth.user.prefs[this.type] && this.$auth.user.prefs[type].includes(this.id)) {
      saved = true;
    }
    return {
      saved
    };
  },
  methods: {
    save() {
      if (this.$auth.loggedIn) this.$auth.loginWith('social');

      axios({
        method: 'POST',
        url: `${process.env.USER_DATA_API_URI}/story/save`,
        data: {
          type: this.type,
          id: this.id,
          user: this.$auth.user,
          accessToken: this.$auth.getToken('social')
        }
      }).then((response) => {
        if (response.data.success) {
          this.saved = true;
          this.$auth.fetchUser();
        }
      });
    },
    undoSave() {
      /* eslint no-underscore-dangle: 0 */
      axios({
        method: 'POST',
        url: `${process.env.USER_DATA_API_URI}/story/unsave`,
        data: {
          type: this.type,
          id: this.id,
          user: this.$auth.user,
          accessToken: this.$auth.getToken('social')
        }
      }).then((response) => {
        if (response.data.success) {
          this.saved = false;
          this.$auth.fetchUser();
        }
      });
    }
  }
};
</script>
