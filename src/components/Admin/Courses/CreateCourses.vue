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
              </div>

              <div class="form-group mx-5">
                <label for="cover">Course Cover</label>
                <input
                  type="file"
                  name="cover"
                  @change="uploadCover"
                  class="form-control-file"
                />
              </div>

              <div class="form-group mx-5">
                <label for="chooseSubcategory">Choose Subcategory</label>
                <select
                  class="form-control"
                  v-model="course.category_id"
                  id="chooseSubcategory"
                >
                  <option v-for="category in getCategories" :key="category.id">
                    {{ category.id }}
                  </option>
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
                  multiple
                />
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
      course: {
        name: "",
        category_id: 1,
        short_descrip: "",
        description: "",
        instructor: "",
        price: "",
        course_cover_path: "",
        video_path: []
      },
      
    };
  },
  mounted() {
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
      this.video = event.target.files[0];
    },

    onSubmit() {
      var data = new FormData();
      data.append('name', this.course.name);
      data.append('category_id', this.course.category_id);
      data.append('short_descrip', this.course.short_descrip);
      data.append('description', this.course.description);
      data.append('instructor', this.course.instructor);
      data.append('price', this.course.price);
      data.append('course_cover_path', this.cover);
      data.append('video_path', this.video );
          axios
            .post("http://127.0.0.1:8000/api/course/create/", data
            // {
            //   name: this.course.name,
            //   category_id: this.course.category_id,
            //   short_descrip: this.course.short_descrip,
            //   description: this.course.description,
            //   instructor: this.course.instructor,
            //   price: this.course.price,
            //   course_cover_path: 'dog.jpg',
            //   video_path: ['video.mp4']
            // }
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

      // this.$refs.form.validate().then((success) => {
      //   if (success) {
          
      //   }
      // });
    },
  },
};
</script>

<style scoped>
</style>