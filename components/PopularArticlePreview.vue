<!-- Popular articles -->
<template>
  <div class="media">
    <figure class="media-left">
      <div class="image is-48x48">
        <p
          class="title has-text-grey-light is-3 has-text-centered"
        >{{ rank }}</p>
      </div>
    </figure>
    <div class="media-content">
      <div class="content">
        <div style="margin-bottom: 0.5rem;">
          <p
            class="popular-headline"
          >శ్రీలంకలోని ఫోటోని పెట్టి భారత మహిళల రక్షణలో బీజేపి విఫలమైనట్టుగా చూపిస్తున్నారు.</p>
        </div>
        <div>
          <div>
            <p style="subtitle is-7">Piper Steele</p>
          </div>
          <div>
            <p class="subtitle is-7 has-text-grey">May 21</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .popular-headline {
    font-family: 'Ramabhadra', "Lucida Grande","Lucida Sans Unicode","Lucida Sans", "Geneva", "Arial", "sans-serif" !important;
    font-size: 21px !important;
    line-height: 24px !important;
    margin-bottom: 0.5rem;
  }
</style>
<script>
export default {
  props: {
    rank: {
      type: String,
      required: true
    }
  }
};
</script>
