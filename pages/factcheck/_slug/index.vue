<template>
  <section class="factcheck-detail" style="margin-top: 0">
    <div class="columns is-vcentered is-centered">
      <div class= "column is-6">
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
      <div class= "column is-5" >
        <div class="content subtitle has-text-centered">
          <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-centered-desktop">{{ factchecks[0].sub_title }}</p>
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
    <div class="column is-divider is-hidden-mobile is-offset-one-quarter is-half"/>
    <div class="columns">
      <div
        class="column is-three-fifths is-offset-1 is-full-mobile "
        style="float:left;">

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
                <div class="columns is-vcentered">
                  <div class="column is-2">
                    <div class="card-image">
                      <figure class="image is-square">
                        <img
                          :src="claim.claimant.image_url"
                          alt="Claim Source"
                          width="100%">
                      </figure>
                    </div>
                  </div>
                  <div class="column is-8">
                    <div class="card-content" style="padding-top: 0px; padding-bottom: 0px;">
                      <div class="" style="padding-bottom: 0.75rem">
                        <span class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2" style="color: #1976d2;">Claimed by {{ claim.claimant.name }} on {{ getDate(claim.last_updated_date)}}</span>
                      </div>
                      <div class="" style="padding-bottom: 0.75rem">
                        <span class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2" style="color: #1976d2;">Claim:</span>
                        <span class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"> {{ claim.claim }}</span>
                      </div>
                      <div class="columns">
                        <p class="column title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile" style="color: #1976d2;">Share: </p>
                        <!--<div class="column is-4">Review Sources</div>-->
                      </div>
                    </div>

                  </div>
                  <div class="column is-2">
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
                <div>
                  <p>
                    <span
                      style="color: #1976d2;"
                      class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2 ">Fact:</span>
                    <span class="subtitle is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"> {{ claim.review }}</span>
                  </p>
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
      <div class="is-divider-vertical is-hidden-mobile"></div>
      <div class="column is-two-fifths is-hidden-mobile">
        <div class="column is-half sticky">
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
</template>

<script>
import axios from 'axios'
import '~/node_modules/bulma-divider'

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
