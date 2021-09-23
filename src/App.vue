<template>
  <div id="app">
    <b-tag type="is-info">First</b-tag>
    <router-link to="/companies">Companies</router-link>|
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
