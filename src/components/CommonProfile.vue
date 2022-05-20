<template>
  <div class="card bg-light col-lg-5 mx-auto">
    <div class="card-body">
      <div class="text-center">
        <img src="@/assets/man.png" alt="profile image" class="mb-5" />
      </div>
      <form>
        <div class="form-group mx-5">
          <label for="courseName">Name</label>
        </div>
        <div class="form-group mx-5">
          <label for="courseName">Gmail</label>
        </div>
        <div class="form-group mx-5">
          <label for="courseName">Password</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonProfile",
};
</script>

<style>
</style>