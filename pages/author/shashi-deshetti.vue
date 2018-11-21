
<template>

  <div>
    <!-- section for category description -->
    <section class="section-hero-title"> <br><br><br>
      <div class="container  has-text-centered">
        <div class="column ">
          <h1 class="title is-2 has-text-weight-bold">SHASHI DESHETTI</h1>
          <h2 class="subtitle is-size-6 is-size-6-tablet is-size-5-desktop" style="color: #555;">Shashi is Software Analyst by Profession and is passionate about Films, Politics and Technology.</h2>
        </div>
      </div>
    </section>


    <!--Section to list all the stories based on the categories-->
    <section class="section">
      <div class="container ">
        <div class="columns  is-centered is-multiline">
          <div
            v-for="(p, index) in posts"
            :key="index"
            class="column is-6">
            <a v-bind:href="'/post/'+ p.id">
              <PostCard :post="p"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import PostCard from '~/components/PostCard'
import axios from 'axios'

export default {
  components: {
    PostCard
  },
  methods: {},
  async asyncData() {
    const config = {
      url: 'http://127.0.0.1:8080/core/api/posts',
      method: 'get',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwUXo5YUVJVndiNmZrNUFDaVRhMTFaTU1JcC13QXRRak5ZYlU2OEtJVmlzIn0.eyJqdGkiOiIzNWNmYTBjZS1hY2FmLTQyNjAtYmRjMC1iNWQ4ZjNjNjM2NDgiLCJleHAiOjE1NDI4NTk4NDksIm5iZiI6MCwiaWF0IjoxNTQyODIzODQ5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJmYWN0bHkiLCJzdWIiOiI3ZDg0Nzc4YS1jMGJhLTQ0NTEtYjBlZS04MDkyMzM5M2Y4YTAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmYWN0bHkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJiZWQyY2RjMy1kYjE1LTQ1ZWQtODI4My03MDZiNDAyMDdjY2YiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjI0LjAuMSIsImNsaWVudElkIjoiZmFjdGx5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWZhY3RseSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMjQuMC4xIiwiZW1haWwiOiJzZXJ2aWNlLWFjY291bnQtZmFjdGx5QHBsYWNlaG9sZGVyLm9yZyJ9.XRmqklBLNllMzcqWeAIJ13GFPGktlUkCDCy-DISKubvA1GFyd3j3Tbk1-9iswwcFORGuwDXZUD9cH1542qjzBNpgwhOVfWDzuMaOaJe2mLqEy_PM2mUAWvsr9N47wOvuETI6eN2BwxifWgG2ra2xqz4Gfr6lCxbKATLpcogJ3A0P-stSERxy23mJBH2QkHEyFdrX7HuFd6xpiwM0BU9iGuw9VmoW2Eu7Xvetq0Z56W8a4K9tzd5hvYkut-Ee5HcMpkxNH3KpsLCOye4Hxr6dU_I0h-hkFjuyCuFwzgf-w8TaIpOFp4YUEabW6PC5J21UYw7PiScbzzmoTBCyrtNFxQ'
      }
    }
    return axios
      .get(`http://127.0.0.1:8080/core/api/posts?access_token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwUXo5YUVJVndiNmZrNUFDaVRhMTFaTU1JcC13QXRRak5ZYlU2OEtJVmlzIn0.eyJqdGkiOiIzNWNmYTBjZS1hY2FmLTQyNjAtYmRjMC1iNWQ4ZjNjNjM2NDgiLCJleHAiOjE1NDI4NTk4NDksIm5iZiI6MCwiaWF0IjoxNTQyODIzODQ5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJmYWN0bHkiLCJzdWIiOiI3ZDg0Nzc4YS1jMGJhLTQ0NTEtYjBlZS04MDkyMzM5M2Y4YTAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmYWN0bHkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJiZWQyY2RjMy1kYjE1LTQ1ZWQtODI4My03MDZiNDAyMDdjY2YiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjI0LjAuMSIsImNsaWVudElkIjoiZmFjdGx5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWZhY3RseSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMjQuMC4xIiwiZW1haWwiOiJzZXJ2aWNlLWFjY291bnQtZmFjdGx5QHBsYWNlaG9sZGVyLm9yZyJ9.XRmqklBLNllMzcqWeAIJ13GFPGktlUkCDCy-DISKubvA1GFyd3j3Tbk1-9iswwcFORGuwDXZUD9cH1542qjzBNpgwhOVfWDzuMaOaJe2mLqEy_PM2mUAWvsr9N47wOvuETI6eN2BwxifWgG2ra2xqz4Gfr6lCxbKATLpcogJ3A0P-stSERxy23mJBH2QkHEyFdrX7HuFd6xpiwM0BU9iGuw9VmoW2Eu7Xvetq0Z56W8a4K9tzd5hvYkut-Ee5HcMpkxNH3KpsLCOye4Hxr6dU_I0h-hkFjuyCuFwzgf-w8TaIpOFp4YUEabW6PC5J21UYw7PiScbzzmoTBCyrtNFxQ`)
      .then(response => {
        const data = {
          posts: response.data
        }
        return data
      })
      .catch(error => console.log(error))
  }
}
</script>




