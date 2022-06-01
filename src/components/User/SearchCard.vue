<template>
  <div class="row mb-3" v-if="getCourses.length>0">
    <div class="col-12 mb-3" v-for="getCourse in getCourses" :key="getCourse.id">
      <div class="card mb-3 shadow bg-white rounded">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="getCourse.course_cover_link" alt="" class="w-100 h-100" />
          </div>
          <div class="col-md-6 p-4">
            <div class="card-body px-0">
              <h5 class="card-title font-weight-bolder">{{ getCourse.name }}</h5>
              <p class="card-text">{{ getCourse.short_descrip }}</p>
              <p class="card-text">
                <span>Instructor : </span>{{getCourse.instructor}}
              </p>
              <!--<p class="card-text">
                <small class="text-muted"
                  >1.5 Total Hours <span>Beginner</span></small
                >
              </p>-->
            </div>
          </div>
          <div class="col-md-2">
            <p
              class="text-md-right ml-4 font-weight-bolder mr-md-3 mt-md-3"
              style="font-size: 20px"
            >
              ${{ getCourse.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="d-flex justify-content-center mb-4" style="font-size:20px">Not Found</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed:{
    ...mapGetters(["getCourses"])
  },
}
</script>

<style scoped>
</style>