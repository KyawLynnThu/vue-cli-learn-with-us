<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Update Course
        </h3>

        <form @submit.prevent="onSubmit">
          <div class="form-group mx-5">
            <label for="courseName">Course Name</label>
            <input
              type="text"
              v-model="course.name"
              class="form-control"
            />
          </div>

          <div class="form-group mx-5">
            <label for="cover">Course Cover</label>
            <input
              type="file"
              @change="uploadCover"
              class="form-control-file"
            />
            <img :src="course.cover_path" alt="" style="display: block" />
          </div>

          <div class="form-group mx-5">
            <label for="chooseSubcategory">Choose Subcategory</label>
            <select
              class="form-control"
              v-model="course.category_id"
              id="chooseSubcategory"
            >
              <option v-for="category in getCategories" :key="category.id" :value="category.id">{{ course.category.name }}</option>
            </select>
          </div>

          <div class="form-group mx-5">
            <label for="shortDescription">Short Description</label>
            <textarea
              class="form-control"
              id="shortDescription"
              rows="2"
              v-model="course.short_descrip"
            ></textarea>
          </div>

          <div class="form-group mx-5">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              v-model="course.description"
            ></textarea>
          </div>

          <div class="form-group mx-5">
            <label for="instructorName">Instructor Name</label>
            <input
              type="text"
              class="form-control"
              id="instructorName"
              v-model="course.instructor"
            />
          </div>

          <div class="form-group mx-5">
            <label for="price">Price</label>
            <input
              type="text"
              v-model="course.price"
              class="form-control"
              id="price"
            />
          </div>

          <div class="form-group mx-5">
            <label for="video">Video</label>
            <input
              type="file"
              @change="uploadVideo"
              class="form-control-file"
            />
            <video
              autoplay
              muted
              controls
              preload="auto"
              v-for="video in course.video"
              :key="video.id"
            >
              <source :src="video.video_path" type="video/mp4" />
            </video>
          </div>

          <div class="form-group mx-5">
            <button class="btn btn-primary" type="submit">Update</button>
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
  name: "UpdateCourse",
  data() {
    return {
      submitted: false,
      course: {
        name: "",
        category_id: "",
        short_descrip: "",
        description: "",
        instructor: "",
        price: "",
        // course_cover_path: "",
        // video_path: [],
      },
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/api/course/detail/${this.$route.params.id}`)
      .then((response) => {
        this.course = response.data.data;
      });
  },
  created() {
    this.getCat();
  },
  computed: mapGetters(["getCategories"]),
  methods: {
    ...mapActions(["getCat"]),

    uploadCover(event) {
      console.log(event);
      this.cover = event.target.files[0];
    },

    uploadVideo(event) {
      console.log(event);
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
      console.log(data);
      axios
        .post(
          `http://localhost:8000/api/course/update/${this.$route.params.id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          let course = response.data;
          store.commit("storeCourse", course);
          this.$router.push({ name: "Courses" });
        })
        .catch((error) => {
          console.log(error.response);
        });
      this.submitted = true;
    },
  },
};
</script>

<style scoped>
video {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 30%;
  height: 30%;
  display: inline-block;
}
img {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 20%;
  height: 10%;
}
</style>