/* eslint-disable no-unused-vars */
import axios from 'axios'
import qs from 'qs'
import requestInterceptor from './interceptors/request/browser'
import responseInterceptor from './interceptors/response/browser'
import nprogress from 'nprogress'
import _ from 'lodash'

const setNp = _.debounce(d => {
  nprogress.set(+d || 1)
}, 200)

// setup interceptor
const setupIntercepors = axios => {
  const [requestResolve, requestReject] = requestInterceptor
  axios.interceptors.request.use(requestResolve, requestReject)
  const [responseResolve, responseReject] = responseInterceptor
  axios.interceptors.response.use(responseResolve, responseReject)
}

let createRequest = () => {}
let apiRoot = `${window.location.protocol}//${window.location.host}`

createRequest = (req, options = { showProgress: true }) => {
  let requestConfig = {
    baseURL: apiRoot,
    // inject token
    headers: {
      Authorization: window.AppRuntimeContext.instance.$cookies.get('token')
    },
    paramsSerializer: function(params) {
      return qs.stringify(params)
    },
    // onUploadProgress(progress) {
    //   options.showProgress && setNp(progress.loaded / progress.total)
    // },
    onDownloadProgress(progress) {
      options.showProgress && setNp(progress.loaded / progress.total)
    }
  }

  const clientRequest = axios.create(requestConfig)
  setupIntercepors(clientRequest)

  if (options.showProgress) {
    setNp(0)
  }
  return clientRequest
}

export default createRequest
