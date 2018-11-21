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
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHWmdiX19JaUVjRG9sRmZLM1E2VDZLQzFGZkdwZXprNFA4UmxzMHhDT1k4In0.eyJqdGkiOiIzYjIzYThkOS0yMzRhLTRiNjgtODFmOS1mYjY0ZDBjYzY1NDAiLCJleHAiOjE1NDIyODY4OTMsIm5iZiI6MCwiaWF0IjoxNTQyMjUwODkzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJ3ZWJfYXBwIiwic3ViIjoiZmVmMDU0NTQtNDM5Zi00ZDU5LWE1ZmYtNDk3YjRhNmRkZTBmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2ViX2FwcCIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjM3NzNjYmVjLWE1MDYtNDk1Zi1iNTBhLTA2MTAzNWM4MDcwYiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwLyoiLCJodHRwOi8vbG9jYWxob3N0OjgxMDAvKiIsImh0dHA6Ly8xMjcuMC4wLjE6ODc2MS8qIiwiaHR0cDovL2xvY2FsaG9zdDo5MDAwLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBqaGlwc3RlciBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjE4LjAuMSIsImNsaWVudElkIjoid2ViX2FwcCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC13ZWJfYXBwIiwiY2xpZW50QWRkcmVzcyI6IjE3Mi4xOC4wLjEiLCJlbWFpbCI6InNlcnZpY2UtYWNjb3VudC13ZWJfYXBwQHBsYWNlaG9sZGVyLm9yZyJ9.Nir2Z2Tn-qKKLMswN-XvdUzVTXceasinVz-yp8RzkwnhyYMAqySTKeNcePQNtLKLO--rUkJxoKzRIUxGeFEU5ggRLIyAfCjEOdCMCJOQ83u1bt0MUs5pGTpW46ccmIlAQBpTFaB0YfSCj1xZy7jzEll8i758dW_f2n6ki6UeiJzPuk5-C_ReEdFjlYuEEWU6uNOfKE4BACX0BIw6wuDN3WggdIhKvCla2EEex9Ru08Aa1opLkqeL1BjDBuoHQrdllBZciBqxjKIEQYP072I_BUtbTgsuKfU7Lc8qyPh744Afm_7s7e4YRjVVw_JWw_-kT8K_3FRk_ab2Yh0OW0Eo8w'
      }
    }
    return axios
      .get(`http://127.0.0.1:8080/core/api/posts?access_token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3S05OTi1hY2NZeVIzdGdwMy1xd1R3TXdLaUl2MFlSUWVsNFRhZ3IybWJvIn0.eyJqdGkiOiJjYzE0MjFlMi1kYjdkLTRkZTItYjE2Yi0yNzZjYjI3ZThhZWMiLCJleHAiOjE1NDIyOTkzNjEsIm5iZiI6MCwiaWF0IjoxNTQyMjYzMzYxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJmYWN0bHkiLCJzdWIiOiIzZTQ5MjFkYS01YjBlLTQ4NTgtYTNiOS1iNjI4N2EzYWRhODYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmYWN0bHkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiIzYzRmMWRlMy1lZjBiLTQ4NzYtYTJjNS0xZjhiNDM4MjdkOTciLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjI0LjAuMSIsImNsaWVudElkIjoiZmFjdGx5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWZhY3RseSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMjQuMC4xIiwiZW1haWwiOiJzZXJ2aWNlLWFjY291bnQtZmFjdGx5QHBsYWNlaG9sZGVyLm9yZyJ9.GN0Jw1vtFOY8Y5xsRRu_KLPiX5Tcv-GJr0pX8qcENjmy3rii1SwRANAsDDZHxH84sIwdJ1p-wGK9pxSV586wWq-AhlVKCLsheuCtMR8aPZvC3scxqp1GsDtsiHYszcAm64Jt9iY3BqKgBfeWFehuC4eMacPJNfkfgAy2eztAfZU2DQ1jdHQeMmUBue3XnZNIB-8KrshplQZRUi_odgtFAnGZJKH-jcvMubHvbw8jUi00TJuChB_hnWFxlWu2vPAffMFA7yHtbOKrLFis5wEWu5f3PEj3X_06bhywpPk_88xG1vBJUDGh8zCV5o7VpJR3lM2TchesqagP-v93bAbv8Q`)
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
