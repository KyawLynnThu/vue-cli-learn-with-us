<template>
  <div class="container-fluid p-5">
    <category-card></category-card>
    <pagi-nav></pagi-nav>
  </div>
</template>

<script>
import CategoryCard from '@/components/User/CategoryCard.vue'
import PagiNav from '@/components/User/PagiNav.vue'

export default {
  components: {
    CategoryCard,
    PagiNav
      },

}
</script>

<style>

</style>