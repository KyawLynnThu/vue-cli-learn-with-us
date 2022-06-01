<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Update Subcategory
        </h3>
        <ValidationObserver v-slot="{ }" ref="form">
          <form @submit.prevent="updateCat">
            <ValidationProvider
              name="SubCategory name"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group row">
                <label for="subcatName" class="col-md-4 col-sm-5 col-form-label"
                  >Enter Subcategory Name</label
                >
                <div class="col-md-8 col-sm-7">
                  <input type="text" v-model="category.name" class="form-control" id="subcatName" :class="{ 'is-invalid': submitted }"/>
                  <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
                </div>
              </div>
            </ValidationProvider>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import axios from "axios";
import store from "@/store";
extend("required", {
  ...required,
  message: (field) => field + ` can't blank`,
});

export default {
  name: "UpdateSub",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name:'',
      submitted:false,
      category: {
        name: "",
      },
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/api/categories/${this.$route.params.id}`)
      .then((response) => {
        this.category = response.data;
      });
  },
 methods: {
     updateCat() {
      this.submitted = true;
      
    this.$refs.form.validate().then(success=>{
      if(success){
        //updateCat() {
      //console.log("hello", this.category.name);
      axios
        .put(`http://localhost:8000/api/categories/${this.$route.params.id}`, {
          name: this.category.name,
        })
        .then((response) => {
          console.log(response.data);
          let category = response.data;
          store.commit("storeCategory", category);
          this.$router.push({ path: "/subCategory" });
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    });
    }
  }
}
</script>

<style scoped>
</style>