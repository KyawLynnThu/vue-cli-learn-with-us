<template>
  <div>
    <nav-bar />
    <div class="container-fluid pt-5 px-5">
      <total-course />
      <search-card />
    </div>
   
  </div>
</template>

<script>
import TotalCourse from "@/components/User/TotalCourse"
import SearchCard from "@/components/User/SearchCard"
import NavBar from "@/components/Common/NavBar"

export default {
  components: {
    SearchCard,
    TotalCourse,
    NavBar,
    
  },
}
</script>

<style scoped>
</style>