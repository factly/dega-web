<template>
   <div class="sticky-container box">    
       <!-- <SocialSharing  :url="$nuxt.$route.path"/> -->
       <a :href="'https://www.facebook.com/sharer/sharer.php?u='+ domainHostname + url" target="_blank" >
            <span class="icon facebook" style="color: #fff;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
            </span>
        </a>
        <a :href="'https://twitter.com/intent/tweet?text='+ domainHostname + url" target="_blank" class="twitter">
            <span class="icon" style="color: #fff;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
            </span>
        </a>
        <a :href="'https://www.linkedin.com/cws/share/?token&isFramed=false&url='+ domainHostname + url" target="_blank" class="linkedin">
            <span class="icon" style="color: #fff;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>
        </a>
        <!-- <div id="article-share-buttons">
          <a :href="'https://twitter.com/intent/tweet?text='+ domainHostname + url" target="_blank" class="action-button share-button is-social is-twitter m-t" title="Share to Twitter" data-title="6 Popular CSS Frameworks to Use in 2019" data-type="Twitter" data-via="scotch_io" data-tooltip="Chirp chirp">
          <div role="button" aria-label="Twitter"><svg class="svg-inline--fa fa-twitter fa-w-16 fa-xs" data-fa-transform="right-0.5 down-0.3" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.53125em 0.51875em;"><g transform="translate(256 256)"><g transform="translate(16, 9.6)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" transform="translate(-256 -256)"></path></g></g></svg> <i class="fab fa-twitter fa-xs" data-fa-transform="right-0.5 down-0.3"></i></div>
          </a>
          <a :href="'https://www.facebook.com/sharer/sharer.php?u='+ domainHostname + url" target="_blank" data-title="6 Popular CSS Frameworks to Use in 2019" data-type="Facebook" data-tooltip="Zuck it">
          <div role="button" aria-label="Facebook"><svg class="svg-inline--fa fa-facebook fa-w-14 fa-xs" data-fa-transform="up-0.2" aria-hidden="true" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" style="transform-origin: 0.4375em 0.4875em;"><g transform="translate(224 256)"><g transform="translate(0, -6.4)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" transform="translate(-224 -256)"></path></g></g></svg><i class="fab fa-facebook fa-xs" data-fa-transform="up-0.2"></i></div>
          </a>
          <a href="https://scotch.io/bar-talk/6-popular-css-frameworks-to-use-in-2019?utm_source=scotch&amp;utm_campaign=share&amp;utm_medium=reddit" class="action-button share-button is-social is-reddit m-t" title="Share to Reddit" data-title="6 Popular CSS Frameworks to Use in 2019" data-type="Reddit" data-tooltip="Karma me">
          <div role="button" aria-label="Reddit"><svg class="svg-inline--fa fa-reddit-alien fa-w-16 fa-xs" data-fa-transform="left-0.1 up-0.4" aria-hidden="true" data-prefix="fab" data-icon="reddit-alien" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.49375em 0.475em;"><g transform="translate(256 256)"><g transform="translate(-3.2, -12.8)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z" transform="translate(-256 -256)"></path></g></g></svg> <i class="fab fa-reddit-alien fa-xs" data-fa-transform="left-0.1 up-0.4"></i> </div>
          </a>
        </div> -->
   </div>
</template>
<style>
    .sticky-container {
        background-color: #55ACEE;
        box-shadow: gray -1px 1px;
        padding: 1em;
        position: fixed;
        top: 50%;
        right: 0px;
        width: 45px;
        height: auto;
        z-index: 9999;
    }
    .sticky-container:hover {
        width: 50px;
    }
    .sticky-container .facebook:hover{
        color: rgb(0, 0, 0);
    }
</style>
<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
      default: null
    }
  },
  data(){
     return {
      domainHostname: process.env.domainHostname
    };
  }
}
</script>