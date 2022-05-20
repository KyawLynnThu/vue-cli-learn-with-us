<template>
  <div class="container-fluid p-5">
    <TotalCourse></TotalCourse>
    <SearchCard></SearchCard>
    <PagiNav></PagiNav>
  </div>
</template>

<script>

import SearchCard from '../../components/search/SearchCard'
import TotalCourse from '../../components/search/TotalCourse'
import PagiNav from '../../components/PagiNav'
export default {
  components: {
    SearchCard,
    TotalCourse,
    PagiNav },

}
</script>

<style>

</style>