<template>
  <div class="columns" style="margin: 5%;">
    <div class="column is-10">
      <div class="main-content">
        <div class="container">
					<nuxt-link :to="'/factcheck/'+ factchecks[0].slug">
						<div class="columns" style="margin-bottom: 25px;">
								<div class= "column is-6">
										<div class="card">
												<div class="card-image">
														<figure class ="image is-5by3">
																<img src="https://www.publicdomainpictures.net/pictures/200000/nahled/plain-blue-background.jpg" alt="Placeholder image">
														</figure>
												</div>
										</div>
								</div>
								<div class= "column is-6">
										<div class="content subtitle is-hidden-mobile has-text-centered">
												<p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop">{{ factchecks[0].title }}</p>
										</div>
										<div class="has-text-centered">{{getDate(factchecks[0].last_updated_date)}}</div><br>
										<div class="has-text-justified">
											{{factchecks[0].excerpt}}
										</div>
								</div>
								
						</div>
					</nuxt-link>
					<hr class="spacer is-1-5 is-hidden-mobile">
					<div class="columns">
					<!-- MoreStories Section -->
						<div class="column is-12">
							<section>
								<h3>MORE STORIES</h3>
								<br>
								<div v-for="(p, index) in factchecks.slice(1)" :key="index" class="container columns">
									<nuxt-link :to="'/factCheck/'+ p.slug">
										<MoreStories :story="p"/>
									</nuxt-link>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	<PopularArticles></PopularArticles>
	</div>
</template>

<script>
import axios from 'axios'
import MoreStories from "../../components/MoreStories";
import PopularArticles from "~/components/PopularArticles"

export default {
  components: {
    MoreStories,
    PopularArticles
  },
  methods: {
    getDate(datetime) {
      let date = new Date(datetime);
      var ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return date.getDate() + ' ' + ms[date.getMonth()] + ' ' + date.getFullYear();
    }
  },
  async asyncData() {
    return axios
      .get(`http://127.0.0.1:8000/api/v1/factchecks/?sortBy=lastUpdatedDate&sortAsc=false`)
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
