<template>
  <div>
    <!-- featured post section-->
    <section class="section is-hero">
      <div class="container">
        <figure class ="image is-5by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
        <nuxt-link :to="'/post/'+ posts[0].slug">
          <div class="content column">
            <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop"> {{posts[0].title}}</p>
            <div class="has-text-centered">
              <span class="subtitle is-6 is-uppercase">BY {{posts[0].authors[0].display_name}}, </span>
              <time datetime="2016-1-1">{{posts[0].last_updated_date}}</time>
            </div>
            <div class="content subtitle is-hidden-mobile has-text-centered">
              <p>{{posts[0].subTitle}}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </section>
    <hr class="spacer is-1-5 is-hidden-mobile">
    <!-- Latest Stories Section -->


    <!-- MORE STORIES Section -->
    <section class="section">
      <h3>MORE STORIES</h3>
      <br>
      <div
        v-for="(p, index) in posts"
        :key="index"
        class="container columns">
        <nuxt-link :to="'/post/'+ p.slug">
          <MoreStories :post="p"/>
        </nuxt-link>
      </div>

    </section>

  </div>
</template>

<script>
  import PostCard from '~/components/PostCard'
  import axios from 'axios'
  import MoreStories from "~/components/MoreStories";

  export default {
    components: {
      MoreStories,
      PostCard
    },
    methods: {},
    validate({ params }){
      return params.slug
    },
    async asyncData(params) {
      const config = {
        url: 'http://127.0.0.1:8000/core/api/posts',
        method: 'get',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwUXo5YUVJVndiNmZrNUFDaVRhMTFaTU1JcC13QXRRak5ZYlU2OEtJVmlzIn0.eyJqdGkiOiI1ZjcxYmY2Ny02ZGVhLTQ2MmQtYTU4ZS0zMmViYzI0NTE4M2IiLCJleHAiOjE1NDI4MjM4NjcsIm5iZiI6MCwiaWF0IjoxNTQyODIzNTY3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJmYWN0bHkiLCJzdWIiOiI3ZDg0Nzc4YS1jMGJhLTQ0NTEtYjBlZS04MDkyMzM5M2Y4YTAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmYWN0bHkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiIwNzFjYmIzOC01Y2Y5LTQwOTItYWNmYy0yNjIwM2Y0MDMwNjEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjI0LjAuMSIsImNsaWVudElkIjoiZmFjdGx5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWZhY3RseSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMjQuMC4xIiwiZW1haWwiOiJzZXJ2aWNlLWFjY291bnQtZmFjdGx5QHBsYWNlaG9sZGVyLm9yZyJ9.oj635dBWUs6aA28iOKW9XDJtZg-vT_3KueonJOxv4eKm_m_-mKwLxFenLG5F6xqpREPmMY89-Yl6Yo7683ALO9FSdjf6KSGdMaRVMLMxSTYRjKrpDHz7F0F0mn2fIl54AAdnl5CEiJ9Ol2dOdJBQFngRFQs8-Ww8Wkm0ZEmfIND4B_hLFgA5QeO0dzG6ZzCJiV3vY1yNZ1vvZPct5s_5v4D1bdNFLnrRURtzqITmQ9Ug-JMAQZ6nCdna6X-lJVkrNUD8sFm1dMGB2ixc73EYuhtsstk-j_5sa_3dsLnXgLLcTXcJ-EPTzyByznSN44xKceeOs-OX9Qydy3rKt6xzgQ'
        }
      }
      return axios
        .get(`http://127.0.0.1:8000/api/v1/posts/?category=${params.params.slug}`)
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
