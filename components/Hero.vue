<template>
  <div class="columns is-vcentered is-centered">
    <div class= "column is-6">
      <div class="card">
        <div class="card-image">
          <figure class ="image is-5by3">
            <img
              :src="story.featured_media"
              alt="Factcheck"
              style="border-radius: 0px 0px 0px 0px;">
          </figure>
        </div>
      </div>
    </div>
    <div class= "column is-5" >
      <div class="content subtitle has-text-centered">
        <p class="title is-size-5 is-size-4-tablet is-size-3-mobile is-size-3-desktop has-text-centered-desktop">{{ story.title }}</p>
      </div>
      <div
        v-if="story.authors"
        class="subtitle is-6 is-uppercase has-text-centered is-size-3-mobile">
        BY
        <span
          v-for="(author, index) in story.authors"
          :key="index" >
          <nuxt-link :to="'/author/' + author.slug">
            {{ author.display_name }}
          </nuxt-link>
          <span v-if="index != story.authors.length -1">, </span>
        </span>
      </div>
      <div class="has-text-centered is-size-4-mobile">{{ getDate(story.last_updated_date) }}</div><br>
      <div>
        <Button v-if="!liked" class="button is-primary" @click="like()">Like</Button>
        <Button v-if="liked" class="button" @click="undoLike()">Like</Button>
      </div>
      <div class="has-text-justified is-hidden-mobile ">
        {{ story.excerpt }}
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {

  data(){
    
    if(this.$store.state.oauth.accessToken){
      console.log(this.$store.state.oauth.user.prefs.likedPost);
      console.log({liked:this.$store.state.oauth.user.prefs.likedPost.includes(this.story._id)})
      return {liked:this.$store.state.oauth.user.prefs.likedPost.includes(this.story._id)}
    }
    else
      return {liked:false}
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
    like(){
/* eslint no-underscore-dangle: 0 */
        const id = this.story._id;
        console.log(id);
        if(this.$store.state.oauth.accessToken){
          console.log("send like request");
          console.log(this.$store.state.oauth.user);
          const like  = axios({
            method:"POST",
            url:process.env.userDataApiUri+"/likepost",
            data:{
              "postId":id,
              "user":{
                "id":this.$store.state.oauth.user.sub,
                "mail":this.$store.state.oauth.user.email
              },
              "accessToken":this.$store.state.oauth.accessToken
            }
          })
          like.then((response)=>{
            console.log(response);
            //debugger;
            if(response.data.success){
              this.liked = true;
              let { oauth }= this.$store.state;
              oauth.user.prefs.likedPost.push(id);
              console.log(this.$store.state.oauth);
              this.$store.commit('oauth/user',oauth.user);
              //this.$store.state.oauth.mutate('user',user);
              console.log(this.$store.state.oauth);
            }
          })
        }    
        else{
          console.log("redirect to login");
          window.location.replace('/auth/login?redirect-url=/post')
          //window.location.href="http://bing.com";
      }
    },
    undoLike(){
       console.log(this.$store.state.oauth.user);
/* eslint no-underscore-dangle: 0 */
        const id = this.story._id;
        console.log(id);
          const like  = axios({
            method:"POST",
            url:process.env.userDataApiUri+"/undolikepost",
            data:{
              "postId":id,
              "user":{
                "id":this.$store.state.oauth.user.sub,
                "mail":this.$store.state.oauth.user.email
              },
              "accessToken":this.$store.state.oauth.accessToken
            }
          })
          like.then((response)=>{
            console.log(response);
            //debugger;
            if(response.data.success){
              this.liked = false;
               //this.$store.commit('oauth', []);
               //this.$login();
               //console.log(this.$$store.oauth.user.likedPost)
            }
          })
    },
    getDate(datetime) {
      const date = new Date(datetime);
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
        'Dec',
      ];
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`;
    }
  }
};
</script>
