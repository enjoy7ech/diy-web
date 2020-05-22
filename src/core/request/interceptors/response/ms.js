import logger from '../../../../utils/log'

export default [
  response => {
    // logger.debugLog('=======rsponse from backend=======', JSON.stringify(response.data, null, 2))
    return response.data
  },
  error => {
    logger.errLog('=======Error rsponse from backend=======\n', JSON.stringify(error.response.data, null, 2))
    return Promise.reject(error.response.data)
  }
]
