<template>
  <div>
    <!-- featured post section-->
    <section class="section is-hero" @click="LoadPost">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6 is-5-fullhd is-offset-1-fullhd">
            <div class="section-header">
              <h1 class="title is-spaced is-2 has-text-weight-semibold" > Government claims on<span class="is-hidden-touch"><br></span> the "Welfare of the Girl Child"</h1>
              <h2 class="subtitle is-5">  An infographic published by the government claims that financial future has been secured for crores of girls in India. </h2>
              <a class="has-tint has-text-weight-semibold" @click="LoadAuthor" href="http://localhost:3000/Author/" target="_blank">
                <i class="icon icon-award"></i><span>BY AILA BANDAGI KANDLAKUNTA ON OCTOBER 10, 2018</span>
              </a>
            </div>
          </div>
          <div class="column is-6">
            <div class="section-media">
              <img role="presentation" src="https://2nafqn3o0l6kwfofi3ydj9li-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Welfare-of-the-Girl-Child_factly.png"width="500" style="border-radius: 5px 5px 5px 5px;">
              <p> <small><a href="/library/karlotta-the-knight"><u>Karlotta the Knight</u></a> with her squire and steed.</small> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="spacer is-1-5 is-hidden-mobile">
    <!-- Latest Stories Section -->
    <section class="section" @click="LoadPost">
      <div class="container columns">
        <div class="column is-4 has-background-light">
          <h3>LATEST FACTCHECKS</h3>
          <br>
          <div>
            <h3><strong>Podcast: Regimes weaponizing social media</strong> <br>9 mins ago / Business</h3>
          </div>
          <br>
          <div>
            <h3><strong>Democrats launch campaign to reach 1 million California voters before Election Day  </strong><br>
            32 mins ago / Politics </h3>
          </div>
          <br>
          <div>
          <h3><strong>Facebook Messenger simplifies design for its 1.3 billion users </strong> <br>
            1 hour ago / Technology </h3>
          </div>
          <br>
          <div>
          <h3><strong>Megyn Kelly: When I was a kid, Halloween blackface "was OK"  </strong><br>
            1 hour ago / U.S. News </h3>
          </div>
          <br>
          <div>
          <h3><strong>125 Android apps caught up in million dollar ad fraud scheme  </strong><br>
            1 hour ago / Technology  </h3>
          </div>
          <br>
          <div>
          <h3><strong>Georgia governor candidate burned state’s Confederate-inspired flag </strong><br>
            2 hours ago / Politics  </h3>
          </div>
          <br>
          <div>
          <h3><strong>Facebook debuts political ad archive data report </strong> <br>
            2 hours ago / Politics </h3>
          </div>
          <br>
          <div>
          <h3><strong>Trump to meet Putin in Paris in November</strong> <br>
            2 hours ago / World </h3>
          </div>
          <br>
          <div>
          <h3>
            <strong>Tim Cook: Tech must embrace privacy to hold public trust </strong> <br>
            2 hours ago / Technology  </h3>
          </div>
          <br>
          <div>
          <h3>
            <strong>Report: Russia supported industrial controls cyberattack in 2017 </strong> <br>
            2 hours ago / Technology
          </h3>
          </div>
        </div>

        <div class="column is-8">
          <h3>LATEST STORIES</h3>
          <br>
          <!-- Latest stories section -->
          <LatestStories />
          <LatestStories />
        </div>
      </div>
    </section>

    <hr class="spacer is-1-5 is-hidden-mobile">

    <!-- MORE STORIES Section -->
    <section class="section" @click="LoadPost">
      <h3>MORE STORIES</h3>
      <br>
      <!-- FIRST POST -->
      <MoreStories />
      
      <!-- SECOND POST -->
      <MoreStories />

      <!-- THIRD POST -->
      <MoreStories />
     
      <!-- FOURTH POST -->
      <MoreStories />

    </section>

  </div>
</template>

<script>
  import LatestStories from '@/components/LatestStories'
  import MoreStories   from '@/components/MoreStories'

export default {
  components: {
    LatestStories : LatestStories,
    MoreStories   : MoreStories
  },
  methods: {
      LoadPost () {
        this.$router.push('/story')
      },
      LoadAuthor () {
            this.$router.push('/author')
      }
    }
/*  name: 'HomePage',
  components: {BLogo},
  data() {
      return {
          features: [
              { icon: 'github-circle', title: 'Free', content: `<span>Open source on <a href="https://github.com/buefy/buefy"> GitHub</a></span>` },
              { icon: 'cellphone-link', title: 'Responsive', content: `<span><b class="has-text-grey">Every</b> component is responsive</span>` },
              { icon: 'alert-decagram', title: 'Modern', content: `<span>Built with <a href="https://vuejs.org/">Vue.js</a> and <a href="http://bulma.io/">Bulma</a></span>` },
              { icon: 'arrange-bring-to-front', title: 'Lightweight', content: `<span>No other internal dependency</span>` }
          ]
      }
  }*/
}
</script>

