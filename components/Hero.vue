<template>
  <div style="margin: 1rem;">
    <div class="columns">
      <div class= "column is-6">
        <div class="card">
          <div class="card-image">
            <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' + story.slug">
              <figure class ="image is-16by9">
                <img
                  :src="story.featured_media"
                  :alt="story._class.split('.').pop()">
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="content">
          <div>
            <nuxt-link :to="'/'+ story._class.split('.').pop().toLowerCase()+ '/' + story.slug">
              <div>
                <p class="title is-4 headline-title">{{ story.title }}</p>
              </div>
              <div>
                <p class="subtitle is-6 headline-preview">{{ story.excerpt }}</p>
              </div>
            </nuxt-link>
          </div>
          <div class="has-text-black-bis headline-meta">
            <span
              v-for="(author, index) in story.authors"
              :key="index" >
              <nuxt-link :to="'/author/' + author.slug">
                {{ author.display_name }}
              </nuxt-link>
              <span v-show="index != story.authors.length -1"> , </span>
            </span> in <nuxt-link :to="'/category/' + story.categories[0].slug">{{ story.categories[0].name }}</nuxt-link>
          </div>
          <div class="has-text-grey headline-time">{{ story.published_date | date }}</div>
<<<<<<< HEAD
          <Bookmark :story=story />
=======
          <br>
          <div v-if="userModule">
            <Button v-if="!saved" class="button is-icon" @click="save()">
              <span class="icon" style="color: #55acee;">
                <!--<svg class="svg-inline--fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">-->
                <svg
                  width="1792"
                  height="1792"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1408 256h-1024v1242l423-406 89-85 89 85 423 406v-1242zm12-128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z"
                  ></path>
                </svg>
              </span>
            </Button>
            <Button v-if="saved" class="button" @click="undoSave()">
              <span class="icon" style="color: #55acee;">
                <!--<svg class="svg-inline--fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">-->
                <svg
                  width="1792"
                  height="1792"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1420 128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z"
                  ></path>
                </svg>
              </span>
            </Button>
          </div>
>>>>>>> 9c9b93a5b0ffa7a6070056ce36f247f49dbeb9d5
        </div>
      </div>
      <div class="has-text-justified is-hidden-mobile">{{ story.excerpt }}</div>
    </div>
  </div>
</template>

<style scoped>
  .headline-meta {
    margin-top: 1.5rem;
  }
  .headline-title {
    font-family: 'Ramabhadra', sans-serif;
    font-size: 2rem;
    line-height: 2.2rem;
    margin-bottom: 2rem;
  }
  .headline-preview {
    font-family: 'Mallanna', sans-serif;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
</style>


<script>
import Bookmark from '~/components/Bookmark.vue';
export default {
  components:{
    Bookmark
  },
  props: {
    story: {
      type: Object,
      required: true,
      default: null
    }
  },
};
</script>
