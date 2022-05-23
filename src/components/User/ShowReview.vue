<template>
  <div class="row mt-5 pl-md-5">
    <div class="col-md-7">
      <h2>Reviews</h2>
      <div class="row">
        <div class="col-md-12 col-sm-4" v-for="i in [1, 2, 3]" :key="i">
          <div class="card mb-3 bg-light">
            <div class="row no-gutters">
              <div class="col-md-2 text-center">
                <img src="@/assets/dog.jpg" alt="" class="w-75 h-75 mt-4" />
              </div>
              <div class="col-md-10 p-2">
                <div class="card-body px-0 ml-sm-3 ml-5 ml-md-0">
                  <h5 class="card-title font-weight-bolder mb-4">Username</h5>
                  <p class="card-text pr-3">
                    Should have more pratical stuff than theory part , with each
                    practical stuff implemented clearly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-dark btn-block">More Reviews</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>