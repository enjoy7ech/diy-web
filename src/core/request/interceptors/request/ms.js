import logger from '../../../../utils/log'

export default [
  config => {
    logger.debugLog('=======request from frontend=======', JSON.stringify(config, null, 2))

    return config
  },
  error => {
    logger.errLog('=======Error request from frontend=======', JSON.stringify(error, null, 2))
  }
]
