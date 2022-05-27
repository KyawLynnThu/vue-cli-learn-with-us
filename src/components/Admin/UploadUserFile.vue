<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Upload User Lists
        </h3>
        <div class="card-body">
          <ValidationObserver v-slot="{ }" ref="form">
          <form class="text-center" @submit.prevent="onSubmit">
            <ValidationProvider
            name="File"
             rules="required|ext:pdf,xlxs"
            v-slot="{ errors,validate }"
          >
            <div class="upload-container col-lg-12 col-md-12 col-sm-12">
              <input
                  type="file"
                 @change="validate"
                  class="form-control-file"
                  :class="{ 'is-invalid': submitted }"
                />
                <div v-if="submitted" class="invalid-feedback">
                <span class="text-danger" >{{ errors[0] }}</span>
               </div>
            </div>
             </ValidationProvider>
            <div class="text-center mt-4">
              <button class="btn btn-primary">Upload</button>
            </div>
          </form>
           </ValidationObserver>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend} from "vee-validate";
import {
  required,
  ext,
} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: (field) => field + ` is required`,
})
extend("ext", {
  ...ext,
  message: (field) => field + ` must be excel or pdf format`
})
export default {
  name: "UploadUserFile",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data(){
    return{
        uploadFile:"",
        submitted:false
    }
  },
   methods: {
     onSubmit() {
      this.submitted = true;
    this.$refs.form.validate().then(success=>{
      if(success){
        //this.$router.push({ name: 'confirmCourse' }); 
        alert("success")
      }
    });
    }
  }
};
</script>

<style scoped>
.main {
  text-align: center;
}
.upload-container {
  position: relative;
}
.upload-container input {
  border: 1px solid #92b0b3;
  background: #f1f1f1;
  outline: 2px dashed #92b0b3;
  outline-offset: -10px;
  padding: 50px 30px 50px 100px;
  text-align: center !important;
}
.upload-container input:hover {
  background: #ddd;
}
</style>
