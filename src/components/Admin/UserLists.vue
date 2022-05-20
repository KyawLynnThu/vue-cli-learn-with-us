<template>
  <main role="main" class="col-md-9 ml-sm-auto pt-5 px-4 mb-5">
    <div class="d-flex flex-wrap flex-md-nowrap">
      <button class="btn btn-outline-secondary">Add</button>
    </div>

    <h2 class="my-4">User Lists</h2>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-secondary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>balblabla@gmail.com</td>
            <td>Otto</td>
            <td>
              <button class="btn btn-sm btn-outline-secondary mr-2">
                Disable
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Otto</td>
            <td>
              <button class="btn btn-sm btn-outline-secondary mr-2">
                Disable
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button class="btn btn-sm btn-outline-secondary mr-2">
                Disable
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
  name: "UserLists",
};
</script>

<style>
</style>