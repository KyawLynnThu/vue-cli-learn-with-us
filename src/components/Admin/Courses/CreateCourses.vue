<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Create Course
        </h3>

        <form @submit.prevent="onSubmit">
          <div class="form-group mx-5">
            <label for="courseName">Course Name</label>
            <input
              type="text"
              v-model="course.name"
              class="form-control"
              id="courseName"
            />
            <p v-if="errors.name" class="text-danger">{{ errors.name[0] }}</p>
          </div>

          <div class="form-group mx-5">
            <label for="cover">Course Cover</label>
            <input
              type="file"
              name="cover"
              @change="uploadCover"
              class="form-control-file"
            />
            <p v-if="errors.course_cover_path" class="text-danger">
              {{ errors.course_cover_path[0] }}
            </p>
          </div>

          <div class="form-group mx-5">
            <label for="chooseSubcategory">Choose Subcategory</label>
            <select
              class="form-control"
              v-model="course.category_id"
              id="chooseSubcategory"
            >
              <option value="" selected disabled>--- Select one ---</option>
              <option
                v-for="category in getCategories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
            <p v-if="errors.category_id" class="text-danger">
              {{ errors.category_id[0] }}
            </p>
          </div>

          <div class="form-group mx-5">
            <label for="shortDescription">Short Description</label>
            <textarea
              class="form-control"
              id="shortDescription"
              rows="2"
              v-model="course.short_descrip"
            ></textarea>
            <p v-if="errors.short_descrip" class="text-danger">
              {{ errors.short_descrip[0] }}
            </p>
          </div>

          <div class="form-group mx-5">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              v-model="course.description"
            ></textarea>
            <p v-if="errors.description" class="text-danger">
              {{ errors.description[0] }}
            </p>
          </div>

          <div class="form-group mx-5">
            <label for="instructorName">Instructor Name</label>
            <input
              type="text"
              class="form-control"
              id="instructorName"
              v-model="course.instructor"
            />
            <p v-if="errors.instructor" class="text-danger">
              {{ errors.instructor[0] }}
            </p>
          </div>
          <div class="form-group mx-5">
            <label for="price">Price</label>
            <input
              type="text"
              v-model="course.price"
              class="form-control"
              id="price"
            />
            <p v-if="errors.price" class="text-danger">{{ errors.price[0] }}</p>
          </div>

          <div class="form-group mx-5">
            <label for="video">Video</label>
            <input
              type="file"
              @change="uploadVideo"
              class="form-control-file"
              multiple="multiple"
            />
            <p
              v-for="videoErr in videoErrs"
              class="text-danger"
              :key="videoErr"
            >
              <span>{{ errors[videoErr][0] }}</span>
            </p>
          </div>
          
          <div class="form-group mx-5">
            <button class="btn btn-primary" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import store from "@/store";

export default {
  name: "CreateCourse",
  data() {
    return {
      submitted: false,
      video: [],
      video_path: [],
      cover: [],
      course: {
        name: "",
        category_id: "",
        short_descrip: "",
        description: "",
        instructor: "",
        price: "",
        course_cover_path: "",
        video_path: [],
      },
      errors: {
        name: "",
        category_id: "",
        short_descrip: "",
        description: "",
        instructor: "",
        price: "",
        course_cover_path: "",
        video_path: "",
      },
      videoErrs: [],
    }
  },
  mounted() {
    this.getCat();
  },
  computed: mapGetters(["getCategories"]),
  methods: {
    ...mapActions(["getCat"]),

    uploadCover(event) {
      this.cover = event.target.files[0];
    },

    uploadVideo(event) {
      this.video = event.target.files;
    },

    onSubmit() {
      var data = new FormData();

      data.append("name", this.course.name);
      data.append("category_id", this.course.category_id);
      data.append("short_descrip", this.course.short_descrip);
      data.append("description", this.course.description);
      data.append("instructor", this.course.instructor);
      data.append("price", this.course.price);
      data.append("course_cover_path", this.cover);

      for (var i = 0; i < this.video.length; i++) {
        data.append("video_path[]", this.video[i]);
      }
      axios
        .post("http://127.0.0.1:8000/api/course/create/", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then((response) => {
          let course = response.data;
          store.commit("storeCourse", course);
          this.$router.push({ name: "Courses" })
        })
        .catch((error) => {
          this.errors = error.response.data.data;
          let videoPathErr = Object.keys(this.errors);
          let foundVideoPathErr = videoPathErr.filter((e) =>
            e.startsWith("video_path")
          );
          this.videoErrs = foundVideoPathErr;
        })
      this.submitted = true;
    }
  }
}
</script>

<style scoped>
</style>