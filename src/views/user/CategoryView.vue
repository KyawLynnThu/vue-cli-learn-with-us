<template>
  <div>
    <nav-bar />
    <div class="container-fluid pt-5 px-5">
      <category-card />
    </div>
    <common-footer />
  </div>
</template>

<script>
import CategoryCard from "@/components/User/CategoryCard"
import NavBar from "@/components/Common/NavBar"
import CommonFooter from "@/components/Common/CommonFooter"

export default {
  components: {
    CategoryCard,
    NavBar,
    CommonFooter
  }
}
</script>

<style>
</style>