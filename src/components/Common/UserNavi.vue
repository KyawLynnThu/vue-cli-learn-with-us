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

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02 ">
      <div class="nav-item dropdown my-2 my-lg-0 mx-3 ml-auto">
        <a
          class="nav-link dropdown-toggle text-dark"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style="padding: 0"
        >
          {{ name }} &nbsp;&nbsp;
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link :to="{ name: 'Home' }" class="dropdown-item"
            >Home</router-link
          >
          <a @click="logOut" class="dropdown-item" href="#">Log Out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cat: {
        name: "",
      },
      name: localStorage.getItem("name"),
    }
  },
  created() {
    axios.get("categories").then((res) => {
      this.cat = res.data;
    })
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push("/");
      let hide = false;
      localStorage.setItem("hide", hide);
    }
  }
}
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
