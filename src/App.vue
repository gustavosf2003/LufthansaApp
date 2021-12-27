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
/* Geral Adjusts */
html, body {
  height: 100%;
  margin: 0;
}
/* Page Scroll */
body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: hsl(0, 0%, 98%);
}

body::-webkit-scrollbar-thumb {
  background-color: hsl(0, 0%, 71%);
}

/* buttons */

.btn-outlined{
    background-color: #FFF;
    color: #05164D;
}

.btn{
  color: #FFF;
  background-color: #05164D;
}

/* titles */
.page-title{
  font-size: 2rem;
}


</style>