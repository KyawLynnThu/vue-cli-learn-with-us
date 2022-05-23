<template>
  <div>
    <nav-bar />
    <div class="container-fluid pt-5 px-5">
      <total-course />
      <search-card />
      <pagi-nav />
    </div>
    <common-footer />
  </div>
</template>

<script>
import PagiNav from "@/components/User/PagiNav"
import TotalCourse from "@/components/User/TotalCourse"
import SearchCard from "@/components/User/SearchCard"
import NavBar from "@/components/Common/NavBar"
import CommonFooter from "@/components/Common/CommonFooter"
export default {
  components: {
    PagiNav,
    SearchCard,
    TotalCourse,
    NavBar,
    CommonFooter,
  },
}
</script>

<style>
</style>