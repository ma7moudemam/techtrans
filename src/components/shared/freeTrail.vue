<template>
  <div class="container">
    <div class="freeTrail d-flex align-items-center justify-content-center">
      <div class="d-flex justify-content-between align-items-center col">
        <div class="d-flex flex-column gap-3"> 
          <div class="fs-24 f-w-regular">
            نسخة تجريبية
          </div>
          <div class="fs-26 d-flex align-items-center gap-1">
            <span class="f-w-bold">جرب المنتج الان لمدة ٧ ايام</span>
            <span class="f-w-bold text-492D7E">مجاناً</span>

          </div>
        </div>
        <div>
          <button class="btn outline-btn">طلب نسخة</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeTrail",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
  .freeTrail{
    background-color: #28C1E1;
    border-radius: 24px;
    color: #fff;
    height: 204px;
    padding:60px
  }

  .outline-btn{
    color:#4F3969;
    background-color: #fff;
    border-radius: 20px;
    height: 50px;
    width:175px;
  }
</style>
