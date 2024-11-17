<template>
  <div class="product-card d-flex flex-column cursor-p"  @click="goToProductDetails">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-20">
        <div>
          <img :src="product.image" alt="" class="productImg"/>
        </div>
        <div class="fs-18 f-w-bold text-black">{{product.name}}</div>
      </div>
      <div class="d-flex align-items-center gap-6">
        <div @click="toggleLove" class="cursor-p love-icon">
          <img :src="isLoved ? lovedImage : defaultImage" alt="Love Icon" />
        </div>
        <div>
          <img src="@/assets/images/icons/share.svg" alt="" class="cursor-p" />
        </div>
      </div>
    </div>
    <!-- description -->
    <div class="fs-14 f-w-regular mt-12 text-333537">
      {{ product.description }}
    </div>
    <!-- offer -->
    <div class="offer d-flex align-items-center gap-1 text-321D5D fs-12">
      <span class="f-w-regular"> اشترك سنة واحصل على </span>
      <span class="f-w-bold"> شهرين مجاناً </span>
    </div>
    <!-- Clients -->
    <div class="clients d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center gap-1">
        <div class="clientType fs-12 f-w-medium">قطاع خاص</div>
        <div class="clientType fs-12 f-w-medium">فرد</div>
      </div>
      <!-- line -->
      <div class="centerBorder"></div>
      <div class="d-flex align-items-center justify-content-between gap-6">
        <!-- clients number -->
        <div class="clientNumber d-flex align-items-center gap-1">
          <img src="@/assets/images/icons/client.svg" alt="" />
          <div class="fs-14 f-w-bold">12</div>
          <div class="fs-12 f-w-bold">عميل</div>
        </div>

        <!-- stars -->
        <div class="stars d-flex align-items-center gap-1">
          <img src="@/assets/images/icons/star.svg" alt="" />
          <div class="fs-14 f-w-bold text-FCA320">5</div>
        </div>
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
    productDescription: String,
    product: {
      type: Object,
      required: true, // Ensure the product prop is always passed
    },
  },
  data() {
    return {
      isLoved: false, // Tracks the state of the love button
      defaultImage: require("@/assets/images/icons/love.svg"), // Default image path
      lovedImage: require("@/assets/images/icons/colredLove.svg"), // Image for active state
    };
  },
  methods: {
    toggleLove() {
      this.isLoved = !this.isLoved; // Toggle the love button state
    },

    goToProductDetails() {
      this.$router.push({
        name: "ProductDetails",
        params: { id: this.product.id },
        state: { product: this.product }, // Pass product data via state
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  background-color: #fff;
  border-radius: 20px;
  padding: 24px 18px;
}

.clients {
  border: 1px solid #ededed;
  min-height: 46px;
  border-radius: 50px;
  padding: 0 8px;
}

.offer {
  background-color: #edeaf3;
  width: fit-content;
  height: 30px;
  border-radius: 50px;
  padding: 0 16px;
  border: 1px solid rgba(50, 29, 93, 0.1);
  margin-top: 12px;
  margin-bottom: 12px;
}

.gap-20 {
  gap: 20px;
}

.gap-6 {
  gap: 6px;
}

.stars {
  background-color: rgba(252, 163, 32, 0.1);
  border: 1px solid rgba(252, 163, 32, 0.1);
  border-radius: 50px;
  height: 30px;
  padding: 0 8px;
}

.text-FCA320 {
  color: #fca320;
}

.clientNumber {
  background-color: rgba(16, 115, 163, 0.1);
  border: 1px solid rgba(16, 115, 163, 0.1);
  border-radius: 50px;
  height: 30px;
  padding: 0 8px;
  color: #1073a3;
}

.centerBorder {
  height: 20px;
  width: 1px;
  background-color: #ededed;
}

.clientType {
  background-color: #f1f1f1;
  border-radius: 50px;
  // min-height: 30px;
  padding: 6px 10px;
  color: #333537;
}

.love-icon {
  img {
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1); /* Slight scaling effect on hover */
  }
}

.productImg{
  width: 69px;
  height: 60px;
}
</style>
