import './vue-plugins'

import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.http.options.root = 'http://localhost:3003'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
