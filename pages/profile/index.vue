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
              <div v-if="!editing" v-on:click="edit" class="card-header-icon" aria-label="edit">
                <span class="icon" style="color: #333;">
                  <svg
                    width="1792"
                    height="1792"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div v-else v-on:click="cancelEditing" class="card-header-icon" aria-label="cancel">
                <span class="icon" style="color: #333;">
                  <svg
                    width="1792"
                    height="1792"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
                    ></path>
                  </svg>
                </span>
              </div>
            </header>
            <div class="card-content has-text-justified">
              <div class="content columns is-multiline">
                <div class="column is-half">Name</div>
                <div class="column is-half">{{ user.name }}</div>
                <div class="column is-half">Email</div>
                <div class="column is-half">{{ user.email }}</div>
                <div class="column is-half">Gender</div>
                <div class="column is-half">
                  <div v-if="!editing && user.gender!='Choose'">{{ user.gender }}</div>
                  <div v-else class="select">
                    <select v-model="gender">
                      <option disabled>Choose</option>
                      <option>Confidential</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div class="column is-half">Date Of Birth</div>
                <div class="column is-half">
                  <div
                    v-if="!editing && !user.isDOBConfidential && user.dob"
                  >{{user.dob.toLocaleString('en', {year: 'numeric', month: 'long', day: 'numeric' })}}</div>
                  <div
                    v-else-if="!editing && user.isDOBConfidential"
                  >Confidential</div>
                  <!-- <input v-else v-model="dob" style="width:40%" class="input" type="date"> -->
                  <div v-if="editing || !user.dob">
                    <b-field label="Select a date">
                      <b-datepicker v-if="!isDOBConfidential"
                        placeholder="Type or select a date..."
                        icon="calendar-today"
                        editable
                        v-model="dob"
                        :max-date="today"
                      ></b-datepicker>
                    </b-field>
                    <b-checkbox v-model="isDOBConfidential">
                        I dont want to reveal
                    </b-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a
                v-if="isDOBConfidential != user.isDOBConfidential || dob!==(user.dob) || gender!=user.gender "
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
    console.log('user', this.$auth.user)
    if (process.env.userModule === 'true' && this.$auth.loggedIn) {
      let { user } = this.$auth
      if (user.dob && user.dob!=="Confidential")
        user.dob = new Date(user.dob)
      if(user.dob==="Confidential"){
        user.isDOBConfidential = true
        user.dob = new Date()
      }
      //user["gender"] = "Male"
      //user.dob="10/12/15"
      if (!user.gender) {
        user.gender = 'Choose'
      }
      return {
        userModule: true,
        user: user,
        gender: user.gender,
        isDOBConfidential:user.isDOBConfidential,
        dob: user.dob,
        editing: false,
        today:new Date()
      }
    } else return { userModule: false }
  },
  methods: {
    update() {
      let modifiedUser = Object.assign({}, this.user)
      modifiedUser.gender = this.gender
      modifiedUser.dob = this.dob
      if(this.isDOBConfidential)
        modifiedUser.dob = "Confidential"
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
          this.editing = false
          this.$auth.fetchUser().then(() => {
            console.log('fetched User')
            this.user = this.$auth.user
            this.gender = this.user.gender
            if(this.user.dob==="Confidential"){
              this.user.isDOBConfidential = true
              this.user.dob = new Date()
            }
            if (this.user.dob!=="Confidential")
              this.user.dob = new Date(this.user.dob)
            this.dob = this.user.dob
            this.isDOBConfidential = this.user.isDOBConfidential
            console.log('gender', this.gender)
            console.log('dob', this.dob)
          })
        }
      })
    },
    edit() {
      this.editing = true
      console.log('edit')
    },
    cancelEditing() {
      this.editing = false
      this.gender = this.user.gender
      if (this.user.dob) this.user.dob = new Date(this.user.dob)
      this.dob = this.user.dob
    }
  }
}
</script>