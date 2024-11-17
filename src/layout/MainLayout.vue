<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <NavBar />
    <main class="">
      <router-view />
      <!-- This is critical for rendering child components -->
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/shared/navbar.vue";

export default {
  name: "MainLayout",
  components: { NavBar },
};
</script>
<style>
</style>
