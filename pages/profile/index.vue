<template>
  <div class="main-content">
    <div v-if="this.$auth.loggedIn">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">User Info</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  v-model="user.name"
                  class="input"
                  type="text"
                  placeholder="Name">
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  :value="user.email"
                  class="input"
                  type="text"
                  placeholder="Text input"
                  readonly>
              </div>
            </div>
            <div class="field">
              <label class="label">Gender</label>
              <div class="control">
                <label class="radio">
                  <input
                    v-model="user.gender"
                    type="radio"
                    value="male" >
                  Male
                </label>
                <label class="radio">
                  <input
                    v-model="user.gender"
                    type="radio"
                    value="female" >
                  Female
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label">Date of Birth</label>
              <div class="control">
                <b-datepicker
                  v-model="user.dob"
                  :max-date="new Date()"
                  placeholder="Select a date..."
                  icon="calendar-today"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button
                  class="button is-link"
                  @click="update">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    const userTemp = { ...this.$auth.user };
    userTemp.dob = new Date(userTemp.dob);
    return {
      user: userTemp
    };
  },
  async asyncData({ error }) {
    if (!process.env.userModule) error({ code: 404, message: 'You have been lost', homepage: true });
  },
  methods: {
    update() {
      const {
        name, gender, dob, sub
      } = this.user;
      const updateUserInfo = axios({
        method: 'POST',
        url: `${process.env.userDataApiUri}/user/update`,
        data: {
          user: {
            name, gender, dob, sub
          },
          accessToken: this.$auth.getToken('social')
        }
      });
      updateUserInfo.then((response) => {
        if (response.data.success) {
          this.$auth.fetchUser();
        }
      });
    }
  }
};
</script>
