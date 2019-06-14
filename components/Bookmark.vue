<template>
    <div v-if="userModule">
        <Button v-if="!saved" class="button is-icon" style="border-radius: 9999px;" v-on:click.stop="save()">
            <span class="icon" style="color: #55acee;">
            <svg
                width="1792"
                height="1792"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M1408 256h-1024v1242l423-406 89-85 89 85 423 406v-1242zm12-128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z"
                ></path>
            </svg>
            </span>
        </Button>
        <Button v-if="saved" class="button" style="border-radius: 9999px;" v-on:click.stop="undoSave()">
            <span class="icon" style="color: #55acee;">
            <svg
                width="1792"
                height="1792"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M1420 128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z"
                ></path>
            </svg>
            </span>
        </Button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    if (process.env.userModule === 'true') {
      const type = this.story._class
        .split('.')
        .pop()
        .toLowerCase()
      if (
        this.$auth.loggedIn &&
        this.$auth.user.prefs &&
        this.$auth.user.prefs[type]
      ) {
        return {
          saved: this.$auth.user.prefs[type].includes(this.story._id),
          type: type,
          userModule: true
        }
      } else return { saved: false, type: type, userModule: true }
    } else {
      return { userModule: false }
    }
  },
  props: {
    story: {
      type: Object,
      required: true,
      default: null
    }
  },
  methods: {
    save() {    
      const id = this.story._id
      if (this.$auth.loggedIn) {
        const save = axios({
          method: 'POST',
          url: process.env.userDataApiUri + '/story/save',
          data: {
            type: this.story._class
              .split('.')
              .pop()
              .toLowerCase(),
            id: id,
            user: this.$auth.user,
            accessToken: this.$auth.getToken('social')
            // accessToken: '1242342341324'
          }
        })
        save.then(response => {
          //debugger;
          if (response.data.success) {
            this.saved = true
            this.$auth.fetchUser()
          }
        })
      } else {
        this.$auth.loginWith('social').then(() => {
        })
      }
    },
    undoSave() {
      /* eslint no-underscore-dangle: 0 */
      const id = this.story._id
      const save = axios({
        method: 'POST',
        url: process.env.userDataApiUri + '/story/unsave',
        data: {
          type: this.story._class
            .split('.')
            .pop()
            .toLowerCase(),
          id: id,
          user: this.$auth.user,
          accessToken: this.$auth.getToken('social')
        }
      })
      save.then(response => {
        if (response.data.success) {
          this.saved = false
          this.$auth.fetchUser()
        }
      })
    },
  }
};
</script>