<template>
  <div>
    <nav-bar />
    <div class="container-fluid pt-5 px-5">
      <category-card />
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/User/CategoryCard"
import NavBar from "@/components/Common/NavBar"

export default {
  components: {
    CategoryCard,
    NavBar,
  }
}
</script>

<style>
</style>