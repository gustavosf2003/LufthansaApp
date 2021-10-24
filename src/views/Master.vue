<template>
  <div>
      <h1>Página master</h1>
        <b-field>
            <b-button
                label="Launch loading"
                type="is-primary"
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

<style>

</style>