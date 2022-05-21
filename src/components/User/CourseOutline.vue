<template>
  <div class="row mt-3 pl-md-5">
    <div class="col-md-7 ">
      <div>
        <iframe 
          width="100%" height="315"
          src="https://www.youtube.com/embed/TAfLqDL-e9U" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <h5 class="mt-3">Title</h5>
      <p>Description</p>
      <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente tempora maxime similique, nulla, ut sunt facilis dolorum quia minus reprehenderit assumenda atque dolorem dolor quos, neque ipsum aliquid laboriosam.</p>
      <span class="vd-desc bg-dark text-white mb-3 p-2 text-center rounded d-inline-block" >Free</span>
      <p class="vd-price mx-1">$99.99</p>
      <button type="button" class="btn btn-dark btn-lg w-25">Add To Cart</button>
    </div>
    <div class="col-md-5 pr-md-5 mt-4 mt-md-0">
      <h2>Course Outline</h2>
      <button class="bg-dark text-white p-3 mb-1 d-block w-100 text-left">CHAPTER 1</button>
      <button class="bg-dark text-white p-3 mb-1 d-block w-100 text-left">CHAPTER 2</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.vd-price{
  font-size: 20px;
}
</style>