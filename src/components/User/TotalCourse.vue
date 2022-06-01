<template>
  <div class="row">
    <div class="col-12">
      <p class="text-right mb-4 mr-4"   style="font-size: 20px">{{total.length}} Courses</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      total:''
    }
  },
  created(){
    axios.get(`http://127.0.0.1:8000/api/course/get_all`)
    .then(response=>{
      this.total=response.data
    console.log(response.data)
  })
}
}
</script>

<style scoped>
</style>