<template>
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
        <a class="nav-link dropdown-toggle text-dark mr-2" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <!--<router-link :to="{name:'Category'}" class="dropdown-item" href="#">Profile</router-link>
          <router-link :to="{name:'Category'}" class="dropdown-item" href="#">Logout</router-link>-->
          
        </div>
      </li>
              
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.dropdown-menu{
  min-width: 6rem !important;
}
</style>