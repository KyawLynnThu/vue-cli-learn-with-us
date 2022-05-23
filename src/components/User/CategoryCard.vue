<template>
  <div class="row">
    <div
      class="col-md-3 col-sm-6 mb-3"
      v-for="i in [1, 2, 3, 4, 5, 6, 7, 8]"
      :key="i"
    >
      <router-link :to="{ name: 'Detail' }">
        <div class="card shadow bg-white rounded">
          <img src="@/assets/dog.jpg" alt="" class="w-100 h-100" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Instructor</p>
            <p>$100</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>