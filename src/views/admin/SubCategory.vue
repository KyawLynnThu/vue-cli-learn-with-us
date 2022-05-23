<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <subcategories-lists />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import SubcategoriesLists from "@/components/Admin/Categories/SubcategoriesLists"

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    SubcategoriesLists,
  },
}
</script>

<style scoped>
</style>