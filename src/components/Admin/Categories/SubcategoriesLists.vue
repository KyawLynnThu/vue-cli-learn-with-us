<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-4 px-4 mb-5">
    <div class="d-flex flex-wrap flex-md-nowrap">
      <h2 class="my-4">Category Lists</h2>
    </div>
    <router-link :to="{ name: 'createCategory' }" class="btn btn-primary mb-4">
      <i class="fas fa-plus-square"></i> &nbsp; Add
    </router-link>

    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-primary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Subcategory Name</th>
            <th scope="col">Total Course</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr v-for="(category, index) in getCategories" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ category.name }}</td>
            <td>{{ category.course_count }}</td>
            <td>
              <router-link
                :to="`/updatecategory/${category.id}`"
                class="btn btn-primary mr-md-2 mr-0 mb-sm-0 mb-2"
              >
                <i class="fas fa-pen"></i>
              </router-link>
              <button
                class="btn btn-danger"
                @click.prevent="deleteCat(category.id)"
              >
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SubLists",
  computed: mapGetters(["getCategories"]),
  methods: mapActions(["getCat", "deleteCat"]),
  mounted() {
    this.getCat()
  }
}
</script>

<style scoped>
</style>
