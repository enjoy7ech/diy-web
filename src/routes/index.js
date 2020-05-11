import example from './example/index'

const routes = [
  example,
  {
    path: '/background-css',
    component: () => import('./background-css/index.vue'),
    meta: { pageTitle: '', pageSubTitle: '' }
  }
]
export default routes
