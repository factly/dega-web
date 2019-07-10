<template>
  <div class="main-content">
    <div v-if="userModule && this.$auth.loggedIn">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">User Info</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Name" v-model="user.name">
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="text" :value="user.email" placeholder="Text input" readonly>
              </div>
            </div>
            <div class="field">
              <label class="label">Gender</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" value="male" v-model="user.gender" >
                  Male
                </label>
                <label class="radio">
                  <input type="radio" value="female" v-model="user.gender" >
                  Female
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label">Date of Birth</label>
              <div class="control">
                <b-datepicker
                  placeholder="Type or select a date..."
                  icon="calendar-today"
                  editable
                  v-model="user.dob"
                  :max-date="new Date()"
                >
                </b-datepicker>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-link" v-on:click="update">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <LostBox />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      userModule: process.env.userModule,
      user: this.$auth.user,
    }
  },
  methods: {
    update() {
      let { name, gender, dob} = this.user
      const updateUserInfo = axios({
        method: 'POST',
        url: process.env.userDataApiUri + '/user/update',
        data: {
          user: { name, gender, dob}, 
          accessToken: this.$auth.getToken('social')
        }
      })
      updateUserInfo.then(response => {
        if (response.data.success) {
          this.$auth.fetchUser().then(() => {
            this.user = this.$auth.user
          })
        }
      })
    }
  }
}
</script>