<template>
  <div class="columns home-page">
    <div class="column is-three-fourth">
      <div class="main-content">
        <div v-if="story" class="container">
          <nuxt-link :to="'/'+ story[0]._class.split('.').pop().toLowerCase()+ '/' + story[0].slug">
            <div class="columns">
                <div class= "column is- 6 is-full-mobile">
                    <div class="card">
                        <div class="card-image">
                            <figure class ="image is-5by3">
                                <img src="https://www.publicdomainpictures.net/pictures/200000/nahled/plain-blue-background.jpg" alt="Placeholder image">
                                <div class="story-art">
                                  <div v-if="story[0]._class == 'com.factly.dega.domain.Factcheck'" class="fact-strip">
                                    <h1>FACTCHECK</h1>
                                  </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class= "column is-6 is-full-mobile" >
                    <div class="content subtitle has-text-centered">
                        <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop">{{ story[0].title }}</p>
                    </div>
                    <!-- <div class="has-text-centered">
                      <span v-if="story[0].authors.length >= 1" class="subtitle is-6 is-uppercase has-text-centered">BY {{story[0].authors[0].display_name}}</span>
                      <span v-for="(author, index) in story[0].authors.splice(1)"
                        :key="index">
                        <span class="subtitle is-6 is-uppercase has-text-centered">, {{author.display_name}}</span>
                      </span>
                    </div> -->
                    <div class="subtitle is-6 is-uppercase has-text-centered">
                      BY
                      <span  v-for="(author, index) in story[0].authors" :key="index" >{{author.display_name}} 
                        <span v-if="index != story[0].authors.length -1">, </span>
                      </span>
                    </div>
                    <div class="has-text-centered">{{getDate(story[0].last_updated_date)}}</div><br>
                    <div class="has-text-justified">
                      {{story[0].excerpt}}
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
                <div
                  v-for="(p, index) in story.slice(1)"
                  :key="index"
                  class="container columns">
                  <nuxt-link :to="'/'+ p._class.split('.').pop().toLowerCase()+ '/' +p.slug">
                    <MoreStories :story="p" :categories= "true"/>
                  </nuxt-link>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div v-else class="subtitle is-6 is-uppercase has-text-centered">
          Dega API is not responding.<br> Please contact the administrator.
        </div>
      </div>
    </div>
    <!-- <PopularArticles></PopularArticles> -->
  </div>
</template>
<style>
.home-page{
  margin: 1%
}

.story-art {
  position: relative; 
  max-width: 800px; /* Maximum width */
  margin: 0 auto; /* Center it */
}

.story-art .fact-strip {
  position: absolute; /* Position the background text */
  bottom: 0; /* At the bottom. Use top:0 to append it to the top */
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1; /* Grey text */
  width: 100%; /* Full width */
  padding: 20px; /* Some padding */
}

</style>

<script>

import axios from 'axios'
import MoreStories from "~/components/MoreStories"
import PopularArticles from "~/components/PopularArticles"
import * as _ from "lodash"
export default {
  components: {
    MoreStories,
    PopularArticles
  },
  data()
  {
    return {
      posts:null,
      factchecks:null,
      story:null
    };
  },
  methods: {
    getDate(datetime) {
      let date = new Date(datetime);
      var ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			// console.log('TCL: getDate -> ms', ms)
      return date.getDate() + ' ' + ms[date.getMonth()] + ' ' + date.getFullYear();
    }
  },
  async asyncData() {
    let posts = await axios
      .get(`http://127.0.0.1:8000/api/v1/posts/?sortBy=lastUpdatedDate&sortAsc=false`)
      .then(response => {
        // const data = {
        //   posts: response.data
        // }
        return response.data
      })
      .catch(error => console.log(error))
		// // console.log('TCL: asyncData -> posts', posts)
		// // console.log('TCL: asyncData -> hello1')
    let factchecks = await axios
      .get(`http://127.0.0.1:8000/api/v1/factchecks/?sortBy=lastUpdatedDate&sortAsc=false`)
      .then(response => {
        // console.log(response.data);
        // const data = {
          
        //   factchecks: response.data
        // }
        // let stories =  _.shuffle(posts.posts.concat(data.factcheck));
        // console.log("hello1");

				// // // console.log('TCL: asyncData -> response.data', response.data)
        // console.log(data);
        // console.log(stories);
        // console.log("hello2");
        return response.data
      })
      .catch(error => console.log(error))
		// // console.log('TCL: asyncData -> factchecks', factchecks)
    console.log("hello2");
    // let post = await axios.get('http://127.0.0.1:8000/api/v1/posts/?sortBy=lastUpdatedDate&sortAsc=false').catch(error => console.log(error))
    // let factcheck = await axios.get('http://127.0.0.1:8000/api/v1/factchecks/?sortBy=lastUpdatedDate&sortAsc=false').catch(error => console.log(error))
    let stories = null;
    if(posts && factchecks)
    {
      stories =  _.shuffle(posts.concat(factchecks));
			// console.log('TCL: asyncData -> stories', stories)
    }
    return {
    story : stories
    }
  }
}
</script>
