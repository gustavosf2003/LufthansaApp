<template>
  <div>
    <Navbar/>
    <div class="container is-fluid mt-3">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'
export default {
  name: "App",
  components:{
    Navbar,
    Footer
  }
};
</script>
<style>
html, body {
  height: 100%;
  margin: 0;
}
body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: hsl(0, 0%, 98%);
}

body::-webkit-scrollbar-thumb {
  background-color: hsl(0, 0%, 71%);    /* color of the scroll thumb */
}
</style>