import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'bootstrap-sass'
import './styles/main.scss'
import './components'
import 'jquery'

/* eslint-disable no-new */
let instance = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

if (window) {
  window.AppRuntimeContext = {
    Vue,
    router,
    store,
    instance
  }
}
