import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
