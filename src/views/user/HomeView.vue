<template>
  <div>
    <nav-bar />
    <video-banner />
    <h3>Top Courses</h3>
    <product-slider></product-slider>
    <home-section />
    <home-section />
    <common-footer />
  </div>
</template>

<script>
import NavBar from "@/components/Common/NavBar"
import CommonFooter from "@/components/Common/CommonFooter"
import VideoBanner from "@/components/User/VideoBanner"
import ProductSlider from "@/components/User/ProductSlider"
import HomeSection from "@/components/User/HomeSection"

export default {
  components: {
    NavBar,
    CommonFooter,
    VideoBanner,
    ProductSlider,
    HomeSection,
  },
}
</script>

<style scoped>
h3 {
  text-align: left;
  text-decoration: underline;
  width: 95%;
  margin: 0 auto;
  margin-top: 40px;
}
</style>