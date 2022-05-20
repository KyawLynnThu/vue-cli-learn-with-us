<template>
  <main role="main" class="col-md-9 ml-sm-auto pt-5 mb-5">
    <h3 class="my-3 pb-2 d-flex justify-content-center">Password Setting</h3>
    <div class="card bg-light col-lg-7 mx-auto">
      <div class="card-body">
        <form>
          <div class="form-group mx-5">
            <label for="courseName">Enter Password</label>
            <input type="text" class="form-control" id="courseName" required />
          </div>
          <div class="form-group mx-5">
            <label for="courseName">New Password</label>
            <input type="text" class="form-control" id="courseName" required />
          </div>
          <div class="form-group mx-5">
            <label for="courseName">Comfirm Password</label>
            <input type="text" class="form-control" id="courseName" required />
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-outline-secondary col-md-4 mr-2">
              Change Password
            </button>
            <button class="btn btn-outline-secondary col-md-4">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "PwSetting",
};
</script>

<style>
</style>