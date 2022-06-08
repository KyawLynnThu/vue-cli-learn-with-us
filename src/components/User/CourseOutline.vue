<template>
  <div class="row mt-4 pl-md-5">
    <div class="col-md-7">
      <div v-if="purchase == false">
        <iframe width="100%" height="450" :src="defaultVideolink" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div v-if="purchase == true">
        <span class="" v-if="!videoPath">
        <iframe width="100%" height="450" :src="defaultVideolink" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </span>
      <span v-if="videoPath">
        <iframe width="100%" height="450" :src="videoPath" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </span>
      </div>
      <h3 class="mt-3 mb-3"><strong>{{ courseData.name }}</strong></h3>
      <h6 class="mt-5"><strong>Course Outline</strong></h6>
      <p class="">{{ courseData.description }}</p>

      <div class="pb-3">
        <span
          v-if="courseData.price == 0"
          class="
            vd-desc
            bg-dark
            text-white
            p-2
            text-center
            rounded
            d-inline-block
          "
          >Free</span
        >
        <p v-if="courseData.price > 0" class="vd-price mx-1">
          $ {{ courseData.price }}
        </p>
      </div>
      <button
        type="button"
        class="btn btn-dark"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Buy This Course
      </button>


    <div  class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div   class="modal-dialog modal-dialog-centered" role="document">
        <div v-if="loading" class="d-flex justify-content-right">
          <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else class="modal-content">
          <div  class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {{ courseData.name }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ courseData.description }}</p>
            <img :src="courseData.cover_path" alt="" class="w-50 h-50"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              No
            </button>
              <button type="button" class="btn btn-primary" @click.prevent="buyCourse()">
              Buy Course
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  <div class="col-md-5 pr-md-5 mt-4 mt-md-0">
    <h2>Course Outline</h2>
    <div v-if="purchase==false">
      <div v-for="(videos, index) in courseData.video" :key="index">
        <button class="course-btn bg-secondary text-white p-3 mb-1 d-block w-100 text-left">
          CHAPTER {{ index+1 }}
          <span v-if="index >= 1">
            <img src="@/assets/lock.svg" alt="" class="lock float-right text-white" />
          </span>
        </button>
      </div>
    </div>
      <div v-if="purchase == true">
        <div v-for="(videos, index) in courseData.video" :key="index">
          <button
            class="
              course-btn
              bg-secondary
              text-white
              p-3
              mb-1
              d-block
              w-100
              text-left
            "
            @click.prevent="changePath(index)"
          >
            CHAPTER {{ index + 1 }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading:false,
      videoPath:'',
      videosIndex:'',
      defaultVideolink: '',
      purchase: '',
      courseData: [],
      videoID: "",
      buyCourseId: {
        user_id: localStorage.getItem("id"),
        course_id: this.$route.params.id,
      },
    };
  },
  created() {
    axios.get(`course/detail/${this.$route.params.id}`).then((res) => {
      this.courseData = res.data.data;
      let categoryId = res.data.data.category.id;
      this.purchase = res.data.data.purchase;
      localStorage.setItem("categoryId", categoryId);
      this.defaultVideolink = this.courseData.video[0].video_path;
    });
  },
  methods: {
    changePath(index) {
      this.videosIndex = index;
      this.videoPath = this.courseData.video[this.videosIndex].video_path;
    },
    async buyCourse() {
      this.loading=true
      await axios
        .post(`http://127.0.0.1:8000/api/course/buy`, this.buyCourseId)
        .then(() => {

          this.loading = false;
          this.$router.push({ path: '/usercourse'});
          location.reload();
        });
    },
  },
};

</script>

<style scoped>
.vd-price {
  font-size: 20px;
}
.lock {
  width: 20px;
  height: 20px;
}
.course-btn {
  border-style: none;
}
</style>
