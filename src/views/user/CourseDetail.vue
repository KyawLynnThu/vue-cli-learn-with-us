<template>
  <div>
    <nav-bar />
    <div class="container-fluid">
      <course-outline />
      <write-review />
      <show-review />
      <related-courses />
    </div>
    <common-footer />
  </div>
</template>

<script>
import CourseOutline from "@/components/User/CourseOutline"
import WriteReview from "@/components/User/WriteReview"
import ShowReview from "@/components/User/ShowReview"
import RelatedCourses from "@/components/User/RelatedCourses"
import NavBar from "@/components/Common/NavBar"
import CommonFooter from "@/components/Common/CommonFooter"

export default {
  components: {
    CourseOutline,
    WriteReview,
    ShowReview,
    RelatedCourses,
    NavBar,
    CommonFooter
  }
}
</script>

<style scoped>
</style>