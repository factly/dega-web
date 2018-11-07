<template>
	<div>
		<section class="section">
			<div class="container ">
				<article class="media">
					<figure class="media-left">
						<p class="image is-64*64"> 
							<img class="is-rounded gatsby-imagewrapper"src="https://secure.gravatar.com/avatar/1967fa4790de5665198e36e746b0d148?s=200&d=mm&r=g" >
						</p>
					</figure>
                	<div class="media-content">
						<div class="content"><br><br>
								<p>
									<strong>AILA BANDAGI KANDAKUNTLA</strong> <br><br>
									Aila Bandagi is a social scientist by training and specializes in Urban Development and Gender Studies.<br> She loves to explore cities and dance. At Factly, she Fact Checks government claims.
								</p>
							</div>
						</div>
				</article>
		    </div>
		</section>
		<hr class="spacer is-1-5">
		<!-- posts-section -->

		<section class="section"@click="LoadPost">

			<div class="container">
    			<div class="columns is-centered">
            		<ListSmall />
            		<ListSmall />
				</div>
			</div>
                  <br>
		<!-- another two posts -->
			<div class="container">
            	<div class="columns is-centered">
            		<ListSmall />
            		<ListSmall />
				</div>
			</div>
		</section>
	</div>
</template>



<script>
	import ListSmall from '@/components/ListSmall'
	export default {
		components : {
			ListSmall : ListSmall
		},

		methods : {
                LoadPost () {
        		this.$router.push('/story')
		}
	}
}
	
</script>




