import logger from '../../../../utils/log'

export default [
  response => {
    logger.debugLog('=======Response from backend=======', JSON.stringify(response.data))
    return response.data.data
  },
  error => {
    logger.errLog('=======Error rsponse from backend=======', JSON.stringify(error.response.data, null, 2))
    return Promise.reject(error.response.data)
  }
]
