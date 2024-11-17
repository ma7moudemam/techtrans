<template>
  <div id="app">
    <router-view />
    <!-- Dynamic route content -->
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
