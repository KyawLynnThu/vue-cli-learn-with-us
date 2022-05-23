<template>
  <div>
    <nav-bar />
    <div class="container-fluid signup">
      <sign-up />
    </div>
    <common-footer />
  </div>
</template>

<script>
import NavBar from "@/components/Common/NavBar.vue";
import SignUp from "@/components/User/SignUp.vue";
import CommonFooter from "@/components/Common/CommonFooter.vue";

export default {
  components: {
    NavBar,
    SignUp,
    CommonFooter,
  },
};
</script>

<style scoped>
.signup {
  height: 90vh !important;
}
</style>