<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <admin-profile/>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import AdminProfile from '@/components/Admin/AdminProfile'

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    AdminProfile
  }
}
</script>

<style scoped>
</style>