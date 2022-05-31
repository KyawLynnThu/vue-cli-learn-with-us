<template>
  <div class = "row">
    <div class = "col-lg-4 col-md-6 mx-auto mt-5 pt-5 col-12">
      <h2 class = "text-center m-3">LOG IN</h2>
      <form class = "bg-light p-4" @submit.prevent="login">
        <div class = "form-group">
          <label for = "email">Email</label>
          <input
            v-model = "loginData.email"
            type = "email"
            class = "form-control"
            required
          />
        </div>
        <div class = "form-group">
          <label for = "">Password</label>
          <input
            v-model = "loginData.password"
            type = "password"
            class = "form-control"
            required
          />
        </div>
        <div class = "mb-3 mt-3">
          <button
            type = "submit"
            class = "
              login-btn
              btn btn-dark btn-block
              text-uppercase
              font-weight-bold
            "
          >
            log in
          </button>
        </div>
        <div class = "mb-3">
          <router-link
            :to = "{ name: 'SignUp' }"
            class = "
              btn btn-outline-dark btn-block
              text-uppercase
              mb-3
              font-weight-bold
            "
          >
            Register
          </router-link>
        </div>
        <div class = "text-center mt-1">
          <a class = "text-decoration-none text-dark">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios.post("user/login", this.loginData)
        .then(res => {
          let token = res.data.data.token;
          let id=res.data.data.id;
          console.log(res);          
          localStorage.setItem("token", token);
          localStorage.setItem("id",id);
          this.$router.push('/')
        });
    },
  },
};
</script>

<style scoped>
.form-control:focus {
  border-color: #030303 !important;
  box-shadow: none !important;
}

/*.login-btn{
  margin-top: 16px;
}*/
</style>
