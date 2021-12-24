<template>
  <div id="nav">
    <b-navbar class="back" shadow transparent active>
        <template #brand>
            <b-navbar-item class="ml-5">
                <router-link to="/">
                    <div class="container">
                        <img class="img" src="/img/logo.png">
                        <h1 class="title">Lufthansa</h1>
                    </div>
                </router-link>
            </b-navbar-item>
        </template>
        <template #end >
            <b-navbar-item active>
                <router-link class="subItems" to="/">Home</router-link>
            </b-navbar-item>
            <b-navbar-item active> 
                <router-link class="subItems" to="/routes">Rotas</router-link>
            </b-navbar-item>
            <b-navbar-item active class="mr-5">
                <router-link class="subItems" to="/master">Master</router-link>
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
name:"Navbar",
}
</script>
<style scoped>
.title{
    font-size: 1.7rem;
    font-weight: 700;
    color: white;
    padding-left: 0.2rem;
}
.subItems{
    font-size: 1em;
    color: #FFF;
    
}
.subItems:hover{
    font-size: 1.01em;
}
.container{
    display: flex;
    align-items: center;
}
.back{
    background: #05164D;
    color: white;
    height: 70px;
}
</style>