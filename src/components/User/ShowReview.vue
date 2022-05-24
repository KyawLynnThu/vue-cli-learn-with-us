<template>
  <div class="row mt-5 pl-md-5">
    <div class="col-md-7">
      <h2 class="mb-3">Reviews</h2>
      <div class="row">
        <div class="col-12" v-for="i in [1, 2, 3]" :key="i">
          <div class="card mb-3 bg-light">
            <div class="row no-gutters p-0">
              <div class="col-2 text-left pt-3 pl-3">
                <img
                  src="@/assets/dog.jpg"
                  class="rounded-circle review-cmt-img"
                  alt=""
                />
              </div>
              <div class="col-10">
                <div class="card-body px-md-0 px-sm-0 px-xs-5">
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
.review-cmt-img {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
}
</style>