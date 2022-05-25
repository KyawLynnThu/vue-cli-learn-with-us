<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="d-flex flex-wrap flex-md-nowrap">
      <router-link :to="{ name: 'createCategory' }" class="btn btn-primary">
        <i class="fas fa-plus-square"></i> &nbsp; Add
      </router-link>
    </div>
    <h2 class="my-4">Category Lists</h2>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-primary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Subcategory Name</th>
            <th scope="col">Courses</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr v-for="category in categories" :key="category.id">
            <th scope="row">{{ category.id }}</th>
            <td>{{ category.name }}</td>
            <td>Otto</td>
            <td>
              <router-link
                :to="{ name: 'updateCategory' }"
                class="btn btn-primary mr-md-2 mr-0 mb-sm-0 mb-2"
              >
                <i class="fas fa-pen"></i>
              </router-link>
              <button class="btn btn-danger" @click="destroy(category.id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: "SubLists",
  data () {
    return {
      categories: {},
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/categories')
      .then(response => {
        this.categories = response.data
      })
      .catch(error => console.log(error));
  },
  methods: {
    destroy(id){
      axios
        .delete(`http://localhost:8000/api/categories/${id}`)
        .then(response=> { 
          this.categories = response.data
        });
    }
  }
}
</script>

<style scoped>
</style>
