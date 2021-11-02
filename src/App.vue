<template>
  <div>
    <Navbar/>
    <div class="container is-fluid mt-3">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
export default {
  name: "App",
  components:{
    Navbar
  }
};
</script>