import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import '@/icons' // icon
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api'
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
