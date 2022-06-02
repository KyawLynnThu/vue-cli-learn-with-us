<template>
  <div class="row">
    <div class="col-12">
      <p class="text-right mb-4 mr-4" v-if="searchCourses && searchCourses.length>0" style="font-size: 20px">{{searchCourses && searchCourses.length}} Courses</p>
      <p v-else class="text-right mb-4 mr-4" style="font-size: 20px">0 Courses</p>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
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
//  created(){
//    axios.get(`http://127.0.0.1:8000/api/course/get_all`)
//    .then(response=>{
//      this.total=response.data
//    console.log(response.data)
//  })
//}
}
</script>

<style scoped>
</style>