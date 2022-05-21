import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/user/HomeView.vue';
import AboutView from '../views/user/AboutView.vue';
import SearchView from '../views/user/SearchView.vue';
import CategoryView from '../views/user/CategoryView.vue';
import CourseDetail from '../views/user/CourseDetail.vue';
import LogInView from '../views/user/LogInView';
import SignUpView from '../views/user/SignUpView';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component:HomeView
  },
  {
    path: "login",
    name: "LogIn",
    component:LogInView
  },
  {
    path: "signup",
    name: "SignUp",
    component:SignUpView
  },
  {
    path: "about",
    name: "About",
    component:AboutView
  },
  {
    path: "search",
    name: "Search",
    component:SearchView
  },
  {
    path: "category",
    name: "Category",
    component:CategoryView
  },
  {
    path: "detail",
    name: "Detail",
    component:CourseDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;