<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Upload User Table
        </h3>
        <form> 
          <div class="form-group row align-self-center">
            <div class="col-md-12 col-sm-12 align-self-center">
              <input
              type="file"
              class="form-control-file"
              required
            />
            </div>
          </div>
          <div class="text-center">
            <router-link :to="{ name: 'userLists'}" class="btn btn-primary">Upload</router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "UploadUserFile",
}
</script>

<style scoped>
</style>