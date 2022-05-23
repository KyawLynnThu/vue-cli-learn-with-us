<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <user-sidebar />
      <div id="content" class="p-4 p-md-5">
        <user-navi />
        <user-courses/>
      </div>
    </div>
  </div>
</template>

<script>
import UserSidebar from '@/components/Common/UserSidebar.vue';
import UserNavi from '@/components/Common/UserNavi.vue';
import UserCourses from '@/components/User/UserDashboard/UserCourses.vue';

export default {
  components: {
    UserSidebar,
    UserNavi,
    UserCourses
  },
};
</script>

<style scoped>
</style>