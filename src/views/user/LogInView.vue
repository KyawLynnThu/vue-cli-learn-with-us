<template>
  <div>
   <nav-bar/>
   <log-in/>
   <common-foot/>
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

<style>

</style>