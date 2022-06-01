<template>
  <main role="main" class="col-md-12 ml-sm-auto mb-5">
    <h3 class="my-3 pb-2 d-flex justify-content-center">Admin Profile</h3>
    <common-profile />
    <div class="d-flex justify-content-center mt-3">
      <router-link
        :to="{ name: 'adminPasswordSetting' }"
        class="btn btn-primary"
      >
        <i class="fas fa-cog"></i> &nbsp; Password Setting
      </router-link>
    </div>
  </main>
</template>

<script>
import CommonProfile from "@/components/Common/CommonProfile.vue";

export default {
  components: {
    CommonProfile,
  },
  name: "AdminProfile",
};
</script>

<style scoped>
</style>