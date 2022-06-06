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
import UserSidebar from '@/components/Common/UserSidebar'
import UserNavi from '@/components/Common/UserNavi'
import UserCourses from '@/components/User/UserDashboard/UserCourses'

export default {
  components: {
    UserSidebar,
    UserNavi,
    UserCourses
  }
}
</script>

<style scoped>
</style>