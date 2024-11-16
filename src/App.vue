<template>
  <Navbar></Navbar>
  <HomePage></HomePage>
</template>

<script>
import Navbar from './components/navbar.vue';
import HomePage from './views/Home.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


export default {
  name: 'App',
  components: {
    Navbar,
    HomePage
  }
}
</script>

<style lang="scss" scoped>

@import "~bootstrap/scss/bootstrap";




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}


</style>
