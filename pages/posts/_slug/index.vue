<template>
  <div>
    <section class="hero-title has-text-centered ">
      <div class="hero-body">
        <div class="container" >
          <h1 class=" title is-spaced is-2 has-text-weight-semibold">Government claims on
            the "Welfare of the Girl Child"</h1>
          <h2 class="subtitle is-5" style="color: #555;">An infographic published by the government claims that financial future has been secured for crores of girls in India.
          </h2>
          <a class="has-tint has-text-weight-semibold" href="http://127.0.0.1:3000/author/" target="_blank">
            <i class="icon icon-award"></i><span >BY AILA BANDAGI KANDLAKUNTA ON OCTOBER 10, 2018</span>
          </a>
        </div>
      </div>
    </section>
    <!-- image-section -->

    <section class="section">
      <!-- <div class="container"> -->
      <figure class="image is-2by1">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" style="border-radius: 5px 5px 5px 5px;">
      </figure>
      <!-- </div> -->
    </section>

    <!-- POST-Text-section -->

    <!--<section class="section">
      <div class="container">
        <div class="column">
          <article class="post">

            <p>An infographic published by the government claims that financial future has been secured for crores of girls in India. This claim is part of a series on ‘speed and scale of transformation’ in India. Here is a fact check of the claim.
            </p>
            {{ post }}
            <p>This story is part of a larger series on the 4-years of the Modi government. This series has been made possible with the flash grant of the International Fact Checking Network (IFCN). Read the rest of the stories in this series here.

            </p>
          </article>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script>
  export default {
    methods: {
      LoadAuthor () {
        this.$router.push('/author')
      }
    }
  }

</script>

<style>
  .post {
    max-width: 800px;
    margin: auto;
    text-align: left;
    margin-bottom: 1rem;
    line-height: 1.85;
    font-size: 1.25rem;
    color: rgba(0,0,0,.8);
    margin-top:-80px;
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

    methods: {},
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
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHWmdiX19JaUVjRG9sRmZLM1E2VDZLQzFGZkdwZXprNFA4UmxzMHhDT1k4In0.eyJqdGkiOiIzYjIzYThkOS0yMzRhLTRiNjgtODFmOS1mYjY0ZDBjYzY1NDAiLCJleHAiOjE1NDIyODY4OTMsIm5iZiI6MCwiaWF0IjoxNTQyMjUwODkzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJ3ZWJfYXBwIiwic3ViIjoiZmVmMDU0NTQtNDM5Zi00ZDU5LWE1ZmYtNDk3YjRhNmRkZTBmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2ViX2FwcCIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjM3NzNjYmVjLWE1MDYtNDk1Zi1iNTBhLTA2MTAzNWM4MDcwYiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwLyoiLCJodHRwOi8vbG9jYWxob3N0OjgxMDAvKiIsImh0dHA6Ly8xMjcuMC4wLjE6ODc2MS8qIiwiaHR0cDovL2xvY2FsaG9zdDo5MDAwLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBqaGlwc3RlciBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjE4LjAuMSIsImNsaWVudElkIjoid2ViX2FwcCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC13ZWJfYXBwIiwiY2xpZW50QWRkcmVzcyI6IjE3Mi4xOC4wLjEiLCJlbWFpbCI6InNlcnZpY2UtYWNjb3VudC13ZWJfYXBwQHBsYWNlaG9sZGVyLm9yZyJ9.Nir2Z2Tn-qKKLMswN-XvdUzVTXceasinVz-yp8RzkwnhyYMAqySTKeNcePQNtLKLO--rUkJxoKzRIUxGeFEU5ggRLIyAfCjEOdCMCJOQ83u1bt0MUs5pGTpW46ccmIlAQBpTFaB0YfSCj1xZy7jzEll8i758dW_f2n6ki6UeiJzPuk5-C_ReEdFjlYuEEWU6uNOfKE4BACX0BIw6wuDN3WggdIhKvCla2EEex9Ru08Aa1opLkqeL1BjDBuoHQrdllBZciBqxjKIEQYP072I_BUtbTgsuKfU7Lc8qyPh744Afm_7s7e4YRjVVw_JWw_-kT8K_3FRk_ab2Yh0OW0Eo8w'
        }
      }
      return axios
        .get(`http://127.0.0.1:8080/core/api/posts/${params.params.slug}/?access_token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHWmdiX19JaUVjRG9sRmZLM1E2VDZLQzFGZkdwZXprNFA4UmxzMHhDT1k4In0.eyJqdGkiOiIxZTQ0YmVkNy1mNWJiLTQxZmUtYWQ4Ni01MTgxZDVhMjU3ZWEiLCJleHAiOjE1NDIyOTcyMTQsIm5iZiI6MCwiaWF0IjoxNTQyMjYxMjE0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvamhpcHN0ZXIiLCJhdWQiOiJ3ZWJfYXBwIiwic3ViIjoiZmVmMDU0NTQtNDM5Zi00ZDU5LWE1ZmYtNDk3YjRhNmRkZTBmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2ViX2FwcCIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImI1OWYwOWZlLWNhNDMtNDgwOS04MDkxLTY4MWE3MzFlY2U4NyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwLyoiLCJodHRwOi8vbG9jYWxob3N0OjgxMDAvKiIsImh0dHA6Ly8xMjcuMC4wLjE6ODc2MS8qIiwiaHR0cDovL2xvY2FsaG9zdDo5MDAwLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBqaGlwc3RlciBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjE4LjAuMSIsImNsaWVudElkIjoid2ViX2FwcCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC13ZWJfYXBwIiwiY2xpZW50QWRkcmVzcyI6IjE3Mi4xOC4wLjEiLCJlbWFpbCI6InNlcnZpY2UtYWNjb3VudC13ZWJfYXBwQHBsYWNlaG9sZGVyLm9yZyJ9.DAG8gEaH9ILS5KyTnwbiJyvl6zVWSb6ekCZtVPA63LklzWXbjFW3FTntm2tTuTAkCpzbL73LAJ4FQO_9H7lmqCCy5-TO-I40vrVADD5suVm-k5B3y6bV5LJ1wRVwUenjebTjTShatJwfykOmtsya5Y_92gcw7y2X1U4bpqmO73SP5W--k64jl2nMfdtLPHJZJ7zf9lP8MtQmF4metSfywoJu62UD5j_cMDTNDX5blMaPHh-lE6Ot7JS_3g9CfFKr6Hhz7UirKyUTRcjupcqOQgngHdFZqUdGQ7nRp8TiJAAIALssgf8sXrh0XLAzdqoebjwQmgAr2jNTuFdyj4rMLA`)
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





