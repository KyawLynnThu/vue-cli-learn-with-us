<template>
  <div>
   <nav-bar/>
   <video-banner/>
   <product-slider/>
   <home-section/>
   <common-foot/>
  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar.vue'
import CommonFooter from '@/components/Common/CommonFooter.vue'
import VideoBanner from '@/components/User/VideoBanner.vue'
import ProductSlider from '@/components/User/ProductSlider.vue'
import HomeSection from '@/components/User/HomeSection.vue'

export default {
  components: {
    NavBar,
    LogIn,
    CommonFooter,
    VideoBanner,
    ProductSlider,
    HomeSection,   
  }

}
</script>

<style>

</style>