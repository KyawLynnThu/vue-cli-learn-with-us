<template>
  <div class="row mt-3 m-md-4 m-0">
    <div class="col-12 p-0 pl-md-3">
      <h2 class="mb-3">You May Also Like</h2>
    </div>
    <div class="col-md-3 col-sm-6 mb-3" v-for="i in [1, 2, 3, 4]" :key="i">
      <div class="card shadow bg-white rounded">
        <img src="@/assets/dog.jpg" alt="" class="w-100 h-100" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Instructor</p>
          <p>$100</p>
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