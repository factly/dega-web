<template>
    <div class="columns sticky">
        <div class="columns is-one-third is-divider-vertical is-hidden-mobile"/>
        <div class="column is-two-third ">
            <div
            class="box has-text-weight-semibold"
            style="color: #1976d2; text-align:left;">
            <div class="is-uppercase has-text-centered">List of claims in the story</div>
            <br>
            <div class="has-text-centered">
                <SocialSharing :url="$nuxt.$route.path"/>
            </div>
            <div
                v-for="(claim, index) in factchecks[0].claims"
                :key="index">
                <hr>
                <a :href="'#claim'+(index+1)">
                <h2 class="has-text-weight-semibold" style="color:#034f84;" >#{{ index+1 }}. {{ claim.claim }}</h2>
                </a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialSharing from '~/components/SocialSharing';

export default {
    components: {
        SocialSharing
    },
    props: {
        factchecks: {
            type: Array,
            required: true,
            default: null
        }
    }
};
</script>