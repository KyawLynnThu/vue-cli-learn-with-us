<template>
  <div class="container-fluid ">
    <nav-bar/>
    <course-outline/>
    <write-review />
    <show-review />
    <related-courses/>
    <common-footer/>
  </div>
</template>

<script>
import CourseOutline from '@/components/User/CourseOutline.vue'
import WriteReview from '@/components/User/WriteReview.vue'
import ShowReview from '@/components/User/ShowReview.vue'
import RelatedCourses from '@/components/User/RelatedCourses.vue'
import NavBar from '@/components/Common/NavBar.vue'
import CommonFooter from '@/components/Common/CommonFooter.vue'



export default {
  components: {
    CourseOutline,
    WriteReview,
    ShowReview,
    RelatedCourses,
    NavBar,
    CommonFooter
    },
}
</script>

<style scoped>

</style>