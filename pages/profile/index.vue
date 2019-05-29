<template>
  <div class="columns">
    <div class="column is-12">
      <div class="main-content">
        <section class="hero-title has-text-centered container">
          <div>
            <p
              class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop"
            >Profile</p>
            <br>
          </div>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">User Info</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"/>
                </span>
              </a>
            </header>
            <div class="card-content has-text-justified">
              <div class="content columns is-multiline">
                <div class="column is-half">Name</div>
                <div class="column is-half">{{ user.name }}</div>
                <div class="column is-half">Email</div>
                <div class="column is-half">{{ user.email }}</div>
                <div class="column is-half">Gender</div>
                <div class="column is-half">
                  <div v-if="user.gender!='Choose'">{{ user.gender }}</div>
                  <div v-else class="select">
                    <select v-model="gender">
                      <option disabled>Choose</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div class="column is-half">Date Of Birth</div>
                <div class="column is-half">
                  <div v-if="user.dob">{{user.dob.toLocaleString('en', {year: 'numeric', month: 'long', day: 'numeric' })}}</div>
                  <!-- <input v-else v-model="dob" style="width:40%" class="input" type="date"> -->
                  <b-field  v-else label="Select a date">
                    <b-datepicker
                        placeholder="Type or select a date..."
                        icon="calendar-today"
                        editable
                        v-model="dob">
                    </b-datepicker>
                  </b-field>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a
                v-if="dob!==(user.dob) || gender!=user.gender"
                href="#"
                class="card-footer-item"
                v-on:click="update"
              >Update</a>
            </footer>
          </div>
          <br>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    console.log(this.$auth.user)
    if (process.env.userModule === 'true' && this.$auth.loggedIn) {
      let { user } = this.$auth
      if(user.dob)
      user.dob = new Date(user.dob)
      //user["gender"] = "Male"
      //user.dob="10/12/15"
      if (!user.gender) {
        user.gender = 'Choose'
      }
      return {
        userModule: true,
        user: user,
        gender: user.gender,
        dob: user.dob
      }
    } else return { userModule: false }
  },
  methods: {
    update() {
      let modifiedUser = Object.assign({}, this.user)
      modifiedUser.gender = this.gender
      modifiedUser.dob = this.dob
      console.log('modifiedUser', modifiedUser)
      if (modifiedUser['gender'] === 'Choose') modifiedUser['gender'] = null
      const updateUserInfo = axios({
        method: 'POST',
        url: process.env.userDataApiUri + '/user/update',
        data: {
          user: modifiedUser,
          accessToken: this.$auth.getToken('social')
        }
      })
      updateUserInfo.then(response => {
        console.log(response)
        //debugger;
        if (response.data.success) {
          this.$auth.fetchUser().then(() => {
            console.log('fetched User')
          this.user = this.$auth.user
          this.gender= this.user.gender;
          this.user.dob = new Date(this.user.dob)
          this.dob = this.user.dob;
          console.log("gender",this.gender)
          console.log("dob",this.dob)
          })
        }
      })
    }
  }
}
</script>