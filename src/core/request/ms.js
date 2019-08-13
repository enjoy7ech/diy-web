import axios from 'axios'
import config from '../../config'
import requestInterceptor from './interceptors/request/ms'
import responseInterceptor from './interceptors/response/ms'

export const createMsRequest = (req, headers) => {
  let requestConfig = {
    baseURL: `http://${config.api}`,
    // baseURL: 'http://localhost:8888',
    headers: {},
    timeout: 20000
  }

  // baseHeader
  if (req.session && req.session.userInfo && req.session.userInfo.role) {
    requestConfig.headers.role = req.session.userInfo.role
  }

  if (headers) {
    requestConfig.headers = headers
  }

  requestConfig.requestContext = req.requestContext
  const client = axios.create(requestConfig)
  // setup interceptor for request
  const [requestResolve, requestReject] = requestInterceptor
  client.interceptors.request.use(requestResolve, requestReject)
  // setup interceptor for response
  const [responseResolve, responseReject] = responseInterceptor
  client.interceptors.response.use(responseResolve, responseReject)

  return client
}

// 这里可以给微服务的公用参数进行设置，放入headers
// export const createDefaultMsRequest = (req, headers) => {
//   return createMsRequest(req, headers)
// }

export default {
  createMsRequest
  // createDefaultMsRequest
}
