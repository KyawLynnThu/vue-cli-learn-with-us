<template>
  <div class="row">
    <div class="col-lg-4 col-md-6 mx-auto mt-5 pt-5 col-12">
      <h2 class="text-center m-3">LOG IN</h2>
      <form class="bg-light p-4">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input type="password" class="form-control" required />
        </div>
        <button
          type="submit"
          class="btn btn-dark btn-block text-uppercase font-weight-bold"
        >
          log in
        </button>
        <button
          type="submit"
          class="
            btn btn-outline-dark btn-block
            text-uppercase
            mb-3
            font-weight-bold
          "
        >
          Register
        </button>
        <a class="text-decoration-none text-dark">Forgot Password?</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
};
</script>

<style scoped>
.form-control:focus {
  border-color: #030303 !important;
  box-shadow: none !important;
}
</style>