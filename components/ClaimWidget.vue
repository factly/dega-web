<template>
    <div>
        <br>
        <article
            :id="'claim'+(index+1)"
            class="post"
            style="text-align: justify;">
            <p v-html="claim.description">{{ claim.description }}</p>
        </article>
        <div class="card column is-full" style="background-color: #f5faff; margin: 1rem 0 1rem 0;">
            <div class="columns is-vcentered">
            <div class="column is-2">
                <div class="card-image">
                <figure class="image is-square">
                    <img :src="claim.claimant.image_url" alt="Claim Source" width="100%">
                </figure>
                </div>
            </div>
            <div class="column is-8">
                <div class="card-content" style="padding-top: 0px; padding-bottom: 0px;">
                    <div class style="padding-bottom: 0.75rem">
                        <span class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2" style="color: #1976d2;" >
                            Claimed by {{ claim.claimant.name }}
                        </span>
                        <span v-if="claim.claim_date" class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2"  style="color: #1976d2;"> on {{ getDate(claim.claim_date) }}</span>
                    </div>
                    <div class style="padding-bottom: 0.75rem">
                        <span class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2" style="color: #1976d2;">
                            Claim:
                        </span>
                        <span class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2">{{ claim.claim }}</span>
                    </div>
                    <div class="columns">
                        <!-- <p class="column title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile" style="color: #1976d2;">Share: 
                                    <a :href="'https://www.facebook.com/sharer/sharer.php?u='+ $nuxt.$route.path">
                                        <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                                        <path fill="#3b5998" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                                        </svg>
                                        
                                    </a>
                                    <a>
                                        <svg class="svg-inline--fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                        </svg>
                                        <span class="icon">
                                        <i class="fab fa-twitter"></i>
                                        </span>
                                    </a>
                        </p>-->
                        <!--<div class="column is-4">Review Sources</div>-->
                    </div>
                    <!-- <div>
                        <span class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2" style="color: #1976d2;">
                            Date:
                        </span>
                        <span class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2">{{ getDate(claim.claim_date) }}</span>
                    </div> -->
                </div>
            </div>
            <div class="column is-2">
                <div class="card-image">
                <figure class="image is-square">
                    <img :src="claim.rating.icon_url" alt="Claim Rating" width="90%">
                </figure>
                </div>
            </div>
            </div>
            <div>
                <p>
                    <span style="color: #1976d2;" class="title is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2" >Fact:</span>
                    <span class="subtitle is-size-3 is-size-4-tablet is-size-6-desktop is-size-6-mobile is-spaced is-2" >{{ claim.review }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    claim: {
      type: Object,
      required: true,
      default: null
    },
    index: {
      type: Number,
      required: true,
      default: null
    },
  },
  methods: {
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
  }
};
</script>