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
                  v-model="course.name"
                  class="form-control"
                  id="courseName"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Your Image"
              rules="required|mimes:['image/jpeg','image/jpg','image/png']|size:2000"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="cover">Course Cover</label>
                <input
                  type="file"
                  @change="uploadCover"
                  class="form-control-file"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                  <span class="text-danger">{{ errors[0] }}</span>
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
                  v-model="course.category_id"
                  id="chooseSubcategory"
                  :class="{ 'is-invalid': submitted }"
                >
                  <option v-for="category in getCategories" :key="category.id">
                    {{ category.name }}
                  </option>
                </select>
                <div v-if="submitted" class="invalid-feedback">
                  <span class="text-danger">{{ errors[0] }}</span>
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
                  v-model="course.short_descrip"
                  :class="{ 'is-invalid': submitted }"
                ></textarea>
                <div v-if="submitted" class="invalid-feedback">
                  <span class="text-danger">{{ errors[0] }}</span>
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
                  v-model="course.description"
                  :class="{ 'is-invalid': submitted }"
                ></textarea>
                <div v-if="submitted" class="invalid-feedback">
                  <span class="text-danger">{{ errors[0] }}</span>
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
                  v-model="course.instructor"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                  <span class="text-danger">{{ errors[0] }}</span>
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
                  v-model="course.price"
                  class="form-control"
                  id="price"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Your Video"
              rules="required|ext:mp4|video_size:200000"
              v-slot="{ errors }"
            >
              <div class="form-group mx-5">
                <label for="video">Video</label>
                <input
                  type="file"
                  @change="uploadVideo"
                  class="form-control-file"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>
            <div class="form-group mx-5">
              <button class="btn btn-primary" type="submit">Create</button>
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
  max,
  mimes,
  numeric,
  size,
  ext,
} from "vee-validate/dist/rules";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import store from "@/store";

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
  message: "Your image must be JPG or JPEG or PNG format",
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

export default {
  name: "CreateCourse",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      //name: "",
      //category: "",
      //shortDesc: "",
      //description: "",
      //instructor: "",
      //price: "",
      //imageFile: "",
      submitted: false,
      course: {
        name: "",
        course_cover_path: "",
        category_id: "",
        short_descrip: "",
        description: "",
        instructor: "",
        price: "",
        video_path: [],
      },
    };
  },
  mounted() {
    this.getCat();
  },
  computed: mapGetters(["getCategories"]),
  methods: {
    ...mapActions(["getCat"]),

    uploadFile(event) {
        console.log(event);
      },
      
    onSubmit() {
      this.submitted = true;
      
      this.$refs.form.validate().then((success) => {
        if (success) {
          axios
            .post("http://127.0.0.1:8000/api/course/create/", {
              name: this.course.name,
            })
            .then((response) => {
              console.log(response.data);
              let course = response.data;
              store.commit("storeCourse", course);
              this.$router.push({ name: "Courses" });
            })
            .catch((error) => {
              console.log(error.response);
            });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>