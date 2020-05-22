let middleware = require('./core/security').default

module.exports = app => {
  app.use('/apis/*', [middleware.needLogin])
  app.use('/apis/example', require('./apis/example.js').default)
}
