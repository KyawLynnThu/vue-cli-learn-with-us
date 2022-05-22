<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 mb-5">
    <h3 class="my-3 pb-2 d-flex justify-content-center">Admin Profile</h3>
    <common-profile/>
  </main>
</template>

<script>
import CommonProfile from '@/components/Common/CommonProfile.vue';

export default {
  components: {
    CommonProfile
  },
  name: "AdminProfile",
};
</script>

<style>
img {
  width: 100px;
  height: 100px;
}
</style>