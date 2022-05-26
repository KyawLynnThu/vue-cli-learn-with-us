<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Create Course
        </h3>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              name="Name"
              rules="required|alpha|max:50"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="courseName">Course Name</label>
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  id="courseName"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider
              name="Your Image"
              rules="required|ext:jpeg,jpg|mimes:['image/jpeg', 'image/jpg']|size:10"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="cover">Course Cover</label>
                <input
                  type="file"
                  accept="image/_jpg,image/_jpeg"
                  class="form-control-file"
                  id="cover"
                />
                <span class="text-danger">{{ errors[0] }}</span>
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
                >
                  <option>php</option>
                  <option>js</option>
                  <option>html</option>
                </select>
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Short_Description"
              rules="required|short_desc_max:100"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="shortDescription">Short Description</label>
                <textarea
                  class="form-control"
                  id="shortDescription"
                  rows="2"
                  v-model="shortDesc"
                ></textarea>
                <span class="text-danger">{{ errors[0] }}</span>
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
                ></textarea>
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Instructor"
              rules="required|instructr_max:50"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="instructorName">Instructor Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="instructorName"
                  v-model="instructor"
                />
                <span class="text-danger">{{ errors[0] }}</span>
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
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider
              name="Your Video"
              rules="required|size:2000"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="video">Video</label>
                <input
                  type="file"
                  accept="video/_mp4"
                  class="form-control-file"
                  id="video"
                  multiple
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="form-group mx-5">
              <button class="btn btn-primary">Update</button>
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
  email,
  min,
  confirmed,
  regex,
  alpha,
  max,
  mimes,
  numeric,
  size,
  ext,
} from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: (field) => field + ` is required`,
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
extend("instructr_max", {
  ...max,
  message: "Instructor must not be more than 50 characters.",
});
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
  message: (field) => field + " is more than",
});
extend("ext", {
  ...ext,
  message: (field) => field + " Your image must be JPG or JPEG format",
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