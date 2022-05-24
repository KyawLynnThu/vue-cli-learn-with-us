<template>
  <div class="row">
    <div class="col-lg-4 col-md-6 col-12 mx-auto">
      <h2 class="text-center m-3 text-uppercase">Sign Up</h2>
      <form class="bg-light p-4">
        <div class="form-group">
          <label for="name">Username</label>
          <h6>Example Username</h6>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <h6>Example123@gmail.com</h6>
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <h6>agsd#rrte132343</h6>
        </div>
        <div class="form-group">
          <label for="">Confirm Password</label>
          <h6>agsd#rrte132343</h6>
        </div>
        <div class="mb-3 mt-4">
          <router-link
            :to="{ name: 'LogIn' }"
            type="submit"
            class="btn btn-dark btn-block text-uppercase font-weight-bold"
          >
            CONFIRM
          </router-link>
        </div>
        <div>
          <router-link
            :to="{ name: 'SignUp' }"
            type="submit"
            class="
              btn btn-outline-dark btn-block
              text-uppercase
              font-weight-bold
            "
          >
            BACK
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
label {
  font-weight: bold;
  display: block;
}
h6 {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>