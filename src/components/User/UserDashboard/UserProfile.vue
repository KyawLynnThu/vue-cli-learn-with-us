<template>
  <main role="main" class="col-md-9 ml-sm-auto pt-5 mb-5">
    <h3 class="my-3 pb-2 d-flex justify-content-center">User Profile</h3>
    <CommonProfile />
  </main>
</template>

<script>
import CommonProfile from "@/components/Common/CommonProfile.vue";

export default {
  components: {
    CommonProfile,
  },
  name: "UserProfile",
};
</script>

<style>
img {
  width: 100px;
  height: 100px;
}
</style>