<template>
  <div class="main-content">
    <div v-if="userModule && this.$auth.loggedIn">
      <div class="tabs">
        <ul>
          <li
            :class="active === 0 ? 'is-active' : null"
            @click="active = 0">
            <a>
              <span class="icon is-small">
                <i
                  class="mdi mdi-clipboard-text"
                  aria-hidden="true"/>
              </span>
              <span>Post</span>
            </a>
          </li>
          <li
            :class="active === 1 ? 'is-active' : null"
            @click="active = 1">
            <a>
              <span class="icon is-small">
                <i
                  class="mdi mdi-marker-check"
                  aria-hidden="true"/>
              </span>
              <span>Factchecks</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <SavedStories
          v-if="active === 0"
          type="posts"
        />
        <SavedStories
          v-if="active === 1"
          type="factchecks"
        />
      </div>
    </div>
    <div v-else>
      <LostBox />
    </div>
  </div>
</template>
<script>
import SavedStories from '@/components/SavedStories';
import LostBox from '@/components/LostBox';

export default {
  components: {
    SavedStories,
    LostBox
  },
  data() {
    return {
      userModule: process.env.userModule,
      active: 0
    };
  }
};
</script>
