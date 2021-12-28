<template>
  <section class="mb-3">
      
      <b-message :type="status == 0 ? 'is-success' : 'is-danger'" auto-close v-if="msg">
        {{ msg }}
      </b-message>
  </section>
</template>

<script>
export default {
    title: "Message",
    props:{
      msg: String,
      status: Number
    }
}
</script>

<style>

</style>