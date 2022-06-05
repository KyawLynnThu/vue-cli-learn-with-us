<template>
  <main role="main" class="col-md-12 ml-sm-auto mb-5">
    <div class="row adminrow">
      <div class="col-lg-4 col-md-4 col-sm-12 admincard">
        <div class="card category">
          <div class="card-body">
            <div class="text-center">
              <h3 class="text-secondary mb-4">Total Categories</h3>
              <h4 class="text-secondary text-center">{{ totalCat }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 admincard">
        <div class="card course">
          <div class="card-body">
            <div class="text-center">
              <h3 class="text-success mb-4">Total Courses</h3>
              <h4 class="text-success text-center">{{ totalCourse }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 admincard">
        <div class="card user">
          <div class="card-body">
            <div class="text-center">
              <h3 class="text-danger mb-4">Total Users</h3>
              <h4 class="text-danger text-center">{{ totalUser }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <column-chart
      :data="tableData"
      width="80%"
      style="margin: 0 auto"
      :download="true"
    />
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "ChartGraph",
  data() {
    return {
      tableData: [
        // { name: "Angualr", data: { Category: 10 } },
        // { name: "Python", data: { Category: 40 } },
        // { name: "Python", data: { Category: 45 } },
        // { name: "Python", data: { Category: 25 } },
        // { name: "Python", data: { Category: 45 } }, 
      ],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/categories/count_purchase')
    .then((response)=> {
       console.log(response.data);
      // let chart = [];
      // chart.name = "PHP";
      //chart.data = '{ Category:'+10+'}';
      //chart.data['category'] = 10;
      //this.tableData = chart;
      //console.log(this.tableData);
      // this.tableData.name = response.data.name;
      // console.log(this.tableData.name);
      // let graph = 'Category:'+response.data.purchase_videos_count;
      // this.tableData.data = graph;
      // console.log(this.tableData.data);
      let entries = {};
            response.data.forEach(val => {
                entries[val.name] = val.purchase_videos_count;
                
            })
            this.tableData = entries;
    })
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/user/count')
    .then((response) => {
      console.log(response.data.count)
      this.totalUser= response.data.count;
    })

    axios.get('http://127.0.0.1:8000/api/categories/count')
    .then((response) => {
      this.totalCat= response.data.count;
    })

    axios.get('http://127.0.0.1:8000/api/course/count')
    .then((response) => {
      this.totalCourse= response.data.data;
    })
  }
};
</script>

<style scoped>
.category {
  /* background-image: linear-gradient(to right, #d7bde2, #9b59b6); */
  background-color: #d7bde2;
  border-style: none;
}
.course {
  background-image: linear-gradient(to right, #daf7a6, #82e0aa);
  /* background-color: #daf7a6; */
  border-style: none;
}
.user {
  background-image: linear-gradient(to right, #f5b7b1, #ec7063);
  /* background-color: #f5b7b1; */
  border-style: none;
}
.admincard {
  margin-bottom: 30px;
}
.adminrow {
  margin-bottom: 60px;
}
h5 {
  font-size: 60px;
  margin: 0 auto;
}
h4 {
  text-decoration: none;
}
</style>