<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="d-flex align-items-center gap-75">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/images/main/logo.svg" alt="Logo" />
        </router-link>
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-none d-lg-flex"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: isActive('/') }"
              to="/"
            >
              {{ $t("navbar.home") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: isActive('/about') }"
              to="/about"
            >
              {{ $t("navbar.aboutUS") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: isActive('/products') }"
              to="/products"
            >
              {{ $t("navbar.products") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: isActive('/contact') }"
              to="/contact"
            >
              {{ $t("navbar.contactUs") }}
            </router-link>
          </li>
        </ul>
      </div>

      <router-link to="/auth/login" class="btn main-button"
        >تسجيل الدخول</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 90%;
  background-color: #fff;
  border-radius: 40px;
  height: 80px;
  position: absolute;
  top: 18px;
  z-index: 5;
  margin-left: 80px;
  margin-right: 80px;
}

.nav-link {
  color: #2b3759;
  transition: color 0.3s;
}

.nav-link.active {
  font-weight: bold;
  color: #492d7e;
}

.gap-75 {
  gap: 75px;
}
</style>
