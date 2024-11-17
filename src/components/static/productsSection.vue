<template>
  <div class="products">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="ButtonsContainer d-flex align-items-center">
          <button
            v-for="(button, index) in buttons"
            :key="index"
            class="btn main-button fs-14 f-w-bold"
            :class="{ active: activeIndex === index }"
            @click="selectButton(index)"
          >
            {{ button.label }}
          </button>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div>
          <ProductCard></ProductCard>
        </div>
        <div>
          <ProductCard></ProductCard>
        </div>
        <div>
          <ProductCard></ProductCard>
        </div>
        <div>
          <ProductCard></ProductCard>
        </div>
        <div>
          <ProductCard></ProductCard>
        </div>
        <div>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/shared/product-card.vue";

export default {
  name: "ProductsSection",
  props: {
    msg: String,
  },
  components: {
    ProductCard,
  },
  data() {
    return {
      activeIndex: 0, // Index of the currently active button
      buttons: [{ label: "المنتجات" }, { label: "الباقات" }],
    };
  },
  methods: {
    selectButton(index) {
      this.activeIndex = index; // Update the active button index
    },
  },
};
</script>

<style lang="scss" scoped>
.ButtonsContainer {
  background-color: #fff;
  border-radius: 50px;
  width: fit-content;
  margin-bottom: 44px;
  padding: 8px;
  gap: 14px;

  .main-button {
    height: 50px;
    min-width: 178px;
    background-color: #fff;
    color: #333537;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

    &:hover {
      transform: scale(1.05); /* Slight scaling effect */
    }

    &.active {
      background-color: #492d7e;
      color: #fff; /* Active text color */
    }
  }
}
</style>
