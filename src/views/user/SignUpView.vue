<template>
  <div>
   <nav-bar/>
   <sign-up/>
   <common-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar.vue'
import SignUp from '@/components/User/SignUp.vue'
import CommonFooter from '@/components/Common/CommonFooter.vue'

export default {
  components: {
    NavBar,
    SignUp,
    CommonFooter
  }

}
</script>

<style>

</style>