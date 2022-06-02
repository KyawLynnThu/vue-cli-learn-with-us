<template>
  <div class="row pl-md-5">
    <div class="col-md-7">
      <form class="mt-4 bg-light" @submit.prevent="reviewSubmit">
        <div class="form-group p-2 mx-2">
          <p><label for="">Review</label></p>
          <textarea
            v-model="commentData.content"
            name=""
            id=""
            cols="50"
            rows="6"
            class="w-100"
          ></textarea>
        </div>
        <div class="text-md-right">
          <button type="submit" class="btn btn-dark mb-3 mr-3">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      commentData: {
        content: "",
        user_id: localStorage.getItem("id"),
        course_id: this.$route.params.id,
      },
    };
  },
  methods: {
    reviewSubmit() {
      axios.post("comment/create", this.commentData).then((res) => {
        console.log(res.data);
        this.commentData.content = "";
      });
    },
  },
};
</script>

<style scoped>
</style>
