<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Create Course
        </h3>
        <form>
          <div class="form-group mx-5">
            <label for="courseName">Course Name</label>
            <input type="text" class="form-control"/>
          </div>
          <div class="form-group mx-5">
            <label for="cover">Course Cover</label>
            <input
              type="file"
              accept="image/*"
              class="form-control-file"
            />
          </div>
          <div class="form-group mx-5">
            <label for="chooseSubcategory">Choose Subcategory</label>
            <select class="form-control">
              <option v-for="category in getCategories" :key="category.id">{{ category.name }}</option>
            </select>
          </div>
          <div class="form-group mx-5">
            <label for="shortDescription">Short Description</label>
            <textarea
              class="form-control"
              id="shortDescription"
              rows="2"
              required
            ></textarea>
          </div>
          <div class="form-group mx-5">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="form-group mx-5">
            <label for="instructorName">Instructor Name</label>
            <input
              type="text"
              class="form-control"
              id="instructorName"
            />
          </div>
          <div class="form-group mx-5">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price" />
          </div>
          <div class="form-group mx-5">
            <label for="video">Video</label>
            <input
              type="file"
              accept="video/*"
              class="form-control-file"
              id="video"
              multiple
            />
          </div>
          <div class="form-group mx-5">
            <router-link :to="{name: 'confirmCourse'}" class="btn btn-primary">Create</router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CreateCourses",
  computed: mapGetters(["getCategories"]),
  methods: mapActions(["getCat"]),
  mounted() {
    this.getCat();
  },
}

</script>

<style scoped>
</style>