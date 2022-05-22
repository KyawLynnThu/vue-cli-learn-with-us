<template>
  
    <nav id="sidebar" class="active">
      <ul class="list-unstyled components mb-5">
        <li class="active">
          <router-link :to="{name:'AdminDashboard'}"><a href=""><span class="fa fa-home"></span> Dashboard</a></router-link>
        </li>
        <li>
          <router-link :to="{name:'subCategory'}"><span class="fa fa-user"></span> Category</router-link>
        </li>
        <li>
          <router-link :to="{name:'Courses'}"><span class="fa fa-sticky-note"></span> Courses</router-link>
        </li>
        <li>
          <router-link :to="{name:'userLists'}"><span class="fa fa-user"></span> Users</router-link>
        </li>
        <!--<li>
          <a href="#"><span class="fa fa-paper-plane"></span> Contacts</a>
        </li>-->
      </ul>
    </nav>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>