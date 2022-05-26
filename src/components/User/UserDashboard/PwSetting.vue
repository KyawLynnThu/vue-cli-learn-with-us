<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 mb-5">
    <h3 class="my-3 pb-2 d-flex justify-content-center">Password Setting</h3>
    <div class="card bg-light col-lg-7 mx-auto">
      <div class="card-body">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              name="Password"
              rules="required|min:8|regex"
              ref="password"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="courseName">Enter Old Password</label>
                <input
                  type="password"
                  v-model="oldPassword"
                  class="form-control"
                  id="courseName"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Password"
              rules="required|min:8"
              vid="password"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="courseName">Enter New Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="courseName"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Re-Type Password"
              rules="required|confirmed:password"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="confirmPassword">Re-type New Password</label>
                <input
                  type="password"
                  v-model="confirmPassword"
                  class="form-control"
                  id="courseName"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <div class="text-center mt-4">
              <button type="submit" class="btn btn-primary col-md-4 mr-2 mb-2">
                Change
              </button>
              <button class="btn btn-danger col-md-4 mb-2">Cancel</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, min, confirmed, regex } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: (field) => field + ` can't blank`,
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
  name: "PwSetting",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    };
  },

  methods: {
    onSubmit() {
      alert("success");
    },
  },
};
</script>

<style scoped>
</style>