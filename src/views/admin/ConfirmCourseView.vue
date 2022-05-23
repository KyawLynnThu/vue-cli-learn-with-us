<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <confirm-course />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar.vue";
import AdminNavi from "@/components/Common/AdminNavi.vue";
import ConfirmCourse from "@/components/Admin/Courses/ConfirmCourse.vue";

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    ConfirmCourse,
  },
};
</script>

<style scoped>
</style>