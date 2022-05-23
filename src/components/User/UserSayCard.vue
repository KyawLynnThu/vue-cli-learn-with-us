<template>
  <div class="card text-center shadow p-3 mb-5 bg-white rounded">
    <img
      src="@/assets/dog.jpg"
      class="rounded-circle about-cmt-img m-auto"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title">User Name</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSayCard",
};
</script>

<style scoped>
.about-cmt-img {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
}
</style>