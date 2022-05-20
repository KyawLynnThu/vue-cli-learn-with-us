<template>
  <div id="app">
    <AdminHeader/>
    <AdminMain/>
    <FooterNavi/>
  </div>
</template>

<script>
import AdminHeader from './components/Admin/Common/AdminHeader.vue'
import AdminMain from './components/Admin/Common/AdminMain.vue'
import FooterNavi from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AdminHeader,
    AdminMain,
    FooterNavi
  }
}
</script>

