<template>
  <div class="row confirm">
    <div class="col-lg-4 col-md-6 col-12 mx-auto">
      <h2 class="text-center m-3 text-uppercase">Sign Up</h2>
      <ValidationObserver v-slot="{ }" ref="form">
        <form @submit.prevent="onSubmit" class="bg-light p-4">
          <ValidationProvider
            name="User name"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" v-model="registerData.name" name='name' id="name" class="form-control" :class="{ 'is-invalid': submitted }" :state="errors[0] ? false : null"/>
                 <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="email">Email</label>
              <input  v-model="registerData.email" class="form-control" :state="errors[0] ? false : null" :class="{ 'is-invalid': submitted }" />
             <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
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
              <input type="password" :state="errors[0] ? false : null" v-model="registerData.password" class="form-control" :class="{ 'is-invalid': submitted && errors }"/>
              <div v-if="submitted " class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
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
                v-model="registerData.password_confirm"
                class="form-control"
                :class="{ 'is-invalid': submitted }"
                :state="errors[0] ? false : null"
              />
              <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
            </div>
          </ValidationProvider>
   

          <div class="mt-3 mb-3">
             <button  type="submit" class="btn btn-dark btn-block text-uppercase font-weight-bold">Register</button>
          </div>
          <div>
            <router-link
              :to="{ name: 'LogIn' }"
              class="
                btn btn-outline-dark btn-block
                text-uppercase
                font-weight-bold
              "
            >
              log in
            </router-link>
          </div>
         
         
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider, ValidationObserver, extend} from "vee-validate";
import {
  required,
  email,
  min,
  confirmed,
  regex,
} from "vee-validate/dist/rules";
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
  message: `Your password should contain at-least 1 Uppercase,1 Lowercase,1 Numeric,1 Special Character`,
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
      registerData: {
        name: "",
        email: "",
        password: "",
        password_confirm: "",
      },
      submitted: false,
      
    };
  },

  methods: {
    onSubmit() {
      this.submitted = true;
      this.$refs.form.validate().then(success=>{
      if(success){
        axios.post('user/register', this.registerData)
        .then(res => {
          console.log(res.data);
          this.$router.push({ path: '/login' })
        })
        .catch((error) => {
          console.log(error);
        });
      }
    })
    }
  }

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
