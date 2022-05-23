<template>
  <div>
    <nav-bar />
    <div class="container-fluid pt-5 px-5">
      <category-card />
      <pagi-nav />
    </div>
    <common-footer />
  </div>
</template>

<script>
import CategoryCard from "@/components/User/CategoryCard.vue";
import PagiNav from "@/components/User/PagiNav.vue";
import NavBar from "@/components/Common/NavBar.vue";
import CommonFooter from "@/components/Common/CommonFooter.vue";

export default {
  components: {
    CategoryCard,
    PagiNav,
    NavBar,
    CommonFooter,
  },
};
</script>

<style>
</style>