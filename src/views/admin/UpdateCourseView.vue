<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <update-course />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import UpdateCourse from "@/components/Admin/Courses/UpdateCourse"

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    UpdateCourse
  }
}
</script>

<style scoped>
</style>