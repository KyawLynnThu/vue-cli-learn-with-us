<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 mb-5">
    <h3 class="my-3 pb-2 d-flex justify-content-center">Password Setting</h3>
    <div class="card bg-light col-lg-7 mx-auto">
      <div class="card-body">
        <form>
          <div class="form-group mx-5">
            <label for="courseName">Enter Old Password</label>
            <input type="text" class="form-control" id="courseName" required />
          </div>
          <div class="form-group mx-5">
            <label for="courseName">Enter New Password</label>
            <input type="text" class="form-control" id="courseName" required />
          </div>
          <div class="form-group mx-5">
            <label for="courseName">Re-type New Password</label>
            <input type="text" class="form-control" id="courseName" required />
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-primary col-md-4 mr-2 mb-2">Change</button>
            <button class="btn btn-danger col-md-4 mb-2">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AdminPassword",
};
</script>

<style scoped>
</style>