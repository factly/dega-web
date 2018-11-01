<template>
	<div>
		<section class="hero-title has-text-centered ">
			<div class="hero-body">
			    <div class="container" >
			    	<h1 class=" title is-2 has-text-weight-bold">Government claims on
                    the "Welfare of the Girl Child"</h1>
                    <h2 class="subtitle is-6"@click="LoadAuthor">BY AILA BANDAGI KANDLAKUNTA ON OCTOBER 10, 2018</h2>
                    
                </div>
	        </div>
	    </section>
<!-- image-section -->
		<section class="section">
			<!-- <div class="container"> -->
				<figure class="image is-2by1">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
				</figure>
			<!-- </div> -->
		</section>
			

	<!-- POST-Text-section -->

		<section class="section">
			<div class="container  ">
				<div class="column">
					
					<article class="post">
				
				          <p>An infographic published by the government claims that financial future has been secured for crores of girls in India. This claim is part of a series on ‘speed and scale of transformation’ in India. Here is a fact check of the claim.
				          </p>

				          
                          <p><strong>What is the  Sukanya Samriddhi Scheme?</strong></p>

                          <p>The Sukanya Samriddhi Yojana (SSY) is as girl child prosperity scheme under the Beti Bachao Beti padhao program. The scheme is targeted at the girl child and her welfare. The natural or legal guardian of the girl child can open a bank account from the time of her birth till she attains an age of ten. The scheme requires the family to deposit small amounts into a bank account on the girl’s name. The current interest rate offered for this scheme by the government is 8.5% per annum. The normal tenure of the account is till the girl child turns 21 years of age where after she is entitled to the entire amount in the account. The scheme is administered by the Ministry of Finance and it was notified in December 2014.
                          </p>

                         
	
					      <p><strong>Claim: More than 1.26 crore SSY accounts opened with Rs 19,183 crore deposits</strong></p>

						
				          <p>The minimum deposit amount under SSY has been reduced to Rs 250 from the existing Rs 1000. The scheme also provides for triple-E exemptions under the income tax act. The infograph claims that more than 1.26 crore  SSY accounts have been opened for the girl child with over Rs 19,183 crores deposited.</p>

				          

				          <p>As on 30th June 2018, more than 1.39 crore have been opened under SSY as per the information shared by the government in Lok Sabha. The total deposits under SSY crossed Rs 25000 crore as of 30th June 2018.  There are wide state wise variations in terms of the accounts opened under SSY and the amount deposited. The highest average deposit per SSY account was in Delhi while the most number of accounts per 1000 female in the 0-10 age group was in Himachal Pradesh. Compared to the total female population in the 0-10 age group as per the 2011 census, the number of accounts opened is less than 15%.
				          </p>

				         

				          <p>The interest rate on the accounts opened under this scheme when it was initially launched was 9.1% and was increased to 9.2% in the subsequent year. It was reduced to 8.1%  in 2017-18 and is now increased to 8.5% per annum.
				          </p>

				          

				          <p class="notification"><strong> Claim: </strong>More than 1.26 crore Sukanya Samriddhi accounts have been opened for the girl child with over 19,183 crores deposited and that financial future has been secured for crores of girls.
				          	<br>

				          

				          <strong>Fact: </strong>As on 30th June 2018, 1,39,85,442 accounts have been opened under SSY and a total amount of Rs 25979.62 crore  has been deposited. The numbers are higher than the claim because of the dynamic nature of the scheme. Hence, this claim is TRUE. But the claim that financial future has been secured for crores of girls is FALSE since only 1.39 crore accounts have been opened under the SSY and this is less than 15% of the total female population in the 0-10 age group as per the 2011 census.</p>
				          <p><strong>Did the previous governments have similar schemes?</strong><br>
				          While the larger Beti Bachao Beti Padhao scheme has a number of schemes similar to the ones started before 2014, the SSY is a new approach. The UPA government had also implemented multiple schemes for the welfare of the girl child like the Dhanalakshmi (conditional cash transfer scheme), SABLA for nutrition of adolescent girls, special focus on girl child in Sarva Shiksha Abhiyan etc. But there was no small savings scheme like the SSY exclusively for the girl child.
			              </p>

				          <p>This story is part of a larger series on the 4-years of the Modi government. This series has been made possible with the flash grant of the International Fact Checking Network (IFCN). Read the rest of the stories in this series here.

				         </p>
								
					</article>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		methods: {
     		 LoadAuthor () {
        		this.$router.push('/Author')
      }
    }
}
	
</script>

<style>
	.post {
	max-width: 800px;
	margin: auto;
	text-align: left;
	margin-bottom: 1rem;
	line-height: 1.85;
	font-size: 1.25rem;
	color: rgba(0,0,0,.8);
	margin-top:-80px;
	}

	p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	}

</style>





