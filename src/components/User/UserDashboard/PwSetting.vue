<template>
<main role="main" class="col-md-12 ml-sm-auto pt-5 mb-5">
  <h3 class="my-3 pb-2 d-flex justify-content-center">Password Setting</h3>
  <div class="card bg-light col-lg-7 mx-auto">
    <div class="card-body">
      <ValidationObserver v-slot="{ }" ref="form">
        <form @submit.prevent="onSubmit">
          <ValidationProvider name="oldPassword" rules="required|min:8|regex:(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$" ref="password" v-slot="{ errors }">
            <div class="form-group mx-5">
              <label for="courseName">Enter Old Password</label>
              <input type="password" v-model="userChangePwData.old_password" class="form-control" id="oldpassword" :class="{ 'is-invalid': submitted }" />
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
              <div class="form-group mx-5">
                <label for="">Enter New Password</label>
                <input
                  type="password"

                  name="password"
                  v-model="userChangePwData.new_password"

                  class="form-control"
                  id="newpassword"
                
                  :class="{ 'is-invalid': submitted }"
                />
               <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
          </ValidationProvider>

          <ValidationProvider name="Re-Type Password" rules="required|confirmed:password" v-slot="{ errors }">
            <div class="form-group mx-5">
              <label for="confirmPassword">Re-type New Password</label>
              <input type="password" v-model="userChangePwData.confirm_password" class="form-control" id="retypepassword" :class="{ 'is-invalid': submitted }" />
              <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>

          <div class="text-center mt-4">
            <button type="submit" class="
              btn btn-primary 
              col-md-4
              mr-2
              mb-2">
              Change
            </button>
            <router-link :to="{ name: 'SignUp' }" class="
              btn btn-danger col-md-4 mb-2
              ">
              Cancel
            </router-link>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</main>
</template>

<script>
import axios from 'axios';
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
  message: `Your password should contain at-least 1 Uppercase,1 Lowercase,1 Numeric,1 Special Character`
});
extend("confirmed", {
  ...confirmed,
  message: "Password does't match",
})

export default {
  name: "PwSetting",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {

      userChangePwData: {
        old_password: '',
        new_password: '',
        confirm_password: '',
        id: localStorage.getItem("id")
      },
      submitted: false
    };
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      this.$refs.form.validate().then(success => {
        if (success) {
          axios.post('user/change/password', this.userChangePwData)
            .then(res => {
              console.log(res.data)
              this.$router.push({ path: '/' })
            })
        }
      });
    }
  },
};
</script>

<style scoped>
</style>


