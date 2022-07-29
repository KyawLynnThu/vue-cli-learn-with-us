<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <upload-user-file />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import UploadUserFile from '@/components/Admin/UploadUserFile.vue'

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    UploadUserFile
  }
}
</script>

<style scoped>
</style>