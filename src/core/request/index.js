import axios from 'axios'
import qs from 'qs'
import requestInterceptor from './interceptors/request/browser'
import responseInterceptor from './interceptors/response/browser'

// setup interceptor
const setupIntercepors = axios => {
  const [requestResolve, requestReject] = requestInterceptor
  axios.interceptors.request.use(requestResolve, requestReject)
  const [responseResolve, responseReject] = responseInterceptor
  axios.interceptors.response.use(responseResolve, responseReject)
}

let createRequest = () => {}
let apiRoot = `${window.location.protocol}//${window.location.host}`
createRequest = () => {
  const clientRequest = axios.create({
    baseURL: apiRoot,
    paramsSerializer: function(params) {
      return qs.stringify(params)
    }
  })
  setupIntercepors(clientRequest)

  return clientRequest
}

export default createRequest
