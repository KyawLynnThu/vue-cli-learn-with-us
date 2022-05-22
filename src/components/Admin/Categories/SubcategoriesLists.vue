<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="d-flex flex-wrap flex-md-nowrap">
      <button class="btn btn-primary">Add</button>
    </div>

    <h2 class="my-4">Category Lists</h2>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-primary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Subcategory Name</th>
            <th scope="col">Courses</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
            <button class="btn btn-outline-secondary mr-md-2  mr-0 mb-sm-0 mb-2"><i class="fas fa-pen "></i></button>
            <button class="btn btn-outline-secondary"><i class="fas fa-trash "></i></button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
            <button class="btn btn-outline-secondary mr-md-2  mr-0 mb-sm-0 mb-2"><i class="fas fa-pen "></i></button>
            <button class="btn btn-outline-secondary"><i class="fas fa-trash "></i></button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>
             <button class="btn btn-outline-secondary mr-md-2  mr-0 mb-sm-0 mb-2"><i class="fas fa-pen "></i></button>
            <button class="btn btn-outline-secondary"><i class="fas fa-trash "></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  name: "SubLists",
};
</script>

<style scoped>
.fa-pen{
  color: blue;
}
.fa-trash{
  color: red;
}
</style>
