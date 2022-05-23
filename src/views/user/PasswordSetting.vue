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
import UserSidebar from '@/components/Common/UserSidebar.vue';
import UserNavi from '@/components/Common/UserNavi.vue';
import PwSetting from '@/components/User/UserDashboard/PwSetting.vue';

export default {
  components: {
    UserSidebar,
    UserNavi,
    PwSetting
  },
};
</script>

<style scoped>
</style>