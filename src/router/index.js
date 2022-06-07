import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/user/HomeView'
import AboutView from '@/views/user/AboutView'
import SearchView from '@/views/user/SearchView'
import CategoryView from '@/views/user/CategoryView'
import CourseDetail from '@/views/user/CourseDetail'
import LogInView from '@/views/user/LogInView'
import SignUpView from '@/views/user/SignUpView'
import UserDashboard from '@/views/user/UserDashboard'
import PasswordSetting from '@/views/user/PasswordSetting'
import UserCourse from '@/views/user/UserCourse'
import ConfirmSignupView from '@/views/user/ConfirmSignupView'
import AdminDashboard from '@/views/admin/AdminDashboard'
import SubCategory from '@/views/admin/SubCategory'
import CoursesView from '@/views/admin/CoursesView'
import UserLists from '@/views/admin/UserLists'
import AdminProfileView from '@/views/admin/AdminProfileView'
import CreateCategoryView from '@/views/admin/CreateCategoryView'
import UpdateCategoryView from '@/views/admin/UpdateCategoryView'
import CreateCourseView from '@/views/admin/CreateCourseView'
import UpdateCourseView from '@/views/admin/UpdateCourseView'
import ConfirmCourseView from '@/views/admin/ConfirmCourseView'
import UserUpload from '@/views/admin/UserUpload'
import AdminPasswordSetting from '@/views/admin/AdminPasswordSetting'
import NotFound from '@/views/NotFound'
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
    path: "/category/:id",
    name: "Category",
    component: CategoryView
  },
  {
    path: "/detail/:id",
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
    path: "/updatecategory/:id",
    name: "updateCategory",
    component: UpdateCategoryView
  },
  {
    path: "/createcourse",
    name: "createCourse",
    component: CreateCourseView
  },
  {
    path: "/updatecourse/:id",
    name: "updateCourse",
    component: UpdateCourseView
  },
  {
    path: "/confirmcourse",
    name: "confirmCourse",
    component: ConfirmCourseView
  },
  {
    path: "/confirmsignup",
    name: "confirmSignup",
    component: ConfirmSignupView
  },
  {
    path: "/userupload",
    name: "userUpload",
    component: UserUpload
  },
  {
    path: "/adminpasswordsetting",
    name: "adminPasswordSetting",
    component: AdminPasswordSetting
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes, scrollBehavior() {
    return {x:0, y:0}
  }
})

router.beforeEach((to, from, next) => {
  if (to.name === 'adminProfile' || to.name === 'createCategory' || to.name === 'updateCategory' || to.name === 'createCourse' || to.name === 'updateCourse' || to.name === 'confirmCourse' || to.name === 'userUpload' || to.name === 'adminPasswordSetting' || to.name === 'userLists' || to.name === 'AdminDashboard' || to.name === 'Courses' || to.name === 'subCategory') {
    let userType = localStorage.getItem('type');
    if (userType==0) {next()}
    else {next({ name: 'Home' })}
  }
  else {
    next();
 }
})

router.beforeEach((to, from, next) => {
  if (to.name === 'userDashboard' || to.name === 'Detail' || to.name === 'passwordSetting' || to.name === 'userCourse') {
    let userType = localStorage.getItem('type');
    if (userType==1) {
      next()
    }
    else {next({ name: 'LogIn' })}
  }
  else {
    next();
 }
})

export default router;