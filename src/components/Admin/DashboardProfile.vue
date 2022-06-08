<template>
  <div class="card bg-light col-lg-5 mx-auto">
    <div class="card-body">
      <div class="text-center">
        <img src="@/assets/man.png" alt="profile image" class="mb-5" />
      </div>
      <form class="text-center">
        <div class="form-group mx-5">
          <label for="courseName">Name</label>
          <h6>{{adminInfo.name}}</h6>
        </div>
        <div class="form-group mx-5">
          <label for="courseName">Gmail</label>
          <h6>{{ adminInfo.email }}</h6>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "DashboardProfile",
  data(){
    return{
      adminInfo:'',
      id:localStorage.getItem("id")
    }
  },
  mounted(){
  axios.get(`http://127.0.0.1:8000/api/admin/show/${this.id}`)
    .then(response=>{
     this.adminInfo = response.data.data
  })
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
label {
  font-weight: bold;
}
.form-group {
  margin-bottom: 35px;
}
</style>