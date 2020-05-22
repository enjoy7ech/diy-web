import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './styles/main.scss'
import './components'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle'

/* eslint-disable no-new */
let instance = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

if (window) {
  window.AppRuntimeContext = {
    Vue,
    router,
    store,
    instance
  }
}
