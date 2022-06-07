<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <user-sidebar />
      <div id="content" class="p-4 p-md-5">
        <user-navi />
        <pw-setting/>
      </div>
    </div>
  </div>
</template>

<script>
import UserSidebar from '@/components/Common/UserSidebar'
import UserNavi from '@/components/Common/UserNavi'
import PwSetting from '@/components/User/UserDashboard/PwSetting'

export default {
  components: {
    UserSidebar,
    UserNavi,
    PwSetting
  }
}
</script>

<style scoped>
</style>