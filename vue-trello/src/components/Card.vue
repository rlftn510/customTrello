<template>
  <div>
      <div v-if="loading">Card Loading....</div>
      <div v-else>
          <p>card : {{this.cid}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            cid : 0
        }
    },
    watch: {
        '$route' : {
            handler : 'fetchData',
            immediate : true
        }
    },
    created() {
        this.fetchData()
        // this.cid = this.$route.params.cid
    },
    methods : {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            }, 500) 
        }
    }
}
</script>

<style>

</style>