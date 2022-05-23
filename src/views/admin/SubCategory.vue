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
import AdminSidebar from "@/components/Common/AdminSidebar.vue";
import AdminNavi from "@/components/Common/AdminNavi.vue";
import SubcategoriesLists from "@/components/Admin/Categories/SubcategoriesLists.vue";

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    SubcategoriesLists,
  },
};
</script>

<style scoped>
</style>