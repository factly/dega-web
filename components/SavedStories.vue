<template>
  <div v-if="stories.length > 0">
    <StoryPreview
      v-for="(p, index) in stories"
      :key="index"
      :story="p"
    />
  </div>
  <div
    v-else
    class="subtitle is-6 is-uppercase has-text-centered">
    You havent bookmarked any {{ type }} stories.<br>
  </div>
</template>
<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';

export default {
  components: {
    StoryPreview
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      stories: []
    };
  },
  watch: {
    type() {
      this.callSaved();
    }
  },
  mounted() {
    this.callSaved();
  },
  methods: {
    callSaved() {
      axios.post(
        `${process.env.userDataApiUri}/saved/${this.type}`,
        {
          user: { sub: this.$auth.user.sub },
          accessToken: this.$auth.getToken('social')
        }
      )
        .then((response) => {
          this.stories = response.data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
