<template>
	<div>
		<section class="section-hero-title"> <br><br><br>
      <div class="container  has-text-centered">
        <div class="column ">
          <h1 class="title is-2 has-text-weight-bold"> Politics</h1>
        </div>
      </div>
    </section>

<!-- First-Post -->
    <section class="section" @click="LoadPost">
      <ListBig />
      <br>
    <!-- Second post -->
      <div class="container ">
        <div class="columns is-centered">
          <ListSmall />
          <!-- Third Post -->
          <ListSmall />
        </div>
      </div>
      <br>
	<!-- other single post -->
      <ListBig />
      <br>
<!-- other 2 posts -->
      <div class="container">
        ~<div class="columns is-centered">
          <ListSmall />
          <ListSmall />
        </div>
      </div>
	 	</section>
	</div>
</template>

<script>
import ListBig from '@/components/ListBig'
import ListSmall from '@/components/ListSmall'

export default {
  components: {
    ListBig,
    ListSmall
  },
  methods: {
   LoadPost(){
     this.$router.push('/story')
   }
  }
}

</script>



