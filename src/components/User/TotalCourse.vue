<template>
  <div class="row">
    <div class="col-12">
      <p class="text-right mb-4 mr-4" v-if="searchCourses && searchCourses.length>0" style="font-size: 20px">{{searchCourses && searchCourses.length}} Courses</p>
      <p v-else class="text-right mb-4 mr-4" style="font-size: 20px">0 Courses</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  data(){
    return{
      total:''
    }
  },
  computed:{
    ...mapGetters(["searchCourses"])
  },
}
</script>

<style scoped>
</style>