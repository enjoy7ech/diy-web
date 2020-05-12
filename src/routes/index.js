import dashboard from './dashboard'
import taskManage from './task-manage'
import propertyList from './property-list'
import weekPassword from './week-password'
import example from './example'

const routes = [dashboard, taskManage, propertyList, weekPassword]

if (__ENV__ === 'development') {
  routes.push(example)
}
export default routes
