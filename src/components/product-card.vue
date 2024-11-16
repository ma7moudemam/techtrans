<template>
  <div class="product-card d-flex flex-column">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <div>
            <img src="" alt="">
          </div>
          <div>
            {{ profitLabel }}
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </div>
      </div>
      <!-- description -->
      <div>
        نظام إلكتروني يساعد على إدارة الفعاليات إلكترونياً والقدوة على إقامتها إفتراضياً.
      </div>
      <!-- offer -->
      <div class="offer d-flex align-items-center gap-1 text-321D5D fs-12">
        <span class="f-w-regular">
          اشترك سنة واحصل على  
        </span>
        <span class="f-w-bold">
          شهرين مجاناً
        </span>
      </div>
      <!-- Clients -->
      <div class="clients d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-1">
          <div class="clientType">

          </div>
        </div>

        <div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    msg: String,
    profitLabel: String,
    productDescription:String,

  },
};
</script>

<style lang="scss" scoped>
.product-card {
  background-color: #fff;
  border-radius: 20px;
  padding:24px 18px;
}


.clients{
  border:1px solid #EDEDED;
  min-height: 46px;
  border-radius:50px;
}

.offer{
  background-color: #EDEAF3;
  width: fit-content;
  height: 30px;
  border-radius: 50px;
  padding: 0 16px ;
  border:1px solid rgba(50, 29, 93, 0.1);
  margin-top: 12px;
  margin-bottom: 12px;
}


</style>
