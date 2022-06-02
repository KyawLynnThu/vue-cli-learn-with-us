<template>
  <div class="row mt-3 m-md-4 m-0">
    <div class="col-12 p-0 pl-md-3">
      <h2 class="mb-3">You May Also Like</h2>
    </div>
    <div
      class="col-md-3 col-sm-6 mb-3"
      v-for="relateCourses in relateCourse"
      :key="relateCourses.id"
    >
      <div class="card shadow bg-white rounded">
        <img
          :src="relateCourses.course_cover_link"
          alt=""
          class="w-100 h-100"
        />
        <div class="card-body">
          <h5 class="card-title">{{ relateCourses.name }}</h5>
          <p class="card-text">{{ relateCourses.instructor }}</p>
          <p>{{ relateCourses.price }}</p>
          <router-link
            :to="`/detail/${relateCourses.id}`"
            class="btn btn-primary"
            onClick="window.location.reload(true)"
          >
            More Detail
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categoryId: localStorage.getItem("categoryId"),
      relateCourse: {
        name: "",
        instructor: "",
        price: "",
        course_cover_link: "",
      },
    };
  },
  created() {
    axios
      .get(`course/youmaylike/${this.categoryId}`)
      .then((res) => {
        this.relateCourse = res.data.data;
        console.log(this.relateCourse);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
