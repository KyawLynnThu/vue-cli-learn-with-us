<template>
  <div id="app">
    <!--<AdminHeader/>
    <AdminMain/>
    <FooterNavi/>-->

    <router-link :to="{name:'Home'}">Home</router-link>|
    <router-link :to="{name:'About'}">About</router-link>|
    <router-link :to="{name:'Search'}">Search</router-link>|
    <router-link :to="{name:'Category'}">Category</router-link>|
    <router-link :to="{name:'Detail'}">Detail</router-link>
    <router-link :to="{name:'LogIn'}">LogIn</router-link>|
    <router-link :to="{name:'SignUp'}">SignUp</router-link>|
    <router-view></router-view>
   


  </div>
</template>

<script>
//
//import AdminHeader from '@/components/Admin/Common/AdminHeader.vue'
//import AdminMain from '@/components/Admin/Common/AdminMain.vue'
//import FooterNavi from '@/components/Common/Footer.vue'

export default {
  name: "App",
  components: {
    //AdminHeader,
    //AdminMain,
    //FooterNavi
  }
}
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

