import example from './example'

const routes = []

if (__ENV__ === 'development') {
  routes.push(example)
}
export default routes
