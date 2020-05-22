// server env setting

let env = 'prod'

if (process.argv[3] === 'sit') {
  env = 'sit'
}

if (process.argv[3] === 'prod') {
  env = 'prod'
}
module.exports = env
