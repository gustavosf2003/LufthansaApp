<template>
  <div id="nav">
    <b-navbar>
        <template #brand>
            <b-navbar-item>
                <router-link to="/">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </router-link>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item>
                <router-link to="/">Home</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/companies">Companies</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/master">Master</router-link>
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link class="button is-primary" to="/login">
                    <strong>Log in</strong>
                    </router-link>
                </div>
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