<template>
  <div id="app">
    <router-link :to="{name:'Home'}">Home</router-link>|
    <router-link :to="{name:'About'}">About</router-link>|
    <router-link :to="{name:'Search'}">Search</router-link>|
    <router-link :to="{name:'Category'}">Category</router-link>|
    <router-link :to="{name:'Detail'}">Detail</router-link>
    <router-view></router-view>
    <nav-bar></nav-bar>
    <video-banner></video-banner>
    <div class="inner">
      <h4>TOP COURSES</h4>
      <product-slider></product-slider>
      <h4>FREE COURSES</h4>
      <product-slider></product-slider>
      <home-section></home-section>
      <home-section></home-section>
    </div>
    <common-footer></common-footer>

  </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import VideoBanner from "./components/VideoBanner.vue";
import ProductSlider from "./components/ProductSlider.vue";
import CommonFooter from "./components/CommonFooter.vue";
import HomeSection from "./components/HomeSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    VideoBanner,
    ProductSlider,
    CommonFooter,
    HomeSection,
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.inner {
  width: 90%;
  margin: 0 auto;
}
h4 {
  text-align: left;
  margin-top: 40px;
  text-decoration: underline;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
