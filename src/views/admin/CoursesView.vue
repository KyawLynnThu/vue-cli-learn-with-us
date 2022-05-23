<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <courses-list />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import CoursesList from "@/components/Admin/Courses/CoursesList"

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    CoursesList,
  },
}
</script>

<style scoped>
</style>