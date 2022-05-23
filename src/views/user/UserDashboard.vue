<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <user-sidebar />
      <div id="content" class="p-4 p-md-5">
        <user-navi />
        <main role="main" class="col-md-12 ml-sm-auto mb-5">
          <h3 class="my-3 pb-2 d-flex justify-content-center">User Profile</h3>
          <common-profile />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import UserSidebar from "@/components/Common/UserSidebar.vue";
import UserNavi from "@/components/Common/UserNavi.vue";
import CommonProfile from "@/components/Common/CommonProfile.vue";

export default {
  components: {
    UserSidebar,
    UserNavi,
    CommonProfile,
  },
};
</script>

<style scoped>
</style>