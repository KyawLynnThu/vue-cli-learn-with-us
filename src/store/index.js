import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
   results: [],
  },
  getters: {
    searchCourses(state) {
      return state.results;
    }
  },
    mutations: {
      searchCoursesShow(state,results) {
        state.results=results
      }
    },
    actions: {
      async getSearchResults({commit},search) {
        let response = await axios.get(`http://127.0.0.1:8000/api/course/search/${search}`);
        //let searchItem = response.data.data;
        console.log(response.data.data)
        commit('searchCoursesShow', response.data.data)
      },
    },
  });