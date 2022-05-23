<template>
  <nav id="sidebar" class="sidebar active">
    <ul class="list-unstyled components mb-5">
      <li class="active">
        <router-link :to="{ name: 'userDashboard' }"
          ><span class="fa fa-home"></span> Dashboard</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'passwordSetting' }"
          ><span><i class="fas fa-cog"></i></span> Password <br />
          Setting</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'userCourse' }"
          ><span><i class="fas fa-book"></i></span> Courses</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  background: #333 !important;
}
</style>