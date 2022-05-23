<template>
  <div>
    <nav-bar />
    <div class="container-fluid login">
      <log-in />
    </div>
    <common-footer />
  </div>
</template>

<script>
import NavBar from "@/components/Common/NavBar"
import LogIn from "@/components/User/LogIn"
import CommonFooter from "@/components/Common/CommonFooter"

export default {
  components: {
    NavBar,
    LogIn,
    CommonFooter,
  },
}
</script>

<style scoped>
.login {
  height: 90vh !important;
}
</style>