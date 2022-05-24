<template>
  <div class="row confirm">
    <div class="col-lg-4 col-md-6 col-12 mx-auto">
      <h2 class="text-center m-3 text-uppercase">Sign Up</h2>
      <form class="bg-light p-4">
        <div class="form-group">
          <label for="name">Username</label>
          <input type="text" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input type="password" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="">Confirm Password</label>
          <input type="password" class="form-control" required />
        </div>
        <div class="mb-3 mt-3">
          <router-link
            :to="{ name: 'confirmSignup' }"
            type="submit"
            class="btn btn-dark btn-block text-uppercase font-weight-bold"
          >
            Register
          </router-link>
        </div>
        <div>
          <router-link
            :to="{ name: 'LogIn' }"
            type="submit"
            class="
              btn btn-outline-dark btn-block
              text-uppercase
              font-weight-bold
            "
          >
            log in
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
.form-control:focus {
  border-color: #030303 !important;
  box-shadow: none !important;
}
.confirm {
  margin-top: 35px;
}
</style>