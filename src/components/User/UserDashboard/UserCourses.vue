<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <h2 class="my-4">My Courses</h2>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-dark text-white">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Courses Name</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr>
            <th scope="row">{{ userCourse.id }}</th>
            <td>PHP 7</td>
            <td>PHP</td>
            <td>Free</td>
            <td>
              <router-link
                :to="{ name: 'Detail' }"
                class="btn btn-sm btn-success mr-2"
              >
                <i class="fas fa-play"></i> &nbsp; START
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ruby on Rail</td>
            <td>Ruby</td>
            <td>$ 19.99</td>
            <td>
              <router-link
                :to="{ name: 'Detail' }"
                class="btn btn-sm btn-success mr-2"
              >
                <i class="fas fa-play"></i> &nbsp; START
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
export default {
  name: "UserCourses",
  data(){
    return {
      userCourse:[],
      id: localStorage.getItem("id")
    }
  },
  created(){
    axios.get(`course/show/${this.id}`)
      .then(res=>{
        this.userCourse=res.data;
        console.log(this.userCourse);
      })
      .catch(error=>{
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
