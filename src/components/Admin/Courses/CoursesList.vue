<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-4 mb-5">
    <div class="d-flex flex-wrap flex-md-nowrap">
      <h2 class="my-4">Course Lists</h2>
    </div>
    <router-link :to="{ name: 'createCourse' }" class="btn btn-primary mb-4">
      <i class="fas fa-plus-square"></i> &nbsp; Add
    </router-link>

    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-primary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Course Name</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Instructor</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr v-for="course in getCourses" :key="course.id">
            <th scope="row">{{ course.id }}</th>
            <td>{{ course.name }}</td>
            <td>{{ course.category_id }}</td>
            <td>{{ course.instructor }}</td>
            <td>{{ course.price }}</td>
            <td>
              <router-link
                :to="`/updatecourse/${course.id}`"
                class="btn btn-primary mr-md-2 mr-0 mb-sm-0 mb-2"
              >
                <i class="fas fa-pen"></i>
              </router-link>
              <button class="btn btn-danger"
              @click.prevent="deleteCourse(course.id)">
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
  name: "CoursesList",
  computed: mapGetters(["getCourses"]),
  methods: mapActions(["getCourse","deleteCourse"]),
  mounted() {
    this.getCourse();
  },
};
</script>

<style scoped>
</style>