const debugLog = (title, msg) => {
  if (__ENV__ === 'development') {
    // logger
    require('colors')
    console.log(title.bgGreen + '\n' + msg) //eslint-disable-line
  } else {
    console.log(msg) //eslint-disable-line
  }
}

const errLog = (title, msg) => {
  if (__ENV__ === 'development') {
    // logger
    require('colors')
    console.log(title.bgRed + '\n' + msg) //eslint-disable-line
  } else {
    console.log(msg) //eslint-disable-line
  }
}

export default {
  debugLog,
  errLog
}
