<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <h2 class="my-4">User Lists</h2>
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
          <tr v-for="userLists in userList" :key="userLists.key">
            <th scope="row">{{ userLists.id }}</th>
            <td>{{ userLists.name }}</td>
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
    axios
      .get("user/list")
      .then((res) => {
        this.userList = res.data;
        console.log(this.userList);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>
