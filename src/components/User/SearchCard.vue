<template>
  <div class="row mb-3" v-if="searchCourses && searchCourses.length > 0">
    <div
      class="col-12 mb-3"
      v-for="searchCourse in searchCourses"
      :key="searchCourse.id"
    >
      <div class="card mb-3 shadow bg-white rounded">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              :src="searchCourse.course_cover_link"
              alt=""
              class="w-100 h-100"
            />
          </div>
          <div class="col-md-6 px-4 pt-3">
            <div class="card-body px-0">
              <h5
                class="card-title font-weight-bolder mb-3"
                style="font-size: 25px"
              >
                {{ searchCourse.name }}
              </h5>
              <p class="card-text" style="font-size: 20px">
                {{ searchCourse.short_descrip }}
              </p>
              <p class="card-text mb-4" style="font-size: 15px">
                <span>Instructor : </span>{{ searchCourse.instructor }}
              </p>
              <router-link
                :to="`/detail/${searchCourse.id}`"
                class="btn btn-dark"
                >More Detail</router-link
              >
            </div>
          </div>
          <div class="col-md-2">
            <p
              class="text-md-right ml-4 font-weight-bolder mr-md-4 mt-md-3"
              style="font-size: 20px"
            >
              ${{ searchCourse.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="d-flex justify-content-center mb-4" style="font-size: 20px">
      Search Not Found
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["searchCourses"]),
  }
}
</script>

<style scoped>
</style>