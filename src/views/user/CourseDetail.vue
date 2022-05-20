<template>
  <div class="container-fluid ">
    <CourseOutline></CourseOutline>
    <WriteReview></WriteReview>
    <ShowReview></ShowReview>
    <RelatedCourses></RelatedCourses>
  </div>
</template>

<script>

import RelatedCourses from '../../components/detail/RelatedCourses'
import ShowReview from '../../components/detail/ShowReview'
import WriteReview from '../../components/detail/WriteReview'
import CourseOutline from '../../components/detail/CourseOutline'
export default {
  components: {
    RelatedCourses,
    ShowReview,
    WriteReview,
     CourseOutline },

}
</script>

<style scoped>

</style>