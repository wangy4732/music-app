import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import Vuex from 'vuex'
import store from './store.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
