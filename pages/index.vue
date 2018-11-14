<template>
  <div>
    <!-- featured post section-->
    <section class="section is-hero" @click="LoadPost">
      <div class="container">
        <figure class ="image is-5by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
        <div class="content column">
          <p class="title is-size-5 is-size-4-tablet is-size-3-desktop has-text-link has-text-centered-desktop"> Details of pending criminal cases against candidates contesting Lok Sabha & Assembly elections will now be on Newspapers & TV</p>
          <!--<div class="has-text-centered">
            <span class="subtitle is-6">BY RAKESH DUBBUDU, </span>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>-->
          <div class="content subtitle is-hidden-mobile has-text-centered">
            <p>Following the judgment of the SC in September, the ECI has now issued directions to candidates & political parties on the format to be followed for publication of pending criminal cases in newspapers & TV channels. Here is a look at all the changes.
            </p>
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
    LatestStories,
    MoreStories
  },
  methods: {
    LoadPost() {
      this.$router.push('/story')
    },
    LoadAuthor() {
      this.$router.push('/author')
    }
  }
}
</script>

