<template>
  <div class="row mt-4 pl-md-5">
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
      <h5 class="mt-3 mb-3">{{courseData.name}}</h5>
      <p>Description</p>
      <p class="">{{courseData.description}}</p>

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
      <p class="vd-price mx-1">{{ courseData.price }}</p>
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
import axios from 'axios'
export default {
  data(){
    return{
      courseData:{
        name:'',
        description:'',
        price:''
      },
       buyCourseId:{
         user_id:localStorage.getItem("id"),
         course_id:this.$route.params.id
      }
    }
  },
   methods:{
    async buyCourse(){
      await axios.post(`http://127.0.0.1:8000/api/course/buy`,this.buyCourseId)
      .then(response=>{
        console.log(response)
        this.$router.push({path:'/usercourse'})
      })
    }
  },
  created(){
    axios.get(`course/detail/${this.$route.params.id}`)
    .then(res=>{
      this.courseData=res.data.data;
      let categoryId=res.data.data.category.id;
      localStorage.setItem("categoryId", categoryId)      
      console.log(this.courseData);
    })
  },
}
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
