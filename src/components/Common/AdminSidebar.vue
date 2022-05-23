<template>
  <nav id="sidebar" class="active">
    <ul class="list-unstyled components mb-5">
      <li class="active">
        <router-link :to="{ name: 'AdminDashboard' }"
          ><span class="fa fa-home"></span> Dashboard</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'subCategory' }"
          ><span><i class="fas fa-file"></i></span> Category</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Courses' }"
          ><span><i class="fas fa-book"></i></span> Courses</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'userLists' }"
          ><span class="fa fa-user"></span> Users</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>