<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div
          class="column is-one-quarter"
          v-for="(article, index) in articles"
          :key="index">
          <a :href="article.url" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <img :src="article.urlToImage" :alt="article.subtitle">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">{{ article.subtitle }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { articles } = await app.$axios.$get(`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=38d4f01031e447458603f95adc9d16c0`);
    return { articles };
  }
}
</script>
