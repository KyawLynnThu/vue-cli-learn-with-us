<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Upload User Table
        </h3>
        <ValidationObserver v-slot="{}">
          <form>
            <ValidationProvider
              name="Your Image"
              rules="required|ext:csv,pdf,xlxs"
              v-slot="{ errors, validate }"
            >
              <div class="form-group row align-self-center">
                <div class="col-md-12 col-sm-12 align-self-center">
                  <input
                    type="file"
                    @change="validate"
                    class="form-control-file"
                  />
                </div>
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <div class="text-center">
              <router-link :to="{ name: 'userLists' }" class="btn btn-primary"
                >Upload</router-link
              >
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, ext } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: (field) => field + ` is required`,
});
extend("ext", {
  ...ext,
  message: (field) => field + "  must be mp4 format",
});
export default {
  name: "UploadUserFile",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
};
</script>

<style scoped>
</style>