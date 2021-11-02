<template>
  <div>
      <button @click="openLoading">sss</button>
        <b-loading :is-full-page="isFullPage" v-model="isLoading">
            <img class="loader" src="/svg/loader.svg" alt="Loading">
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
.loader{
  width: 100px;
  height: 100px;
  margin: 20px;
  display:inline-block;
}
</style>