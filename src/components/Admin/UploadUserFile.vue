<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Upload User Lists
        </h3>
        <div class="card-body">
          <form class="text-center">
            <div class="upload-container col-lg-12 col-md-12 col-sm-12">
              <input type="file" id="file_upload" multiple />
            </div>
            <div class="text-center mt-4">
              <button class="btn btn-primary">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "UploadUserFile",
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