<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="d-flex flex-wrap flex-md-nowrap">
      <button class="btn btn-outline-secondary">Add</button>
    </div>

    <h2 class="my-4">Course Lists</h2>
    <div class="table-responsive">
      <table class="table table-hover text-center">
      <thead class="bg-secondary">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Course Name</th>
          <th scope="col">Subcategory</th>
          <th scope="col">Instructor</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="bg-light ">
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <button class="btn btn-sm btn-outline-secondary mr-2">Edit</button>
            <button class="btn btn-sm btn-outline-secondary">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <button class="btn btn-sm btn-outline-secondary mr-2">Edit</button>
            <button class="btn btn-sm btn-outline-secondary">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <button class="btn btn-sm btn-outline-secondary mr-2">Edit</button>
            <button class="btn btn-sm btn-outline-secondary">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </main>
</template>

<script>
export default {
  name: "CoursesList"
}
</script>

<style>

</style>