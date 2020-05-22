/* eslint-disable no-unused-vars */
import axios from 'axios'
import config from '../../config'
import requestInterceptor from './interceptors/request/ms'
import responseInterceptor from './interceptors/response/ms'
import qs from 'qs'
import _ from 'lodash'

export const createMsRequest = (req, options) => {
  let requestConfig = {
    baseURL: `http://${config.api}`,
    // baseURL: 'http://localhost:8888',
    headers: {},
    timeout: 20000
  }

  if (options) {
    _.assign(requestConfig, options)
  }

  //inject token
  requestConfig.headers.authorization = `Bearer ${req.headers.authorization || ''}`

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
export const createDefaultMsRequest = (req, options) => {
  options = options || {}
  options.transformRequest = [
    function(data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      ret = ret.substring(0, ret.lastIndexOf('&'))
      return ret
    }
  ]
  return createMsRequest(req, options)
}

export default {
  createMsRequest,
  createDefaultMsRequest
}
