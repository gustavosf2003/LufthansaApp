<template>
  <article>
        <section class="empty-box">
            <AirplaneCheck/>
            <p class="is-size-4 mt-3">{{title}}</p>
            <p class="is-size-5">{{subtitle}}</p>
        </section>
  </article>
</template>

<script>
import AirplaneCheck from "../components/icons/aiplaneCheck.vue"
export default {
    name:'Emptybox',
    components:{
      AirplaneCheck
    },
    props:{
        title: String,
        subtitle: String,
    }

}
</script>

<style scoped>
.empty-box{
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    height: 20rem;
    border-radius: 5px;
    border-bottom: 2px solid #dbdbdb;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>