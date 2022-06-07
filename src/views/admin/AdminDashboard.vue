<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <chart-graph />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import ChartGraph from "@/components/Admin/ChartGraph"

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    ChartGraph,
  }
}
</script>

<style scoped>
</style>