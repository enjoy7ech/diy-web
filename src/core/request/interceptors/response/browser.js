export default [
  response => {
    return response.data
  },
  error => {
    if (error.response.data.status && error.response.data.status === 401) {
      // needLogin
      window.AppRuntimeContext.instance.$notify.error({
        title: '错误',
        message: '请先登录'
      })
      window.location.href = '/'
    } else if (error.response.data.status && error.response.data.status === 402) {
      // needLogin
      window.AppRuntimeContext.instance.$notify.error({
        title: '错误',
        message: '权限不足，请联系管理员'
      })
    } else if (error.response.data.status && error.response.data.status === 500) {
      // business error
      if (error.response.data.message) {
        window.AppRuntimeContext.instance.$notify.error({
          title: '错误',
          message: error.response.data.message
        })
      }
    } else {
      // system error
      window.AppRuntimeContext.instance.$notify.error({
        title: '错误',
        message: '系统内部错误'
      })
    }

    // logger.errLog('=======Error response from frontend=======', error.response.data)
    return Promise.reject(error.response.data.data)
    // return error.response.data.data
  }
]
