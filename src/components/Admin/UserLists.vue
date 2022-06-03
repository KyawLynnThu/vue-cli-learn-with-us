<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-4 px-4 mb-5">
    <div class="d-flex flex-wrap flex-md-nowrap">
      <h2 class="my-4">User Lists</h2>
    </div>
    <a type="button" :href="`http://127.0.0.1:8000/api/user/export`">
      <button class="btn btn-primary mb-4">
        <i class="fas fa-download"></i> &nbsp; Download
      </button>
    </a>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-primary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr v-for="userLists in userList" :key="userLists.id">
            <th scope="row">{{ userLists.id }}</th>
            <td>{{ userLists.user_name }}</td>
            <td>{{ userLists.email }}</td>
            <td>{{ userLists.courses }}</td>
            <td>
              <button class="btn btn-danger">
                <i class="fas fa-user-alt-slash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "UserLists",

  data() {
    return {
      userList: "",
    };
  },
  created() {
    axios.get("user/list").then((res) => {
      this.userList = res.data.data;
      console.log(this.userList);
    });
  },
};
</script>

<style scoped>
</style>
