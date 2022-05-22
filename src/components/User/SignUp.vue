<template>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 mx-auto mt-5 "> 
        <h2 class="text-center m-3 text-uppercase">Sign Up</h2>
        <form class="bg-light p-4">
          <div class="form-group">
            <label for="name">Username</label>
            <input type="text" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="">Confirm Password</label>
            <input type="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-dark btn-block text-uppercase font-weight-bold">Register</button>
          <button type="submit" class="btn btn-outline-dark btn-block text-uppercase font-weight-bold">log in</button>
        </form>
      </div>
    </div>
  
  
</template>

<script>
export default {
  name:"SignUp",
 
}
</script>

<style scoped>
.form-control:focus {
  border-color: #030303 !important;
  box-shadow: none !important;
}
</style>