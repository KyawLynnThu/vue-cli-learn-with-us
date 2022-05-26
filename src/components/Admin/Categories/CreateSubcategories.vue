<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Create Subcategory
        </h3>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              name="SubCategory name"
              rules="required|alpha"
              v-slot="{ errors }"
            >
              <div class="form-group row">
                <label for="subcatName" class="col-md-4 col-sm-5 col-form-label"
                  >Enter Subcategory Name</label
                >
                <div class="col-md-8 col-sm-7">
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="subcatName"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
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
import { required, alpha } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: (field) => field + ` can't blank`,
});
extend("alpha", {
  ...alpha,
  message: (field) => field + ` may only contain alphabetic characters`,
});
export default {
  name: "CreateSub",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
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