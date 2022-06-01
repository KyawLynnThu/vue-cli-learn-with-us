import Vue from 'vue'
import App from './App.vue'
import '@/assets/js/main'
import 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery'
window.jQuery = jQuery;
import 'bootstrap';
import router from "./router"
import store from "./store"

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js/auto'

Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false

new Vue({
  store,
  router,
  store,
  render: h => h(App),
}).$mount('#app')