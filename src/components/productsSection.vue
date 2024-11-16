<template>
  <div class="products">
    <div class="container">
        <div class="row row-cols-1  row-cols-md-3 g-3">
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
import ProductCard from './product-card.vue';

export default {
  name: "ProductsSection",
  props: {
    msg: String,
  },
  components:{
    ProductCard
  }
};
</script>

<style lang="scss" scoped>

</style>
