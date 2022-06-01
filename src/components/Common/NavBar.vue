<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h2>
      <router-link
        class="navbar-brands ml-3 text-dark font-weight-bold"
        :to="{ name: 'Home' }"
        style="text-decoration: none"
        >LearnWithUs</router-link
      >
    </h2>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active mx-3">
          <router-link class="nav-link" :to="{ name: 'About' }"
            >About</router-link
          >
        </li>
        <li class="nav-item dropdown mx-3">
          <a
            class="nav-link dropdown-toggle text-dark"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories &nbsp;
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link
              v-for="category in getCategories"
              :key="category.id"
              :to="{ name: 'Category' }"
              class="dropdown-item"
              >{{ category.name }}</router-link
            >
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 mx-3 my-lg-0" @submit.prevent="getSearchResults(search)">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          v-model="search"
        />
        <button
        :disabled="search.length===0"
          class="btn btn-dark my-2 my-sm-0"
          type="submit"
          ><i class="fas fa-search"></i
        ></button>
      </form>
      <router-link
        :to="{ name: 'LogIn' }"
        class="btn btn-outline-dark my-2 my-sm-0 mx-3"
        >LOG IN</router-link
      >
      <router-link
        :to="{ name: 'SignUp' }"
        class="btn btn-secondary my-2 my-sm-0 mr-3"
        >SIGN UP</router-link
      >
      <!--<div class="nav-item dropdown my-2 my-lg-0 mx-3">
        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0">
          User One
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">Log Out</a>
        </div>
      </div>-->
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return{
      search:'',
    }
  },
   computed: mapGetters(["getCategories","searchCourses"]),
  methods: {
    ...mapActions(["getCat"]),
     getSearchResults(search){
    this.$store.dispatch("getSearchResults",search);
    this.$router.push({ name: 'Search' }).catch(()=>{})
  }
  },
  mounted() {
    this.getCat();
  },
};

</script>

<style scoped>
.form-control:focus {
  border-color: #030303 !important;
  box-shadow: none !important;
}
.navbar {
  margin-bottom: 0;
}
.dropdown-menu {
  min-width: 6rem !important;
}
</style>