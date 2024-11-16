<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="d-flex align-items-center gap-75">
        <a class="navbar-brand" href="#"
          ><img src="../assets/images/main/logo.svg" alt=""
        /></a>
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-none d-lg-flex"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">الرئيسية</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">عن التحول التقني</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">المنتجات</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">تواصل معنا</a>
          </li>
          
        </ul>

        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>

   
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-lg-none"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Link</a>
          </li>
        </ul>
      </div>

      <button class="btn main-button">تسجيل الدخول</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  border-radius: 40px;
  height: 80px;
  margin-left: 40px;
  margin-right: 40px;
  position: absolute;
  top: 18px;
}

.nav-link{
    color:#2B3759;
}

.gap-75 {
  gap: 75px;
}
</style>
