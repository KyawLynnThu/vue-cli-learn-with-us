import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/user/HomeView.vue';
import AboutView from '@/views/user/AboutView.vue';
import SearchView from '@/views/user/SearchView.vue';
import CategoryView from '@/views/user/CategoryView.vue';
import CourseDetail from '@/views/user/CourseDetail.vue';
import LogInView from '@/views/user/LogInView';
import SignUpView from '@/views/user/SignUpView';
import UserDashboard from '@/views/user/UserDashboard.vue';
import PasswordSetting from '@/views/user/PasswordSetting.vue';
import UserCourse from '@/views/user/UserCourse.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue';
import SubCategory from '@/views/admin/SubCategory.vue';
import CoursesView from '@/views/admin/CoursesView.vue';
import UserLists from '@/views/admin/UserLists.vue';
import AdminProfileView from '@/views/admin/AdminProfileView';
import CreateCategoryView from '@/views/admin/CreateCategoryView';
import UpdateCategoryView from '@/views/admin/UpdateCategoryView';
import CreateCourseView from '@/views/admin/CreateCourseView';
import UpdateCourseView from '@/views/admin/UpdateCourseView';
import ConfirmCourseView from '@/views/admin/ConfirmCourseView';
import NotFound from '@/views/NotFound.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogInView
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/search",
    name: "Search",
    component: SearchView
  },
  {
    path: "/category",
    name: "Category",
    component: CategoryView
  },
  {
    path: "/detail",
    name: "Detail",
    component: CourseDetail
  },
  {
    path: "/userdashboard",
    name: "userDashboard",
    component: UserDashboard
  },
  {
    path: "/passwordsetting",
    name: "passwordSetting",
    component: PasswordSetting
  },
  {
    path: "/usercourse",
    name: "userCourse",
    component: UserCourse
  },
  //Admin
  {
    path: "/admindashboard",
    name: "AdminDashboard",
    component: AdminDashboard
  },
  {
    path: "/subcategory",
    name: "subCategory",
    component: SubCategory
  },
  {
    path: "/courses",
    name: "Courses",
    component: CoursesView
  },
  {
    path: "/userlists",
    name: "userLists",
    component: UserLists
  },
  {
    path: "/adminprofile",
    name: "adminProfile",
    component: AdminProfileView
  },
  {
    path: "/createcategory",
    name: "createCategory",
    component: CreateCategoryView
  },
  {
    path: "/updatecategory",
    name: "updateCategory",
    component: UpdateCategoryView
  },
  {
    path: "/createcourse",
    name: "createCourse",
    component: CreateCourseView
  },
  {
    path: "/updatecourse",
    name: "updateCourse",
    component: UpdateCourseView
  },
  {
    path: "/confirmcourse",
    name: "confirmCourse",
    component: ConfirmCourseView
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;