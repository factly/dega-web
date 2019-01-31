<template>
  <div style="margin: 5%;">
    <section class="hero-title has-text-centered">
      <!-- <div class="hero-body"> -->
        <div class="container post-article">
          <h1 class="title is-size-5 is-size-4-tablet is-size-3-desktop is-spaced is-2 has-text-weight-semibold">{{post[0].title}}</h1>
          <h2 class="subtitle is-size-6 is-size-6-tablet is-size-5-desktop" style="color: #555;">{{post[0].subTitle}}</h2>
          <i class="icon icon-award"></i>
          <span class="is-uppercase">
            BY
            <nuxt-link class="has-tint has-text-weight-semibold" :to="'/author/'+ post[0].authors[0].slug">{{post[0].authors[0].display_name}}</nuxt-link>
            <div class="has-text-centered">{{getDate(post[0].last_updated_date)}}</div>
          </span>
        </div>
      <!-- </div> -->
    </section>
    <!-- featured image-section -->
    <section class="section is-paddingless">
      <div class="container">
        <figure class="image is-2by1">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" style="border-radius: 5px 5px 5px 5px;">
        </figure>
      </div>
    </section>
    <!-- post content -->
    <section class="section">
      <div class="container">
        <article class="post has-text-justified" v-html="post[0].content">
          {{ post[0].content }}
        </article>
      </div>
    </section>
  </div>
</template>
<style>
/*.post {
  max-width: 800px;
  margin: auto;
  text-align: left;
  margin-bottom: 1rem;
  line-height: 1.85;
  font-size: 1.25rem;
  color: rgba(0,0,0,.8);
  margin-top:-80px;
}*/

.post-article{
  margin-top: 7%; 
  margin-bottom: 1%;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

</style>

<script>
import axios from 'axios'

export default {

  methods: {
    getDate(datetime) {
      let date = new Date(datetime);
      var ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return date.getDate() + ' ' + ms[date.getMonth()] + ' ' + date.getFullYear();
    } 
  },
  validate({ params }){
    return params.slug
  },
  async asyncData(params) {
    console.log(params.params.slug)
    const config = {
      url: 'http://127.0.0.1:8080/core/api/posts',
      method: 'get',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwUXo5YUVJVndiNmZrNUFDaVRhMTFaTU1JcC13QXRRak5ZYlU2OEtJVmlzIn0.eyJqdGkiOiIzNWNmYTBjZS1hY2FmLTQyNjAtYmRjMC1iNWQ4ZjNjNjM2NDgiLCJleHAiOjE1NDI4NTk4NDksIm5iZiI6MCwiaWF0IjoxNTQyODIzODQ5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJmYWN0bHkiLCJzdWIiOiI3ZDg0Nzc4YS1jMGJhLTQ0NTEtYjBlZS04MDkyMzM5M2Y4YTAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmYWN0bHkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJiZWQyY2RjMy1kYjE1LTQ1ZWQtODI4My03MDZiNDAyMDdjY2YiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjI0LjAuMSIsImNsaWVudElkIjoiZmFjdGx5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWZhY3RseSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMjQuMC4xIiwiZW1haWwiOiJzZXJ2aWNlLWFjY291bnQtZmFjdGx5QHBsYWNlaG9sZGVyLm9yZyJ9.XRmqklBLNllMzcqWeAIJ13GFPGktlUkCDCy-DISKubvA1GFyd3j3Tbk1-9iswwcFORGuwDXZUD9cH1542qjzBNpgwhOVfWDzuMaOaJe2mLqEy_PM2mUAWvsr9N47wOvuETI6eN2BwxifWgG2ra2xqz4Gfr6lCxbKATLpcogJ3A0P-stSERxy23mJBH2QkHEyFdrX7HuFd6xpiwM0BU9iGuw9VmoW2Eu7Xvetq0Z56W8a4K9tzd5hvYkut-Ee5HcMpkxNH3KpsLCOye4Hxr6dU_I0h-hkFjuyCuFwzgf-w8TaIpOFp4YUEabW6PC5J21UYw7PiScbzzmoTBCyrtNFxQ'
      }
    }
    return axios
      .get(`http://127.0.0.1:8000/api/v1/posts/?slug=${params.params.slug}`)
      .then(response => {
        const data = {
          post: response.data
        }
        console.log(response.data)
        return data
      })
      .catch(error => console.log(error))
  }
}
</script>





