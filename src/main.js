import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueHighcharts from 'vue-highcharts'

Vue.config.productionTip = false
Vue.use(VueHighcharts)
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

console.log(store)
