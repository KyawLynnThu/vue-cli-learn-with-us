<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Create Course
        </h3>
        <ValidationObserver v-slot="{}" ref="form">
          <form @submit.prevent="onSubmit">
            <ValidationProvider
              name="Name"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="courseName">Course Name</label>
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  id="courseName"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Your Image"
              rules="required|image|mimes:['image/jpeg','image/jpg']|size:2000"
              v-slot="{ errors, validate }"
            >
              <div class="form-group mx-5">
                <label for="cover">Course Cover</label>
                <input
                  type="file"
                  @change="validate"
                  class="form-control-file"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Category"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="chooseSubcategory">Choose Subcategory</label>
                <select
                  class="form-control"
                  v-model="category"
                  id="chooseSubcategory"
                  :class="{ 'is-invalid': submitted }"
                >
                  <option>php</option>
                  <option>js</option>
                  <option>html</option>
                </select>
               <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Short_Description"
              rules="required|short_desc__max:100"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="shortDescription">Short Description</label>
                <textarea
                  class="form-control"
                  id="shortDescription"
                  rows="2"
                  v-model="shortDesc"
                  :class="{ 'is-invalid': submitted }"
                ></textarea>
               <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Description"
              rules="required|desc_max:200"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="description">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                  v-model="description"
                  :class="{ 'is-invalid': submitted }"
                ></textarea>
                <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Instructor"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="instructorName">Instructor Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="instructorName"
                  v-model="instructor"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Price"
              rules="required|numeric"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="price">Price</label>
                <input
                  type="text"
                  v-model="price"
                  class="form-control"
                  id="price"
                  :class="{ 'is-invalid': submitted }"
                />
               <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Your Video"
              rules="required|ext:mp4|video_size:200000"
              v-slot="{ errors, validate }"
            >
              <div class="form-group mx-5">
                <label for="video">Video</label>
                <input
                  type="file"
                  @change="validate"
                  class="form-control-file"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
              </div>
            </ValidationProvider>
            <div class="form-group mx-5">
              <button
                class="btn btn-primary"
                >Create</button>
              
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {
  required,
  confirmed,
  regex,
  alpha,
  max,
  mimes,
  numeric,
  size,
  ext,
  image,
} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: (field) => field + ` is required`,
}),

extend("short_desc__max", {
  ...max,
  message: "Instructor must not be more than 100 characters.",
});
extend("desc_max", {
  ...max,
  message: "Instructor must not be more than 200 characters.",
});

extend("numeric", {
  ...numeric,
  message: (field) => field + " must be numberic.",
});
extend("regex", {
  ...regex,
  message: `Your password should contain at-least 1 Uppercase,1 Lowercase,1 Numeric,1 Special Character								`,
});
extend("confirmed", {
  ...confirmed,
  message: "Password does't match",
});
extend("mimes", {
  ...mimes,
  message: "Your image must be JPG or JPEG format",
});
extend("size", {
  ...size,
  message: (field) => field + " is more than 2Mb",
});
extend("video_size", {
  ...size,
  message: (field) => field + " is more than 20Mb",
});
extend("ext", {
  ...ext,
  message: (field) => field + "  must be mp4 format",
});
extend("image", {
  ...image,
  message: (field) => field + " must be an image",
});

export default {
  name: "CreateCourse",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      category: "",
      shortDesc: "",
      description: "",
      instructor: "",
      price: "",
      imageFile: "",
      submitted:false
    };
  },

  methods: {
     onSubmit() {
      this.submitted = true;
    this.$refs.form.validate().then(success=>{
      if(success){
        this.$router.push({ name: 'confirmCourse' }); 
      }
    });
    }
  }
};
</script>

<style scoped>
</style>