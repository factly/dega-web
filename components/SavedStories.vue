<template>
  <div v-if="stories.length > 0">
    <StoryPreview
      v-for="(p, index) in stories"
      :key="index"
      :story="p"
    />
  </div>
  <div v-else class="subtitle is-6 is-uppercase has-text-centered">
    You havent bookmarked any {{ type }} stories.<br>
  </div>
</template>
<script>
import axios from 'axios';
import StoryPreview from '@/components/StoryPreview';

export default {
  components: {
    StoryPreview,
  },
  data() {
    return {
      stories: []
    };
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    callSaved: function() {
      console.log("Hello")
      axios.post(
        process.env.userDataApiUri+'/saved/'+this.type,
        {
          "user":this.$auth.user,
          "accessToken": this.$auth.getToken('social')
        }
      )
      .then((response)=>
      {
        this.stories = response.data
      })
      .catch(err => console.log(err)); 
    }
  },
  watch: {
    type: function(){
      this.callSaved()
    }
  },
  mounted() {
    this.callSaved()
  }
};
</script>
