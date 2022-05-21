<template>
  <div class="container-fluid p-5">
    <TotalCourse></TotalCourse>
    <SearchCard></SearchCard>
    <PagiNav></PagiNav>
  </div>
</template>

<script>

import SearchCard from '@/components/User/SearchCard'
import TotalCourse from '@/components/User/TotalCourse'
import PagiNav from '@/components/User/PagiNav'
export default {
  components: {
    SearchCard,
    TotalCourse,
    PagiNav },

}
</script>

<style>

</style>