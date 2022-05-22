<template>
  <div class="">
   <nav-bar/>
   <div class="container-fluid login">
   <log-in/>
   </div>
   <common-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar.vue'
import LogIn from '@/components/User/LogIn.vue'
import CommonFooter from '@/components/Common/CommonFooter.vue'

export default {
  components: {
    NavBar,
    LogIn,
    CommonFooter,   
  }

}
</script>

<style scoped>
.login{
  height: 77vh;
}
</style>