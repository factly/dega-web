<template>

  <div>
    <!-- section for category description -->
    <section class="section-hero-title"> <br><br><br>
      <div class="container  has-text-centered">
        <div class="column ">
          <h1 class="title is-2 has-text-weight-bold"> Politics</h1>
        </div>
      </div>
    </section>

    <!--Section to list all the stories based on the categories-->
    <section class="section">
      <div class="container ">
        <div class="columns  is-centered is-multiline">
          <div class="column is-12">
            {{ articles }}
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import PostCard from "~/components/PostCard";

  export default {
    components: {
      PostCard
    },
    methods:{

    },
    async asyncData({ app }) {
      app.$axios.setToken(`eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJfWXBaSEhPYkljU2M2STFidC1rejZsWnI0TWZWX2FWdXJvbkt6bWhlRzRVIn0.eyJqdGkiOiJiMDRmNzExMi1mZjUyLTQ3NmItOWYwMC01NjIwNzk0M2ExZDAiLCJleHAiOjE1NDIxNzQzNTQsIm5iZiI6MCwiaWF0IjoxNTQyMTc0MDU0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJ3ZWJfYXBwIiwic3ViIjoiOTFhZWNjN2ItNzdmNS00OTZmLWFlMmMtMjc2NTU2MDNjOTAwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2ViX2FwcCIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjliMTgwNmEwLTgxNTgtNGEzMC05YmEyLTJkZWIxZjBkZWMxYiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwLyoiLCJodHRwOi8vbG9jYWxob3N0OjgxMDAvKiIsImh0dHA6Ly8xMjcuMC4wLjE6ODc2MS8qIiwiaHR0cDovL2xvY2FsaG9zdDo5MDAwLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbIm1hbmFnZS11c2VycyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgamhpcHN0ZXIgZW1haWwgcHJvZmlsZSIsImNsaWVudElkIjoid2ViX2FwcCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjE3Mi4yNC4wLjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtd2ViX2FwcCIsImNsaWVudEFkZHJlc3MiOiIxNzIuMjQuMC4xIiwiZW1haWwiOiJzZXJ2aWNlLWFjY291bnQtd2ViX2FwcEBwbGFjZWhvbGRlci5vcmcifQ.MEajBDfdLKfFo33vH8QwVnZZAcfgSd0h1ILo-QmbXbpu2zHnFbuLu0nqy4F-jO4YR9Zr_6kv6lCG8S6XILAU5C6_ZDAhqChNZTnGbajDbzkQ-hD1jEYTuFDo6cNrOMtpgKN-Jb8yzV3o9hF5X3wtKlN77VuEq8kGXuv3eMx4biSNDqGoqw7CKswwqWesbWaC0mDwCTuL8iHX524n5aCWe5SkqTVGfZBVsbWdwYXwDkmvj4Z4kTqLROibq4JZA4omCb3mu4_KosUP6CecCEb2qRmn5rE3XPKMDxo8pBmQk2LifBYU9BbfIINtTkXjC-9jvLex5GXgL7tn-zIBdzor_g`, 'Bearer')
      //const { articles } = await app.$axios.$get(`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=38d4f01031e447458603f95adc9d16c0`)
      const { articles } = await app.$axios.$get(`http://localhost:9080/auth/admin/realms/jhipster/users`)
      return { articles }
    }
  }
</script>
