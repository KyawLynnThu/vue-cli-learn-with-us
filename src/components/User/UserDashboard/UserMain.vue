<template>
  <div class="container-fluid border-top border-dark">
    <div class="row">
      <nav class="col-md-3 d-none d-md-block bg-light sideBar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item important">
              <a href="#" class="nav-link text-white my-2 bg-secondary"
                >Profile</a
              >
              <a href="#" class="nav-link text-white my-2 bg-secondary"
                >Password Setting</a
              >
              <a href="#" class="nav-link text-white my-2 bg-secondary"
                >My Courses</a
              >
            </li>
          </ul>
        </div>
      </nav>

      <UserProfile />
    </div>
  </div>
</template>

<script>
import UserProfile from "../UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  name: "UserMain",
};
</script>

<style>
.sideBar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 0;
  box-shadow: inset -1px 0 0 rgb(0 0 0 / 10%);
}

.sidebar-sticky {
  position: sticky;
  top: 48px;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}
a {
  color: black;
}
</style>