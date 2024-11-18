<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
  
    <main class="">
      <router-view />
      <!-- This is critical for rendering child components -->
    </main>
  </div>
</template>

<script>

export default {
  name: "AuthLayout",
  components: {},
};
</script>
<style></style>
