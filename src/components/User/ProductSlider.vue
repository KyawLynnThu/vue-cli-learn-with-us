<template>
  <div>
    <VueSlickCarousel v-bind="setting" ref="carousel" class="slide clearfix slick-arrow slick next">
      <!-- <button type="button" data-role="name" class="slick-arrow slick prev" style="display:none;">"Previous"</button> -->
      <div class="col" v-for="topCourses in topCourse" :key="topCourses.id">
        <div class="card shadow">
          <img
            class="card-img-top"
            :src="topCourses.course_cover_link"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
          <h4><strong>{{ topCourses.name }}</strong></h4>
          <h6>{{ topCourses.instructor }}</h6>
          <p class="card-text">
            $ {{ topCourses.price }}
          </p>
          <router-link :to="`/detail/${topCourses.id}`" class="btn btn-primary">More Detail</router-link>
        </div>
        </div>
      </div>
      <span class="slick-arrow slick next" style="display: none;"></span>
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
        name: "",
        course_cover_link: "",
        instructor: "",
        price: "",
      },
      setting: {
  "dots": false,
  "infinite": false,
  "speed": 600,
  "focusOnSelect": false,
  "slidesToShow": 4,
  "slidesToScroll": 4,
  "initialSlide": 0,
  "arrows": true,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": false,
        "dots": false
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
},
  }
  },
  mounted() {
  axios
      .get("course/top")
      .then((res) => {
        this.topCourse = res.data.data;
      });
}
}
</script>

<style scoped>
.slide {
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
}

.slick-slide img {
  height: 200px !important;
}
.card-body h4 {
  text-decoration: none;
}
.card-body h6 {
  height: 30px;
}
.card {
  margin-bottom: 40px;

}
</style>