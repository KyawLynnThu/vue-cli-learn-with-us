<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 mb-5">
    <h3 class="my-3 pb-2 d-flex justify-content-center">Password Setting</h3>
    <div class="card bg-light col-lg-7 mx-auto">
      <div class="card-body">
        <form>
          <div class="form-group mx-5">
            <label for="courseName">Enter Old Password</label>
            <input
              v-model="userChangePwData.oldPw"
              type="text"
              class="form-control"
              id="courseName"
              required
            />
          </div>
          <div class="form-group mx-5">
            <label for="courseName">Enter New Password</label>
            <input
              v-model="userChangePwData.newPw"
              type="text"
              class="form-control"
              id="courseName"
              required
            />
          </div>
          <div class="form-group mx-5">
            <label for="courseName">Re-type New Password</label>
            <input
              v-model="userChangePwData.reNewPw"
              type="text"
              class="form-control"
              id="courseName"
              required
            />
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-primary col-md-4 mr-2 mb-2">Change</button>
            <button class="btn btn-danger col-md-4 mb-2">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "PwSetting",
  data() {
    return {
      userChangePwData: {
        oldPw: "",
        newPw: "",
        reNewPw: "",
      },
    };
  },
  create() {
    axios.post("user/change/password", this.userChangePwData).then((res) => {
      console.log(res.data);
      this.$router.push({
        path: "/login",
      });
    });
  },
};
</script>

<style scoped>
</style>
