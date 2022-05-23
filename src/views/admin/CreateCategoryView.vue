<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <create-subcategories />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import CreateSubcategories from "@/components/Admin/Categories/CreateSubcategories"

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    CreateSubcategories,
  },
}
</script>

<style scoped>
</style>