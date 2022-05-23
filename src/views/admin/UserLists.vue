<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <user-lists />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import UserLists from "@/components/Admin/UserLists"

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    UserLists,
  },
}
</script>

<style scoped>
</style>