<template>
 <div>
    <div class="wrapper d-flex align-items-stretch">
    <nav id="sidebar" class="active">
      
      <ul class="list-unstyled components mb-5">
        <li class="active">
          <a href="#"><span class="fa fa-home"></span> Home</a>
        </li>
        <li>
          <a href="#"><span class="fa fa-user"></span> About</a>
        </li>
        <li>
          <a href="#"><span class="fa fa-sticky-note"></span> Blog</a>
        </li>
        <li>
          <a href="#"><span class="fa fa-cogs"></span> Services</a>
        </li>
        <li>
          <a href="#"><span class="fa fa-paper-plane"></span> Contacts</a>
        </li>
      </ul>
      <div class="footer">
        <p>Copyright &copy;</p>
      </div>
    </nav>

    <!-- Page Content  -->
    <div id="content" class="p-4 p-md-5">
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h2><a href="" class="logo">LearnWithUs</a></h2>
          <!--<button type="button" id="sidebarCollapse" class="btn btn-primary">
            <i class="fa fa-bars"></i>
            <span class="sr-only">Toggle Menu</span>
          </button>-->
          <button
            class="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item dropdown mx-3">
        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link :to="{name:'Category'}" class="dropdown-item" href="#">Profile</router-link>
          <router-link :to="{name:'Category'}" class="dropdown-item" href="#">Logout</router-link>
          
        </div>
      </li>
              
            </ul>
          </div>
        </div>
      </nav>
       
       <CoursesList></CoursesList>
    </div>
    
  </div>
  <footer class="text-center text-white" style="background-color: #f1f1f1;">
      <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2022 Copyright:
        <a class="text-dark" href="">LearnWithUs.com</a>
      </div>
    </footer>
 </div>
</template>

<script>

import CoursesList from '../../components/Admin/Courses/CoursesList'
import "@/assets/css/style.css"
import "@/assets/js/main.js"

export default {
  components: {
    
    CoursesList,},
};
</script>

<style>



</style>