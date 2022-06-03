<template>
  <div class="row mt-4 pl-md-5">
    <div class="col-md-7">
      <div>
        <iframe
          width="100%"
          height="450"
          :src="courseData.video[0].video_path"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <h5 class="mt-3 mb-3">{{ courseData.name }}</h5>
      <p>Description</p>
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
          {{ courseData.price }}
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

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                {{ courseData.name }}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">{{ courseData.description }}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                No
              </button>
              <button type="button" class="btn btn-primary"  @click.prevent="buyCourse()">Buy Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 pr-md-5 mt-4 mt-md-0">
      <h2>Course Outline</h2>
      <div v-for="videos in courseData.video" :key="videos.id">
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
          onClick="changePath(this.videos.id)"
        >
          CHAPTER {{ videos.id }}
          <span v-if="videos.id > 1">
            <img
              src="@/assets/lock.svg"
              alt=""
              class="lock float-right text-white"
            />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      courseData: [],
      videoID: "",
    };
  },
  created() {
    axios.get(`course/detail/${this.$route.params.id}`).then((res) => {
      this.courseData = res.data.data;
      let categoryId = res.data.data.category.id;
      localStorage.setItem("categoryId", categoryId);
      console.log(this.courseData);
      console.log(this.courseData.video[0].video_path);
    });
  },
  methods: {
    changePath(videoId) {
      this.videoID = videoId;
      console.log(this.videoID);
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
