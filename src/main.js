import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(require('vue-moment'));
axios.defaults.headers.common['Authorization'] = store.getters.getToken
Vue.prototype.$server = 'http://192.168.108.127:4000/admin/api/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
