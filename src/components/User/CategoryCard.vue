<template>
  <div class="row">
    <div
      class="col-md-3 col-sm-6 cat-card pr-3"
      v-for="courseCards in courseCard"
      :key="courseCards.id"
    >
      <router-link :to="{ name: 'Detail' }">
        <div class="card shadow bg-white rounded">
          <img
            :src="courseCards.course_cover_link"
            alt=""
            class="w-100 h-100"
          />
          <div class="card-body">
            <h5 class="card-title">{{ courseCards.name }}</h5>
            <p class="card-text">{{ courseCards.instructor }}</p>
            <p>{{ courseCards.price }}</p>
            <router-link
              :to="`/detail/${courseCards.id}`"
              class="btn btn-primary"
            >
              More Detail
            </router-link>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      courseCard: "",
    };
  },
  created() {
    axios.get(`categories/show/${this.$route.params.id}`).then((res) => {
      this.courseCard = res.data.data;
      console.log(this.courseCard);
    });
  },
};
</script>

<style scoped>
.cat-card {
  margin-bottom: 2rem;
}
</style>
