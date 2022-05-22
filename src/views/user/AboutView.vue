<template>
<div>
  <nav-bar></nav-bar>
 <div class="container">
    
    <about-us></about-us>
    <contact-us/>
    <our-service></our-service>
    <div class="row">
      <div class="col-12">
        <h2 class="text-center m-5 font-weight-bold">What our users say</h2>
      </div>
      <div class="col-lg-3 col-sm-6 col-12" v-for="j in [1,2,3,4]" :key="j">
        <user-say-card></user-say-card>
      </div>
    </div>
    
  </div>
  <common-footer></common-footer>
</div>
 
</template>

<script>
import NavBar from '@/components/Common/NavBar.vue'
import AboutUs from '@/components/User/AboutUs.vue'
import ContactUs from '@/components/User/ContactUs.vue'
import OurService from '@/components/User/OurService.vue'
import UserSayCard from '@/components/User/UserSayCard.vue'
import CommonFooter from '@/components/Common/CommonFooter.vue'


export default {
  components: {
    NavBar,
    AboutUs,
    OurService,
    UserSayCard,
    CommonFooter,
    ContactUs 
    },
}
</script>

<style>

</style>