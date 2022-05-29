<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Create Subcategory
        </h3>
        <form>
          <div class="form-group row">
            <label for="subcatName" class="col-md-4 col-sm-5 col-form-label"
              >Enter Subcategory Name</label
            >
            <div class="col-md-8 col-sm-7">
              <input type="text" class="form-control" v-model="category.name" />
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary" @click.prevent="createCat()">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import store from "@/store";
export default {
  name: "CreateSub",
  data() {
    return {
      category: {
        name: "",
      },
    };
  },
  methods: {
    async createCat() {
      console.log("hello", this.category.name);
      axios
        .post("http://127.0.0.1:8000/api/categories/", {
          name: this.category.name,
        })
        .then((response) => {
          console.log(response.data);
          let category = response.data;
          store.commit("storeCategory", category);
          // this.$router.push({ name: 'subCategory' });
          this.$router.push({ path: "/subCategory" });
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style scoped>
</style>