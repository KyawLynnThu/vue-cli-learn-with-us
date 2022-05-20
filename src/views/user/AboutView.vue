<template>
  <div class="container">
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
    <OurService></OurService>
    <UserSay></UserSay>
  </div>
</template>

<script>
import UserSay from '../../components/about/UserSay/UserSay'
import OurService from '../../components/about/OurService'
import ContactUs from '../../components/about/ContactUs'
import AboutUs from '../../components/about/AboutUs'

export default {
  components: {
    UserSay,
    OurService,
    ContactUs,
    AboutUs, },

}
</script>

<style>

</style>