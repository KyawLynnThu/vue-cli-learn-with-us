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
                  v-model="course.data.name"
                  class="form-control"
                />
                <p v-if="errors.name" class="text-danger">{{errors.name[0]}}</p>
              </div>


     
              <div class="form-group mx-5">
                <label for="cover">Course Cover</label>
                <input
                  type="file"
                  @change="uploadCover"
                  class="form-control-file"
                />
                <img :src="course.data.cover_path" alt="" style="display:block"/>
                 <p v-if="errors.course_cover_path" class="text-danger">{{errors.course_cover_path[0]}}</p>
              </div>
   
              <div class="form-group mx-5">
                <label for="chooseSubcategory">Choose Subcategory</label>
                <select
                  class="form-control"
                  v-model="course.data.category.id"
                  id="chooseSubcategory"
                >
                  <option>{{ course.data.category.name }}</option>

                </select>
   
              </div>

              <div class="form-group mx-5">
                <label for="shortDescription">Short Description</label>
                <textarea
                  class="form-control"
                  id="shortDescription"
                  rows="2"
                  v-model="course.data.short_descrip"
                ></textarea>
              <p v-if="errors.short_descrip" class="text-danger">{{errors.short_descrip[0]}}</p>
              </div>


              <div class="form-group mx-5">
                <label for="description">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                  v-model="course.data.description"
                ></textarea>
                 <p v-if="errors.description" class="text-danger">{{errors.description[0]}}</p>
              </div>


              <div class="form-group mx-5">
                <label for="instructorName">Instructor Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="instructorName"
                  v-model="course.data.instructor"
                />
               <p v-if="errors.instructor" class="text-danger">{{errors.instructor[0]}}</p>
              </div>
          
              <div class="form-group mx-5">
                <label for="price">Price</label>
                <input
                  type="text"
                  v-model="course.data.price"
                  class="form-control"
                  id="price"
     
                />
               <p v-if="errors.price" class="text-danger">{{errors.price[0]}}</p>
              </div>


            
              <div class="form-group mx-5">
                <label for="video">Video</label>
                <input
                  type="file"
                  @change="uploadVideo"
                  class="form-control-file"
                  
                />
                    <video autoplay muted controls preload="auto" v-for="video in course.data.video" :key="video.id">
                    <source :src="video.video_path" type="video/mp4" />
                  </video>
                 <p v-if="errors.video_path[index]" class="text-danger">{{errors.video_path[index]}}</p>
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
import axios from "axios";
import store from "@/store";
export default {
  name: "UpdateCourse",
  data() {
    return {
      submitted: false,
      course: [],
      video:[],
       errors:{
        name: "",
        short_descrip: "",
        description: "",
        instructor: "",
        price: "",
        course_cover_path: "",
        video_path:"",
        
      }
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/api/course/detail/${this.$route.params.id}`)
      .then((response) => {
        this.course = response.data;
      });
  },
  methods: {
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

      data.append("name", this.course.data.name);
      data.append("category_id", this.course.data.category.id);
      data.append("short_descrip", this.course.data.short_descrip);
      data.append("description", this.course.data.description);
      data.append("instructor", this.course.data.instructor);
      data.append("price", this.course.data.price);
      data.append("course_cover_path", this.cover);

      for( var i = 0; i < this.video.length; i++ ){
        data.append("video_path[]", this.video[i] );
      }
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
          this.errors=error.response.data.data
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