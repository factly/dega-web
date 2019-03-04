<template>
<div>
	<section class="section"><br><br><br>
	<div class="columns">
		<div class="column is-four-fifths is-full-mobile" style="float:left;">
				<div class="column is-full has-text-centered">
						<div class="">
							<h1 class="title is-size-5 is-size-4-tablet is-size-3-desktop is-spaced is-2 has-text-weight-bold">{{factchecks[0].subtitle}}</h1>
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
							<p class="subtitle is-size-6 is-size-6-tablet is-size-6-desktop has-text-weight-semibold has-text-left has-text-weight-semibold">{{factchecks[0].excerpt}}</p>

						</div>
				</div>
				<div class="column is-full">
					<!-- CLAIM COLUMN -->
					<div class="box" v-for="(claim, index) in factchecks[0].claims" :key="index">
						<div :id="'claim'+(index+1)" class="columns is-full-mobile has-text-left anchor">
							<div class="column is-one-fifth is-hidden-mobile" style="float:left;">
								<img :src="claim.claim_source" alt="Claim Source">
							</div>
							<div class="column is-three-fifth is-mobile ">
								<p style="color: #1976d2;">Claimed by {{claim.claimant.name}}</p>
								<p class="subtitle is-size-3 is-size-4-tablet is-size-5-desktop is-size-5-mobile is-spaced is-2">{{claim.claim}}</p>
                <!--<p class="subtitle is-size-6 is-size-6-tablet is-size-5-desktop" v-html="claim.review">{{claim.review}}</p>-->
							</div>
							<div class="column is-one-fifth is-hidden-mobile">
                <img :src="require('~/assets/images/ratings/'+claim.rating.numeric_value+'.png')">
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
		<div class="column is-one-fifth is-hidden-mobile">
        <div class="column is-one-fifth is-dockedTop">
          <div class="box has-text-weight-semibold" style="color: #1976d2;text-align:left;">
            <span class="is-uppercase">List of claims in the story</span>
            <div v-for="(claim, index) in factchecks[0].claims" :key="index">
              <hr>
              <a :href="'#claim'+(index+1)"> <h2 class="has-text-weight-semibold" style="color:#034f84;" >#{{index+1}}. {{claim.claim}}</h2> </a>
              <!-- <p style="color:grey" v-html="claim.description">{{claim.description}}</p> -->
            </div>
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
