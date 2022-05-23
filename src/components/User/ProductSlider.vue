<template>
  <div>
    <VueSlickCarousel v-bind="settings" ref="carousel" class="slide clearfix">
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/600/300/?image=24"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/600/300/?image=25"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/600/300/?image=26"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/600/300/?image=27"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/600/300/?image=28"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://picsum.photos/600/300/?image=29"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn btn-primary">See Profile</a>
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
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
      },
    };
  },
};
</script>

<style scoped>
.slide {
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
}
.slick-prev,
.slick-next {
  color: #000000 !important;
}
.slick-prev:before,
.slick-next:before {
  color: #000000 !important;
}
</style>