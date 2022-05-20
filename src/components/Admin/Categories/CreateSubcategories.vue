<template>
  <main role="main" class="col-md-9 ml-sm-auto pt-5 px-4 mb-5">
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
              <input
                type="text"
                class="form-control"
                id="subcatName"
                required
              />
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "CreateSub",
};
</script>

<style>
/*main {
  width: 80%;
}*/
</style>