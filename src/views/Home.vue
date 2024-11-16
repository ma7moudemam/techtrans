<template>
    <div>
        <LandingSection></LandingSection>
    </div>
</template>

<script>

import  LandingSection from '../components/landing.vue'

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    LandingSection
  }
};
</script>

<style lang="scss" scoped></style>
