<template>
  <div class="card bg-light col-lg-5 mx-auto">
    <div class="card-body">
      <div class="text-center">
        <img src="@/assets/man.png" alt="profile image" class="mb-5" />
      </div>
      <form class="text-center">
        <div class="form-group mx-5">
          <label for="courseName">Name</label>
          <h6>{{ user.name }}</h6>
        </div>
        <div class="form-group mx-5">
          <label for="courseName">Gmail</label>
          <h6>{{ user.email }}</h6>
        </div>
        <div class="form-group mx-5">
          <label for="courseName">Password</label>
          <h6>{{ user.password }}</h6>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CommonProfile",
  data() {
    return {
      user: {
        name:'',
        email:'',
        password:''
      },
      id: localStorage.getItem("id"),
    };
  },
  created() {
    axios.get(`user/show/${this.id}`).then((res) => {
      this.user = res.data.data;
      console.log(this.user);
    });
  },
};
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