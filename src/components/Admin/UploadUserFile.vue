<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Upload User Lists
        </h3>
        <div class="card-body">
          <form class="text-center" @submit.prevent="submitForm()">
            <div class="upload-container col-lg-12 col-md-12 col-sm-12">
              <input
                type="file"
                id="file"
                ref="file"
                v-on:change="onChangeFileUpload()"
                class="form-control-file"
                
              />
              <p v-if="error" class="text-danger">{{error.file[0]}}</p>
            </div>
           
            <div class="text-center mt-4">
              <button class="btn btn-primary" type="sumit">
                Upload
              </button>
               
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      file: "",
      error:""
      
    };
  },

  methods: {
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitForm() {
      let formData = new FormData();
      formData.append("file", this.file);
      
      axios
        .post("user/import", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (data) {
          console.log('then')
          console.log(data.data.file);
        })
        .catch(err=> {
          console.log(err.response.data.data.file);
          this.error=err.response.data.data
        });
       
    },
    
    
  },
};
</script>
