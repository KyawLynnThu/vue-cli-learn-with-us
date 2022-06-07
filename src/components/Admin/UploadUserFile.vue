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
              <p v-for="err in errs" class="text-danger" :key="err.index">{{err.errors[0]}}</p>
            </div>
           
            <div class="text-center mt-4">
              <button class="btn btn-primary" type="submit">
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
      error:"",
      errs:[],
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
        .then(()=>{
          this.$router.push("/userlists");
        })
        .catch(err=> {
          this.error=err.response.data.data
          this.errs=err.response.data
        })       
    }
  }
}

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