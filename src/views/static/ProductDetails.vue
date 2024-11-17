<template>
  <div class="ProductDetails">
    <FreeTrail></FreeTrail>
    <MailNews></MailNews>
  </div>
</template>

<script>
import FreeTrail from '@/components/shared/freeTrail.vue';
import MailNews from '@/components/shared/mailNews.vue';



export default {
  name: "ProductDetails",
  props: {
    msg: String,
  },
  components: {
    MailNews , 
    FreeTrail
  },
};
</script>

<style lang="scss" scoped>
  .ProductDetails{
    margin-top:160px;
  }
</style>
