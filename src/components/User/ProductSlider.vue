<template>
  <div>
    <VueSlickCarousel v-bind="setting" ref="carousel" class="slide clearfix">
      <div class="col" v-for="topCourses in topCourse" :key="topCourses.id">
        <div class="card shadow">
          <img
            class="card-img-top"
            :src="topCourses.course_cover_link"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h5 class="card-title">{{ topCourses.instructor }}</h5>
            <p class="card-text">
              {{ topCourses.short_descrip }}
            </p>
            <router-link
              :to="`/detail/${topCourses.id}`"
              class="btn btn-primary"
              >See Profile</router-link
            >
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import axios from "axios";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      topCourse: {
        course_cover_link: "",
        instructor: "",
        short_descrip: "",
      },
      setting1: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
      },
      setting2: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
      },
      setting3: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
      },
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.screen.width;
    };
    axios
      .get("course/top")
      .then((res) => {
        this.topCourse = res.data.data;
        console.log(res)
      });
  },
  computed: {
    setting() {
      if (this.windowWidth >= 768) {
        return this.setting1;
      } else if (this.windowWidth >= 640) {
        return this.setting2;
      } else {
        return this.setting3;
      }
    },
  },
};
</script>

<style scoped>
.slide {
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
}
</style>