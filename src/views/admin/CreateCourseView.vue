<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <create-courses />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import CreateCourses from "@/components/Admin/Courses/CreateCourses"

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    CreateCourses,
  },
}
</script>

<style scoped>
</style>