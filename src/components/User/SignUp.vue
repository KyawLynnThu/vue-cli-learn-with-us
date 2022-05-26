<template>
  <div class = "row confirm">
    <div class = "col-lg-4 col-md-6 col-12 mx-auto">
      <h2 class = "text-center m-3 text-uppercase">Sign Up</h2>
      <form class = "bg-light p-4">
        <div class = "form-group">
          <label for = "name">Username</label>
          <input
            v-model = "registerData.name"
            type = "text"
            class = "form-control"
            required
          />
        </div>
        <div class = "form-group">
          <label for= "email">Email</label>
          <input
            v-model = "registerData.email"
            type = "email"
            class = "form-control"
            required
          />
        </div>
        <div class = "form-group">
          <label for = "">Password</label>
          <input
            v-mode l= "registerData.password"
            type = "password"
            class = "form-control"
            required
          />
        </div>
        <div class = "form-group">
          <label for ="">Confirm Password</label>
          <input
            v-model = "registerData.password_comfirm"
            type = "password"
            class = "form-control"
            required
          />
        </div>
        <div class="mb-3 mt-3">
          <router-link
            @click = "register"
            :to = "{ name: 'confirmSignup' }"
            type = "submit"
            class = "btn btn-dark btn-block text-uppercase font-weight-bold"
          >
            Register
          </router-link>
        </div>
        <div>
          <router-link
            :to = "{ name: 'LogIn' }"
            type = "submit"
            class = "
              btn btn-outline-dark btn-block
              text-uppercase
              font-weight-bold
            "
          >
            log in
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      registerData: {
        name: "",
        email: "",
        password: "",
        password_comfirm: "",
      },
    };
  },
  methods: {
    register() {
      axios.post("http://127.0.0.1:8000/api/user/register", this.registerData)
        .then(res => {
          let token = res.data.api_token;
          localStorage.setItem("token", token);
        })
        .catch(error => {
          console.log(error);
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

.confirm {
  margin-top: 35px;
}
</style>
