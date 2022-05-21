<template>
  <main role="main" class="col-md-9 ml-sm-auto pt-5 px-4 mb-5">
    <h2 class="my-4">My Courses</h2>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-secondary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Courses Name</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Value</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Free</td>
            <td>
              <button class="btn btn-sm btn-outline-secondary mr-2">
                Start
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Free</td>
            <td>
              <button class="btn btn-sm btn-outline-secondary mr-2">
                Start
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  name: "UserCourses",
};
</script>

<style>
</style>