<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-4 px-4 mb-5">
    <div class="d-flex flex-wrap flex-md-nowrap">
      <h2 class="my-4">User Lists</h2>
    </div>
    <a href="" class="btn btn-primary mb-4">
      <i class="fas fa-download"></i> &nbsp; Download
    </a>
    <div class="table-responsive">
      <table class="table table-hover text-center">
        <thead class="bg-primary">
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
              <button class="btn btn-danger">
                <i class="fas fa-user-alt-slash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Otto</td>
            <td>
              <button class="btn btn-danger">
                <i class="fas fa-user-alt-slash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button class="btn btn-danger">
                <i class="fas fa-user-alt-slash"></i>
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

<style scoped>
</style>