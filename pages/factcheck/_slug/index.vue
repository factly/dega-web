<template>
<div>
	<section class="section"><br><br><br>
	<div class="columns">
		<div class="column is-three-quarters is-full-mobile" style="float:left;">
				<div class="column is-full has-text-centered">
						<div class="box">
							<h1 class="title is-size-5 is-size-4-tablet is-size-3-desktop is-spaced is-2 has-text-weight-bold">{{factchecks[0].title}}</h1>
							<span class="is-uppercase">
								<!-- BY -->
								<a class="has-tint has-text-weight-semibold " href="http://127.0.0.1:3000/author/shashi-deshetti" target="_blank" style="text-align: center">
									<i class="icon icon-award"></i><span >BY SHASHI DESHETTI</span> </a>
								<!-- <nuxt-link class="has-tint has-text-weight-semibold" :to="'/author/'+ factchecks[0].authors[0].slug">{{factchecks[0].authors[0].display_name}}</nuxt-link> -->
								<div class="has-text-centered">{{getDate(factchecks[0].last_updated_date)}}</div>
							</span>
							<figure class="image is-2by1">
								<img src="https://2nafqn3o0l6kwfofi3ydj9li-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/deposits-by-Indians-in-Swiss-Banks_featured-image.jpg" style="border-radius: 0px 0px 0px 0px;">
							</figure>
							<br>
							<h2 class="subtitle is-size-6 is-size-6-tablet is-size-5-desktop has-text-weight-semibold">{{factchecks[0].excerpt}}</h2>
						</div>
				</div>
				<div class="column is-full">
					<!-- CLAIM COLUMN -->
					<div class="box" v-for="(claim, index) in factchecks[0].claims" :key="index">
						<div class="columns is-full-mobile has-text-left">
							<div class="column is-one-fifth is-hidden-mobile" style="float:left;">
								<img :src="claim.claim_source" alt="Claim Source">
							</div>
							<div class="column is-three-fifth is-mobile ">
								<p style="color: #1976d2;">Claimed by {{claim.claimant.name}}</p>
								<p class="subtitle is-size-3 is-size-4-tablet is-size-5-desktop is-size-5-mobile is-spaced is-2">{{claim.claim}}</p>
								<!-- <p class="subtitle is-size-6 is-size-6-tablet is-size-5-desktop" v-html="claim.review">{{claim.review}}</p> -->
							</div>
							<div class="column is-one-fifth is-hidden-mobile">
								<img :src="claim.rating.numeric_value.png">
								<!-- Rating: {{claim.rating.numeric_value}} -->
								<!-- <img :src="~assets/images/ratings/claim.rating.numeric_value" alt="Rating"> -->
								<!-- <img style="{ backgroundImage: 'url(' + require(@/assets/imgages/ratings/${claim.rating.numeric_value}) + ')' }"> -->
							</div>
						</div>
					</div>
				</div>
				<div class="column is-full">
					<!-- ARTCILE CONTENT -->
					<div class="box">
						<article class="post" style="text-align: justify;">
							<p v-html="factchecks[0].introduction">{{factchecks[0].introduction}}</p>
						</article>
						<div v-for="(claim,index) in factchecks[0].claims" :key="index">
							<br>
							<article class="post" style="text-align: justify;">
								<p v-html="claim.description">{{claim.description}}</p>
							</article>
							<br>
						</div>
						<article class="post" style="text-align: justify;">
							<p>{{factchecks[0].summary}}</p>
						</article>
					</div>
				</div>
		</div>
		<div class="column is-one-fourth is-hidden-mobile"> 
					<div class="column is-full">
						<div class="box has-text-weight-semibold" style="color: #1976d2;text-align:left;">
							Fact Check For The Claims
							<div v-for="(claim, index) in factchecks[0].claims" :key="index">
								<h1 class="has-text-weight-semibold" style="color:#034f84;" >#{{index+1}}. {{claim.claim}}</h1>
								<!-- <p style="color:grey" v-html="claim.description">{{claim.description}}</p> -->
								<hr>
							</div>
						</div>
					</div>
					<!--RELATED ARTICLES BOX  -->
					<div class="column is-full">
						<div class="box has-text-weight-semibold" style="color: #1976d2;">
							Related Articles  <br><br>
							<h2 class="subtitle is-6 has-text-weight-bold" style="color:lightgrey">INDIA</h2>
							<p class="subtitle has-text-weight-bold">Are More people travelling in Airplanes than in AC trains?</p>
							<br>
							<h2 class="subtitle is-6 has-text-weight-bold" style="color:lightgrey">ELECTIONS 2019</h2>
							<p class="subtitle has-text-weight-bold">Are More people travelling in Airplanes than in AC trains?</p>
							<br>
							<h2 class="subtitle is-6 has-text-weight-bold" style="color:lightgrey">WORLD</h2>
							<p class="subtitle has-text-weight-bold">Are More people travelling in Airplanes than in AC trains?</p>
							<br>
							<h2 class="subtitle is-6 has-text-weight-bold" style="color:lightgrey">BUSSINESS</h2>
							<p class="subtitle has-text-weight-bold">Are More people travelling in Airplanes than in AC trains?</p>
						</div>
					</div>
		</div>
	</div>
	</section>
</div>
</template>
<script>
import axios from 'axios'

export default {
  components: {
  },
  methods: {
	validate({ params }){
		return params.slug
	},
	getDate(datetime) {
      let date = new Date(datetime);
      var ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return date.getDate() + ' ' + ms[date.getMonth()] + ' ' + date.getFullYear();
    }
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
      .get(`http://127.0.0.1:8000/api/v1/factchecks/?slug=${params.params.slug}`)
      .then(response => {
        const data = {
          factchecks: response.data
        }
        return data
      })
      .catch(error => console.log(error))
  }
}
</script>
