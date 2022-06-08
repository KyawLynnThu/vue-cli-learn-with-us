<template>
  <div class="card text-center shadow p-3 mb-5 bg-white rounded">
    <img
      src="@/assets/man.png"
      class="rounded-circle about-cmt-img m-auto"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title">Nyein Thu San</h5>
      <p class="card-text">
        "Learn with Us has helped me expand my knowledge through several important
        courses that are extremely impactful and helpful for my career.”
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>