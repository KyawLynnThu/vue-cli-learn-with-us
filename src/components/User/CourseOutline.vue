<template>
  <div class="row mt-3 pl-md-5">
    <div class="col-md-7">
      <div>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/TAfLqDL-e9U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <h5 class="mt-3">Title</h5>
      <p>Description</p>
      <p class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente
        tempora maxime similique, nulla, ut sunt facilis dolorum quia minus
        reprehenderit assumenda atque dolorem dolor quos, neque ipsum aliquid
        laboriosam.
      </p>
      <span
        class="
          vd-desc
          bg-dark
          text-white
          mb-3
          p-2
          text-center
          rounded
          d-inline-block
        "
        >Free</span
      >
      <p class="vd-price mx-1">$99.99</p>
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
                Modal title
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
            <div class="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              repellat deleniti cum magni exercitationem fuga dolorum debitis
              neque eius quia, accusamus voluptas, nisi quidem. Ullam distinctio
              fugiat culpa temporibus quaerat!
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                No
              </button>
              <button type="button" class="btn btn-primary">Buy Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 pr-md-5 mt-4 mt-md-0">
      <h2>Course Outline</h2>
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
      >
        CHAPTER 1
        <img
          src="@/assets/lock.svg"
          alt=""
          class="lock float-right text-white"
        />
      </button>
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
      >
        CHAPTER 2
        <img
          src="@/assets/lock.svg"
          alt=""
          class="lock float-right text-white"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {}
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