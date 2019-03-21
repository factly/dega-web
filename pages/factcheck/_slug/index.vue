<template>
  <section>
    <Hero :story="factchecks[0]" :categories= "true"/>
    <div class="column is-divider is-hidden-mobile is-offset-one-quarter is-half"/>
    <div class="columns">
      <div
        class="column is-three-fifths is-offset-1 is-full-mobile "
        style="float:left;">

        <div class="column is-full">
          <!-- ARTCILE CONTENT -->
          <div>
            <article
              class="post"
              style="text-align: justify;">
              <p v-html="factchecks[0].introduction">{{ factchecks[0].introduction }}</p>
            </article>
            <div v-for="(claim,index) in factchecks[0].claims" :key="index">
              <ClaimWidget :claim="claim" :index="index"/>
            </div>
            <article
              class="post"
              style="text-align: justify;">
              <p v-html="factchecks[0].summary">{{ factchecks[0].summary }}</p>
            </article>
          </div>
        </div>
      </div>
      <div class="is-divider-vertical is-hidden-mobile"/>
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
import axios from 'axios';
import '~/node_modules/bulma-divider';
import Hero from '~/components/Hero';
import ClaimWidget from '~/components/ClaimWidget';

export default {
  components: {
    Hero,
    ClaimWidget
  },
  methods: {
    validate({ params }) {
      return params.slug;
    },
    getDate(datetime) {
      const date = new Date(datetime);
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
        'Dec',
      ];
      return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`;
    }
  },
  async asyncData(params) {
    return axios
      .get(
        `${process.env.apiUri}/api/v1/factchecks/?client_id=${
          process.env.clientId
        }&slug=${params.params.slug}`
      )
      .then((response) => {
        const data = {
          factchecks: response.data
        };
        return data;
      });
  }
};
</script>
