<template>
  <div class="row confirm">
    <div class="col-lg-4 col-md-6 col-12 mx-auto">
      <h2 class="text-center m-3 text-uppercase">Sign Up</h2>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)" class="bg-light p-4">
          <ValidationProvider
            name="User name"
            rules="required|alpha"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" v-model="name" class="form-control" />
              <span class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" v-model="email" class="form-control" />
              <span class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="Password"
            rules="required|min:8|regex"
            vid="password"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" v-model="password" class="form-control" />
              <span class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="ConfirmPassword"
            rules="required|confirmed:password"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                v-model="confirmPassword"
                class="form-control"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <div class="mb-3 mt-3">
            <router-link
              :to="{ name: 'confirmSignup' }"
              type="submit"
              class="btn btn-dark btn-block text-uppercase font-weight-bold"
            >
              Register
            </router-link>
          </div>
          <div>
            <router-link
              :to="{ name: 'LogIn' }"
              type="submit"
              class="
                btn btn-outline-dark btn-block
                text-uppercase
                font-weight-bold
              "
            >
              log in
            </router-link>
          </div>
          <!--<button type="submit" class="btn btn-dark btn-block text-uppercase font-weight-bold">Register</button>
          <button type="submit" class="btn btn-outline-dark btn-block text-uppercase font-weight-bold">log in</button>-->
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {
  required,
  email,
  min,
  confirmed,
  regex,
  alpha,
} from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: (field) => field + ` can't blank`,
}),
  extend("alpha", {
    ...alpha,
    message: (field) => field + ` may only contain alphabetic characters`,
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
  message: `Your password should contain at-least 1 Uppercase,1 Lowercase,1 Numeric,1 Special Character`,
  validate: (value) => {
    var strongRegex = new RegExp(
      "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$"
    );
    return strongRegex.test(value);
  },
});

extend("confirmed", {
  ...confirmed,
  message: "Password does't match",
});

export default {
  name: "SignUp",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      acceptTerms: "",
    };
  },

  // methods: {
  //  validateBeforeSubmit() {
  //    this.$validator.localize('en', dict)
  //
  //}
  methods: {
    onSubmit() {
      alert("success");
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