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
import NavBar from "@/components/Common/NavBar"
import SignUp from "@/components/User/SignUp"
import CommonFooter from "@/components/Common/CommonFooter"

export default {
  components: {
    NavBar,
    SignUp,
    CommonFooter
  }
}
</script>

<style scoped>
.signup {
  height: 90vh !important;
}
</style>