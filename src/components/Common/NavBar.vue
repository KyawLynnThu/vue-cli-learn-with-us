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
              :to="`/category/${cats.id}`"
              v-for="cats in cat"
              :key="cats.id"
              onClick="window.location.reload(true)"
              class="dropdown-item"
              >{{ cats.name }}
            </router-link>
          </div>
        </li>
      </ul>
      <form
        class="form-inline my-2 mx-3 my-lg-0"
        @submit.prevent="getSearchResults(search)"
      >
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          v-model="search"
        />
        <button
          :disabled="search.length === 0"
          class="btn btn-dark my-2 my-sm-0"
          type="submit"
        >
          <i class="fas fa-search"></i>
        </button>
      </form>
      <router-link
        v-if="!logHide"
        :to="{ name: 'LogIn' }"
        class="btn btn-outline-dark my-2 my-sm-0 mx-3"
        >LOG IN</router-link
      >
      <router-link
        v-if="!logHide"
        :to="{ name: 'SignUp' }"
        class="btn btn-secondary my-2 my-sm-0 mr-3"
        >SIGN UP</router-link
      >
      <div class="nav-item dropdown mx-3" v-if="logHide">
        <a
          class="nav-link dropdown-toggle text-dark"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ name }} &nbsp;
        </a>
        <div class="dropdown-menu dd" aria-labelledby="navbarDropdownMenuLink">
          <router-link
            v-if="type == 1"
            :to="{ name: 'userDashboard' }"
            class="dropdown-item"
            >Dashboard</router-link
          >
          <router-link
            v-if="type == 0"
            :to="{ name: 'adminProfile' }"
            class="dropdown-item"
            >Dashboard</router-link
          >
          <button @click="logOut" class="dropdown-item">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios"
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      logHide: false,
      cat: {
        name: "",
      },
      search: "",
      name: localStorage.getItem("name"),
      type: localStorage.getItem("type"),
    }
  },
  computed: mapGetters(["searchCourses"]),
  created() {
    axios.get("categories").then((res) => {
      this.cat = res.data;
      this.logHide = localStorage.getItem("logHide");
    });
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push("/login");
      this.logHide = false;
    },
    getSearchResults(search) {
      this.$store.dispatch("getSearchResults", search);
      this.$router.push({ name: "Search" }).catch(() => {});
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
.dd {
  min-width: 3rem !important;
}
.dropdown-item {
  padding: 0.25rem 0.7rem !important;
}
</style>
