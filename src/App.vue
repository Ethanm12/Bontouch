<template>
  <div id="app">
    <Nav></Nav>
    <div class="page"><router-view></router-view></div>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  
  async mounted () {
    await this.$store.dispatch("getUsers");
    //Add this using webpack
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://use.fontawesome.com/97ba911c72.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
