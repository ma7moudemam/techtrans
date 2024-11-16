<template>
    <div class="homepage">
        <LandingSection ></LandingSection>
        <ProductsSection></ProductsSection>
    </div>
</template>

<script>

import ProductsSection from '@/components/productsSection.vue';
import  LandingSection from '../components/landing.vue'

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    LandingSection,
    ProductsSection
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  position: relative;

  // Ensure sections stack properly
  & > * {
    position: relative;
    z-index: 1; /* Default stacking context for children */
  }
}

.products {
  margin-top: -80px; /* Adjust as needed for overlap */
  z-index: 2; /* Ensure this section is above the landing */
  background-color: transparent;
}

.landing {
  position: relative;
  z-index: 1; /* Default stacking context */
}
</style>