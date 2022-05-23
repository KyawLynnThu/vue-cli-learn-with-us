<template>
  <div>
    <nav-bar />
    <div class="container">
      <about-us />
      <contact-us />
      <our-service />
      <div class="row">
        <div class="col-12">
          <h2 class="text-center m-5 font-weight-bold">What our users say</h2>
        </div>
        <div
          class="col-lg-3 col-sm-6 col-12"
          v-for="j in [1, 2, 3, 4]"
          :key="j"
        >
          <user-say-card />
        </div>
      </div>
    </div>
    <common-footer />
  </div>
</template>

<script>
import NavBar from "@/components/Common/NavBar"
import AboutUs from "@/components/User/AboutUs"
import ContactUs from "@/components/User/ContactUs"
import OurService from "@/components/User/OurService"
import UserSayCard from "@/components/User/UserSayCard"
import CommonFooter from "@/components/Common/CommonFooter"

export default {
  components: {
    NavBar,
    AboutUs,
    OurService,
    UserSayCard,
    CommonFooter,
    ContactUs,
  },
}
</script>

<style>
</style>