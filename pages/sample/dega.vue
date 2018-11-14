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
            v-for="(article, index) in articles"
            :key="index"
            class="column is-6">
            <a
              :href="article.url"
              target="_blank">
              <PostCard :article="article"/>
              <!--<div class="card">
                <div class="card-image">
                  <figure class="image is-2by1">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4 has-text-weight-semibold">{{ article.title }}</p>
                      <p class="subtitle is-6">An infographic published by the government claims that financial future has been secured for crores of girls in India.
                        This claim is part of a series on ‘speed and scale of transformation’ in India. Here is a fact check of the claim.</p>
                      <time style="color: #b3b2b2">By Aila Bandagi Kandlakunta On October 10, 2018</time>
                    </div>
                  </div>
                </div>
              </div>-->
            </a>
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
    const { articles } = await app.$axios.$get(`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=38d4f01031e447458603f95adc9d16c0`)
    return { articles }
  }
}
</script>
