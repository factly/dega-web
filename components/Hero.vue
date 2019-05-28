<template>
  <div class="columns is-vcentered is-centered">
    <div class="column is-6">
      <div class="card">
        <div class="card-image">
          <figure class="image is-5by3">
            <img
              :src="story.featured_media"
              alt="Factcheck"
              style="border-radius: 0px 0px 0px 0px;"
            >
          </figure>
        </div>
      </div>
    </div>
    <div class="column is-5">
      <div class="content subtitle has-text-centered">
        <p
          class="title is-size-5 is-size-4-tablet is-size-3-mobile is-size-3-desktop has-text-centered-desktop"
        >{{ story.title }}</p>
      </div>
      <div
        v-if="story.authors"
        class="subtitle is-6 is-uppercase has-text-centered is-size-3-mobile"
      >
        BY
        <span v-for="(author, index) in story.authors" :key="index">
          <nuxt-link :to="'/author/' + author.slug">{{ author.display_name }}</nuxt-link>
          <span v-if="index != story.authors.length -1">,</span>
        </span>
      </div>
      <div class="has-text-centered is-size-4-mobile">{{ getDate(story.last_updated_date) }}</div>
      <br>
      <div v-if="userModule">
        <Button v-if="!saved" class="button is-icon" @click="save()">
          <span class="icon" style="color: #55acee;">
            <!--<svg class="svg-inline--fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">-->
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
        <Button v-if="saved" class="button" @click="undoSave()">
          <span class="icon" style="color: #55acee;">
            <!--<svg class="svg-inline--fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">-->
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
      <div class="has-text-justified is-hidden-mobile">{{ story.excerpt }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    console.log(process.env.userModule, Boolean(process.env.userModule))
    if (process.env.userModule === 'true') {
      let type = this.story._class
        .split('.')
        .pop()
        .toLowerCase()
      if (
        this.$auth.loggedIn &&
        this.$auth.user.prefs &&
        this.$auth.user.prefs[type]
      ) {
        console.log(this.$auth.user.prefs.posts)
        console.log({
          saved: this.$auth.user.prefs[type].includes(this.story._id)
        })
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
    },
    categories: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    save() {
      console.log('categories', this.categories)
      console.log('story', this.story)
      /* eslint no-underscore-dang  le: 0 */
      console.log(
        'type',
        this.story._class
          .split('.')
          .pop()
          .toLowerCase()
      )
      const id = this.story._id
      console.log(id)
      console.log(this.$auth)
      if (this.$auth.loggedIn) {
        console.log('send save request')
        console.log(this.$auth.user)
        const save = axios({
          method: 'POST',
          url: process.env.userDataApiUri + '/story/save',
          data: {
            type: this.story._class
              .split('.')
              .pop()
              .toLowerCase(),
            id: id,
            user: {
              id: this.$auth.user.sub,
              mail: this.$auth.user.email
            },
            accessToken: this.$auth.getToken('social')
          }
        })
        save.then(response => {
          console.log(response)
          //debugger;
          if (response.data.success) {
            this.saved = true
            this.$auth.fetchUser()
          }
        })
      } else {
        console.log('redirect to login')
        this.$auth.loginWith('social').then(() => {
          console.log('Login Success')
        })
        //window.location.replace('/auth/login?redirect-url=/post')
        //window.location.href="http://bing.com";
      }
    },
    undoSave() {
      console.log(this.$auth.getToken('social'))
      /* eslint no-underscore-dangle: 0 */
      const id = this.story._id
      console.log(id)
      const save = axios({
        method: 'POST',
        url: process.env.userDataApiUri + '/story/unsave',
        data: {
          type: this.story._class
            .split('.')
            .pop()
            .toLowerCase(),
          id: id,
          user: {
            id: this.$auth.user.sub,
            mail: this.$auth.user.email
          },
          accessToken: this.$auth.getToken('social')
        }
      })
      save.then(response => {
        console.log(response)
        //debugger;
        if (response.data.success) {
          this.saved = false
          this.$auth.fetchUser()
          //this.$store.commit('oauth', []);
          //this.$login();
          //console.log(this.$$store.oauth.user.savedstory)
        }
      })
    },
    getDate(datetime) {
      const date = new Date(datetime)
      const ms = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`
    }
  }
}
</script>
