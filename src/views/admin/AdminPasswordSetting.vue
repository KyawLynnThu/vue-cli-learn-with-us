<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <admin-password />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar";
import AdminNavi from "@/components/Common/AdminNavi";
import AdminPassword from "@/components/Admin/AdminPassword.vue";

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    AdminPassword,
  },
};
</script>

<style scoped>
</style>