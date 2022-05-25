<template>
  <div class="row confirm">
    <div class="col-lg-4 col-md-6 col-12 mx-auto">
      <h2 class="text-center m-3 text-uppercase">Sign Up</h2>
      <form class="bg-light p-4">
        <div class="form-group">
          <label for="name">Username</label>
          <h6>{{confirmData.name}}</h6>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <h6>{{confirmData.email}}</h6>
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <h6>{{confirmData.password}}</h6>
        </div>
        <div class="form-group">
          <label for="">Confirm Password</label>
          <h6>{{confirmData.password_comfirm}}</h6>
        </div>
        <div class="mb-3 mt-4">
          <router-link
            @clicl="confirm"
            :to="{ name: 'LogIn' }"
            type="submit"
            class="btn btn-dark btn-block text-uppercase font-weight-bold"
          >
            CONFIRM8
          </router-link>
        </div>
        <div>
          <router-link
            @click="confirm"
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
  data(){
    return{
      confirmData:''
    }
  },
  methods:{
    confirm(){
      axios.get('')
      .then(res=>{
        this.confirmData=res.data;
      })
    }
  }
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
.confirm {
  margin-top: 35px;
}
</style>