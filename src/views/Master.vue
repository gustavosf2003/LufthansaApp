<template>
  <div>
      <h1>Página master</h1>
        <b-field>
            <b-button
                label="Launch loading"
                class="label"
                size="is-medium"
                @click="loader" />
        </b-field>
        <Loading />
  </div>
</template>

<script>
import Loading from "../components/Loading.vue"
export default {
    title:"Master",
    components:{
        Loading
    },
    data(){
        return{
            load: 0
        }
    },
    methods:{
        loader(){
            this.load = 1
        }
    }
}
</script>

<style scoped>
.label{
    background-color: #05164D;
    color: #FFF;
}
.label:hover{
    color: #FFF;
}
</style>