<template>
  <div class="homepage">
    <LandingSection></LandingSection>
    <ProductsSection></ProductsSection>
    <MailNews></MailNews>
  </div>
</template>

<script>
import ProductsSection from "@/components/static/productsSection.vue";
import LandingSection from "@/components/static/landing.vue";
import MailNews from "@/components/shared/mailNews.vue";

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    LandingSection,
    ProductsSection,
    MailNews,
  },
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
  margin-top: -176px; /* Adjust as needed for overlap */
  z-index: 2; /* Ensure this section is above the landing */
  background-color: transparent;
}

.landing {
  position: relative;
  z-index: 1; /* Default stacking context */
}
</style>
