<template>
  <div>
    <nav-bar />
    <div class="container-fluid pt-5 px-5">
      <category-card />
      <!--<pagi-nav />-->
    </div>
    <common-footer />
  </div>
</template>

<script>
import CategoryCard from "@/components/User/CategoryCard"
//import PagiNav from "@/components/User/PagiNav"
import NavBar from "@/components/Common/NavBar"
import CommonFooter from "@/components/Common/CommonFooter"

export default {
  components: {
    CategoryCard,
    //PagiNav,
    NavBar,
    CommonFooter,
  },
}
</script>

<style>
</style>