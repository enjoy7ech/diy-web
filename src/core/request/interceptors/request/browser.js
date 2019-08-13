import logger from '../../../../utils/log'

export default [
  config => {
    return config
  },
  error => {
    logger.errLog('=======Error request from broswer=======', JSON.stringify(error, null, 2))
    return Promise.reject(error.response.data)
  }
]
