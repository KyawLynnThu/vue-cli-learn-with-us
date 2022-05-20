<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h2><a class="navbar-brands ml-3 text-dark font-weight-bold" href="#" style="text-decoration: none;">Learn With Us</a></h2>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active mx-3">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item dropdown mx-3">
        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">PHP</a>
          <a class="dropdown-item" href="#">Ruby</a>
          <a class="dropdown-item" href="#">Java</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 mx-3 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div class="nav-item dropdown my-2 my-lg-0 mx-3">
        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0">
          User One
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">Log Out</a>
        </div>
      </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
</style>