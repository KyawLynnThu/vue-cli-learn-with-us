<template>
  <div class="row mb-3">
    <div class="col-12 mb-3" v-for="j in [1, 2, 3, 4, 5]" :key="j">
      <div class="card mb-3 shadow bg-white rounded">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="@/assets/dog.jpg" alt="" class="w-100 h-100" />
          </div>
          <div class="col-md-6 p-4">
            <div class="card-body px-0">
              <h5 class="card-title font-weight-bolder">Introduction to PHP</h5>
              <p class="card-text">A Quick and Easy Intro to PHP Programming</p>
              <p class="card-text">
                <span>Instructor : </span>Ko Soe Htet Aung, SCM
              </p>
              <p class="card-text">
                <small class="text-muted"
                  >1.5 Total Hours <span>Beginner</span></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-2">
            <p
              class="text-md-right ml-4 font-weight-bolder mr-md-3 mt-md-3"
              style="font-size: 20px"
            >
              Free
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>