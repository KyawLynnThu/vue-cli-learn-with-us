<template>
  <div>
    <AdminHeader></AdminHeader>
   <div class="container-fluid border-top border-dark admin-height">
    <div class="row">
      <nav class=" col-md-3 d-none d-md-block bg-light sideBar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item important">
              <a href="#" class="nav-link text-white my-2 bg-secondary"
                >Dashboard</a
              >
              <router-link :to="{name:'subCategory'}" class="nav-link text-white my-2 bg-secondary"
                >Subcategories</router-link
              >
              <a href="#" class="nav-link text-white my-2 bg-secondary"
                >Courses</a
              >
              <a href="#" class="nav-link text-white my-2 bg-secondary"
                >User Link</a
              >
            </li>
          </ul>
        </div>
      </nav>
       <UserLists></UserLists>
    </div>
  </div>
    
   
  </div>
</template>

<script>

import UserLists from '../../components/Admin/UserLists'

import AdminHeader from '../../components/Admin/Common/AdminHeader'
export default {
  components: {
    
    UserLists,
   AdminHeader },

}
</script>

<style>

</style>