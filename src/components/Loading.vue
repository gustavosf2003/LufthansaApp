<template>
  <div>
      <button @click="openLoading">sss</button>
        <b-loading :is-full-page="isFullPage" v-model="isLoading">
            <img src="/img/splash.gif" style="margin-right:200px;width:1000px;" alt="Loading Airport">
        </b-loading>
  </div>
</template>

<script>
export default {
name:"Loading",
    data() {
            return {
                isFullPage: true
            }
    },
    props:{
        isLoading: Boolean
    },
    methods: {
        openLoading() {
            this.isLoading = true
            setTimeout(() => {
                this.isLoading = false
            }, 5000)
        }
    }
}
</script>

<style>

</style>