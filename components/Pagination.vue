<template>
  <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
    <button v-if="mutablePaging.hasPrevious" class="button is-light pagination-previous" @click="fetchPreviousPage">⬅️ Previous</button>
    <button v-if="mutablePaging.hasNext" class="button is-light pagination-next" @click="fetchNextPage">Next page ➡️</button>
  </nav>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: null
    },
    paging: {
      type: Object,
      required: true,
      default: null
    },
   fetchData: {
       type: Function,
       default: null
   }
  },
  data(){
      return {
        mutablePaging: this.paging
      }
  },
  methods: {
    async fetchPreviousPage() {
      if(this.mutablePaging.hasPrevious){
          const { data , paging } = await this.fetchData(null,this.mutablePaging.previous).then(result => result);
          console.log(data,paging)
          this.mutablePaging = paging;
          this.$emit('update:list', data);
          this.$emit('update:paging', this.mutablePaging)
      }
    },
    async fetchNextPage() {
      console.log('Fetch Next Page',this.fetchData);
      if(this.mutablePaging.hasNext){
          const { data , paging } = await this.fetchData(this.mutablePaging.next).then(result => result);
          console.log(data,paging)
          this.mutablePaging = paging;
          this.$emit('update:list', data);
          this.$emit('update:paging', this.mutablePaging)
      }
    }
  }
}
</script>

