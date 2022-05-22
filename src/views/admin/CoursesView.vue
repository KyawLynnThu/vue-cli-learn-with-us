<template>
 <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar/>
      <div id="content" class="p-4 p-md-5">
        <admin-navi/>
          <courses-list/>
      </div>   
    </div>
 </div>
</template>

<script>
import AdminSidebar from '@/components/Common/AdminSidebar.vue'
import "@/assets/css/style.css"
import "@/assets/js/main.js"
import AdminNavi from '@/components/Common/AdminNavi.vue'
import CoursesList from '@/components/Admin/Courses/CoursesList.vue'

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    CoursesList
    },
};
</script>

<style scoped>



</style>