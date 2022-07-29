<template>
  <div id="app">
    
    <router-view />
  </div>
</template>

<script>

export default {

  name: "App",
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
@import "@/assets/css/style.css";
</style>