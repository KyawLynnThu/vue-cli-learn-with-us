<template>
  <div class="row">
    <div class="col-lg-4 col-md-6 mx-auto mt-5 pt-5 col-12">
      <h2 class="text-center m-3">LOG IN</h2>
      <ValidationObserver v-slot="{}" ref="form">
        <form @submit.prevent="onSubmit" class="bg-light p-4">
          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="loginData.email"
                class="form-control"
                :class="{ 'is-invalid': submitted }"
              />
              <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="Password"
            rules="required|min:8|regex:(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$"
            vid="password"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                v-model="loginData.password"
                class="form-control"
                :class="{ 'is-invalid': submitted }"
              />
              <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>

          <div class="mb-3 mt-3">
            <button
              type="submit"
              class="
                login-btn
                btn btn-dark btn-block
                text-uppercase
                font-weight-bold
              "
            >
              log in
            </button>
          </div>
          <div class="mb-3">
            <router-link
              :to="{ name: 'SignUp' }"
              class="
                btn btn-outline-dark btn-block
                text-uppercase
                mb-3
                font-weight-bold
              "
            >
              Register
            </router-link>
          </div>
          <div class="text-center mt-1">
            <a class="text-decoration-none text-dark">Forgot Password?</a>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, min, regex } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: (field) => field + ` can't blank`,
}),
  extend("email", {
    ...email,
    message: "Email format is invalid",
  });

extend("min", {
  ...min,
  message: "Password min length is 8 character",
});

extend("regex", {
  ...regex,
  message: `Your password should contain at-least 1 Uppercase,1 Lowercase,1 Numeric,1 Special Character		`,
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      submitted: false,
      ishidden: true,
    };
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      this.$refs.form.validate().then((success) => {
        if (success) {
          axios.post("user/login", this.loginData).then((res) => {
            let token = res.data.data.token;
            let id = res.data.data.id;
            let name = res.data.data.name;
            let type = res.data.data.type;
            console.log(res);
            localStorage.setItem("token", token);
            localStorage.setItem("id", id);
            localStorage.setItem("name", name);
            localStorage.setItem("type", type);
            this.ishidden = true;
            console.log(this.ishidden);
            localStorage.setItem("hide", this.ishidden);
            this.$router.push("/");
          });
        }
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
</style>
