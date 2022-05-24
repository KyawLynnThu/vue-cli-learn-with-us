<template>
  <div>
    <nav-bar />
    <div class="container-fluid signup">
        <confirm-signup />
    </div>
    <common-footer />
  </div>
</template>

<script>
import NavBar from "@/components/Common/NavBar"
import CommonFooter from "@/components/Common/CommonFooter"
import ConfirmSignup from '@/components/User/ConfirmSignup.vue'

export default {
  components: {
    NavBar,
    CommonFooter,
    ConfirmSignup
  },
}
</script>

<style scoped>
.signup {
  height: 90vh !important;
}
</style>