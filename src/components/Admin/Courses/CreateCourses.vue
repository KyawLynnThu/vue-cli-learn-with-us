<template>
  <main role="main" class="col-md-9 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">Create Course</h3>
        <form>
          <div class="form-group mx-5">
            <label for="courseName">Course Name</label>
            <input type="text" class="form-control" id="courseName" required>
          </div>
          <div class="form-group mx-5">
            <label for="cover">Course Cover</label>
            <input type="file" accept="image/*" class="form-control-file" id="cover" required>
          </div>
          <div class="form-group mx-5">
            <label for="chooseSubcategory">Choose Subcategory</label>
            <select class="form-control" id="chooseSubcategory">
              <option>php</option>
              <option>js</option>
              <option>html</option>
            </select>
          </div>
          <div class="form-group mx-5">
            <label for="shortDescription">Short Description</label>
            <textarea class="form-control" id="shortDescription" rows="2" required></textarea>
          </div>
          <div class="form-group mx-5">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="3" required></textarea>
          </div>
          <div class="form-group mx-5">
            <label for="instructorName">Instructor Name</label>
            <input type="text" class="form-control" id="instructorName" required>
          </div>
          <div class="form-group mx-5">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price" required>
          </div>
          <div class="form-group mx-5">
            <label for="video">Video</label>
            <input type="file" accept="video/*" class="form-control-file" id="video" multiple required>
          </div>
          <div class="text-center mt-4"><button class="btn btn-outline-secondary">Create</button></div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "CreateCourses"
}
</script>

<style>

</style>