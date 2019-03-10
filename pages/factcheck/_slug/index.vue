<template>
  <div>
    <section class="factcheck-detail" style="margin-top: 0">
      <div class="columns container is-vcentered is-centered">
        <div class= "column is-6 is-full-mobile">
          <div class="card">
            <div class="card-image">
              <figure class ="image is-5by3">
                <img
                  :src="factchecks[0].featured_media"
                  alt="Factcheck"
                  style="border-radius: 0px 0px 0px 0px;">
              </figure>
            </div>
          </div>
        </div>
        <div class= "column is-6 is-full-mobile" >
          <div class="content subtitle has-text-centered">
            <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop">{{ factchecks[0].sub_title }}</p>
          </div>
          <div
            v-if="factchecks[0].authors"
            class="subtitle is-6 is-uppercase has-text-centered">
            BY
            <span
              v-for="(author, index) in factchecks[0].authors"
              :key="index" >{{ author.display_name }}
                    <span v-if="index != factchecks[0].authors.length -1">, </span>
                  </span>
          </div>
          <div class="has-text-centered">{{ getDate(factchecks[0].last_updated_date) }}</div><br>
          <div class="has-text-justified">
            {{ factchecks[0].excerpt }}
          </div>
        </div>
      </div>
      <div class="columns">
        <div 
          class="column is-four-fifths is-full-mobile "
          style="float:left;">
          <div class="column is-full has-text-centered is-paddingless" style="margin-bottom: 1rem">
            <div class="card">
              <div class="card-content">
                <h1 class="title is-size-5 is-size-4-tablet is-size-3-desktop is-spaced is-2 has-text-weight-bold">{{ factchecks[0].sub_title }}</h1>
                <span class="is-uppercase">
                  <!-- BY -->
                  <div class="has-text-centered">{{ getDate(factchecks[0].last_updated_date) }}</div>
                </span>
              </div>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img
                    :src="factchecks[0].featured_media"
                    alt="Factcheck"
                    style="border-radius: 0px 0px 0px 0px;">
                </figure>
              </div>
            </div>
          </div>

          <div class="card column is-full" style="background-color: #f5faff;">
            <div class="columns">
              <div class="column">
                <div class="card-content">
                  <p class="subtitle is-size-6 is-size-6-tablet is-size-6-desktop has-text-weight-semibold has-text-left has-text-weight-semibold">{{ factchecks[0].excerpt }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-full">
            <!-- ARTCILE CONTENT -->
            <div class="">
              <article 
                class="post" 
                style="text-align: justify;">
                <p v-html="factchecks[0].introduction">{{ factchecks[0].introduction }}</p>
              </article>
              <div 
                v-for="(claim,index) in factchecks[0].claims" 
                :key="index">
                <br>
                <article
                  :id="'claim'+(index+1)"
                  class="post" 
                  style="text-align: justify;">
                  <p v-html="claim.description">{{ claim.description }}</p>
                </article>

                <!-- claim widget starts heres -->
                <div class="card column is-full" style="background-color: #f5faff; margin: 1rem 0 1rem 0;">
                  <div class="columns">
                    <div class="column is-one-fifth">
                      <div class="card-image">
                        <figure class="image is-square">
                          <img
                            :src="claim.claimant.image_url"
                            alt="Claim Source"
                            width="100%">
                        </figure>
                      </div>
                    </div>
                    <div class="column is-three-fifths">
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <p style="color: #1976d2;">Claimed by {{ claim.claimant.name }}</p><br>
                            <p class="title is-5">{{ claim.claim }}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                          </div>
                        </div>

                        <div class="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                          <a href="#">#css</a> <a href="#">#responsive</a>
                          <br>
                          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                      </div>
                    </div>
                    <div class="column is-one-fifth">
                      <div class="card-image">
                        <figure class="image is-square">
                          <img
                            :src="require('~/assets/images/ratings/'+claim.rating.numeric_value+'.png')"
                            alt="Claim Rating"
                            width="90%">
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="box"
                  style="background-color: #f5faff; margin-top: 1rem">
                  <div
                    class="columns is-full-mobile has-text-left">
                    <div
                      class="column is-one-fifth is-hidden-mobile"
                      style="padding:0px">
                      <img
                        :src="claim.claimant.image_url"
                        alt="Claim Source"
                        width="100%">
                    </div>
                    <div
                      class="column is-three-fifth is-mobile "
                      style="padding:.75rem">
                      <p style="color: #1976d2;">Claimed by {{ claim.claimant.name }}</p><br>
                      <span
                        style="color: #1976d2;"
                        class="subtitle is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2 ">Claim:</span>
                      <span class="subtitle is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"> {{ claim.claim }}</span><br><br>
                      <span
                        style="color: #1976d2;"
                        class="subtitle is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2 ">Review:</span>
                      <span class="subtitle is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"> {{ claim.review }}</span>
                    </div>
                    <div
                      class="column is-one-fifth is-hidden-mobile"
                      style="padding:0px;">
                      <img
                        :src="require('~/assets/images/ratings/'+claim.rating.numeric_value+'.png')"
                        alt="Claim Rating"
                        width="90%">
                    </div>
                  </div>
                </div>
              </div>
              <article 
                class="post" 
                style="text-align: justify;">
                <p v-html="factchecks[0].summary">{{ factchecks[0].summary }}</p>
              </article>
            </div>
          </div>
        </div>
        <div class="column is-one-fifth is-hidden-mobile">
          <div class="column is-one-fifth is-dockedTop">
            <div 
              class="box has-text-weight-semibold" 
              style="color: #1976d2; text-align:left;">
              <span class="is-uppercase">List of claims in the story</span>
              <div 
                v-for="(claim, index) in factchecks[0].claims" 
                :key="index">
                <hr>
                <a :href="'#claim'+(index+1)"> <h2 
                  class="has-text-weight-semibold" 
                  style="color:#034f84;" >#{{ index+1 }}. {{ claim.claim }}</h2> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.factcheck-detail {
  margin: 1%;
}
.line-clamp {
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;

  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 !important;
}
.line-clamp:after {
  content: '...';
  text-align: right;
  bottom: 0;
  right: 0;
  width: 25%;
  display: block;
  position: absolute;
  height: calc(1em * 1.2);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 75%
  );
}
@supports (-webkit-line-clamp: 1) {
  .line-clamp:after {
    display: none !important;
  }
}
.line-clamp-1 {
  -webkit-line-clamp: 1;
  height: calc(1em * 1.2 * 1);
}
.line-clamp-2 {
  -webkit-line-clamp: 2;
  height: calc(1em * 1.2 * 2);
}
.line-clamp-3 {
  -webkit-line-clamp: 3;
  height: calc(1em * 1.2 * 3);
}
.line-clamp-4 {
  -webkit-line-clamp: 4;
  height: calc(1em * 1.2 * 4);
}
.line-clamp-5 {
  -webkit-line-clamp: 5;
  height: calc(1em * 1.2 * 5);
}
/* End required CSS. */
</style>

<script>
import axios from 'axios'

export default {
  components: {},
  methods: {
    validate({ params }) {
      return params.slug
    },
    getDate(datetime) {
      const date = new Date(datetime)
      const ms = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`
    }
  },
  async asyncData(params) {
    return axios
      .get(
        `${process.env.apiUri}/api/v1/factchecks/?client_id=${process.env.clientId}&slug=${params.params.slug}`
      )
      .then(response => response.data)
      .catch(error => console.log(error))
  }
}
</script>
