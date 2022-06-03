
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        courses: [],
        results: [],
    },
    getters: {
      searchCourses(state) {
        return state.results;
      },
        getCategories(state) {
            return state.categories;
        },
        getCourses(state) {
            return state.courses;
        }
    },
    mutations: {
      searchCoursesShow(state,results) {
        state.results=results
      },
        showCategory(state, categories) {
            state.categories = categories;
        },
        storeCategory(state, category) {
            state.categories.unshift(category);
        },
        removeCategory(state, removeId) {
            state.categories = state.categories.filter(category => {
                return category.id != removeId
            })
        },
        showCourses(state, courses) {
            state.courses = courses;
        },
        removeCourse(state, removeId) {
            state.courses = state.courses.filter(course => {
                return course.id != removeId
            })
        },
    },
    actions: {
        async getCat({ commit }) {
            let res = await axios.get('http://localhost:8000/api/categories');
            let categories = res.data;
            commit('showCategory', categories);
        },
        async deleteCat({ commit }, removeId) {
            await axios.delete(`http://localhost:8000/api/categories/${removeId}`);
            commit('removeCategory', removeId);
        },
        async getCourse({ commit }) {
            let res = await axios.get('http://localhost:8000/api/course/get_all');
            let courses = res.data;
            commit('showCourses', courses);
        },
        async deleteCourse({ commit }, removeId) {
            await axios.delete(`http://localhost:8000/api/course/delete/${removeId}`);
            commit('removeCourse', removeId);
        },
        async getSearchResults({commit},search) {
          let response = await axios.get(`http://127.0.0.1:8000/api/course/search/${search}`);
          commit('searchCoursesShow', response.data.data)
        },
    },
})

