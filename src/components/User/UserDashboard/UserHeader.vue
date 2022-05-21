<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white">
    <h1>
      <a class="navbar-brand font-weight-bolder" href="#">LearningWithus</a>
    </h1>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample04">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active mx-3">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link" href="#">Categories</a>
        </li>
        <li>
          <form class="form-inline my-md-0 mx-3">
            <input
              class="form-control text-center"
              type="text"
              placeholder="Search"
            />
          </form>
        </li>
        <li class="nav-item dropdown mx-3">
          <div class="dropdown">
            <button class="dropbtn">User</button>
            <div class="dropdown-content">
              <a href="#">Dashboard</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "UserHeader",
};
</script>

<style>
.dropbtn {
  padding: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #f1f1f1;
}
</style>
