<template>
  <div class="landing">
    <div class="container">
      <div class="d-flex flex-column justify-content-center align-items-center ">
        <div class="w-75 text-center  f-w-bold fs-56">منتجات مبتكرة لمستقبل افضل متطور أكثر استدامة</div>

        <div class="w-75 text-center fs-16 f-w-regular mt-32">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات مثبتة منذ
          زمن طويل وهي أن المحتوى المقروء مثبتة منذ زمن
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingSection",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.landing {
  background-color: #492d7e;
  border-radius: 40px;
  color: #fff;
  margin-left: 17px;
  margin-right: 17px;
  padding: 100px;
}


</style>
