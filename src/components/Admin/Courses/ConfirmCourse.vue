<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Create Course
        </h3>
        <form>
          <div class="form-group mx-5">
            <label for="courseName">Name</label>
            <h6>Course Name Example</h6>
          </div>
          <div class="form-group mx-5">
            <label for="cover">Course Cover</label>
            <img src="@/assets/dog.jpg" alt="" />
          </div>
          <div class="form-group mx-5">
            <label for="chooseSubcategory">Subcategory</label>
            <h6>Ruby</h6>
          </div>
          <div class="form-group mx-5">
            <label for="shortDescription">Short Description</label>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              et possimus veritatis quos accusantium libero ea perspiciatis.
              Ipsum provident repellat quisquam itaque placeat totam quas
              quidem, enim, odit inventore omnis. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Tenetur et possimus veritatis quos
              accusantium libero ea perspiciatis. Ipsum provident repellat
              quisquam itaque placeat totam quas quidem, enim, odit inventore
              omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Tenetur et possimus veritatis quos accusantium libero ea
              perspiciatis. Ipsum provident repellat quisquam itaque placeat
              totam quas quidem, enim, odit inventore omnis.
            </p>
          </div>
          <div class="form-group mx-5">
            <label for="description">Description</label>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              et possimus veritatis quos accusantium libero ea perspiciatis.
              Ipsum provident repellat quisquam itaque placeat totam quas
              quidem, enim, odit inventore omnis.
            </p>
          </div>
          <div class="form-group mx-5">
            <label for="instructorName">Instructor Name</label>
            <h6>Ma Swe Swe Aung</h6>
          </div>
          <div class="form-group mx-5">
            <label for="price">Price</label>
            <h6>$ 19.99</h6>
          </div>
          <div class="form-group mx-5">
            <label for="video">Video</label>
            <video loop muted autoplay preload="auto">
              <source src="@/assets/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="form-group mx-5">
            <router-link
              :to="{ name: 'Courses' }"
              class="btn btn-success mr-2 mb-2"
              >Confirm</router-link
            >
            <router-link
              :to="{ name: 'createCourse' }"
              class="btn btn-danger mb-2"
              >Back</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
}
video {
  margin-right: 10px;
  margin-bottom: 10px;
  width: 30%;
  height: 30%;
}
</style>