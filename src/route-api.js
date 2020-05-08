import middleware from './core/security'

module.exports = app => {
  app.use('/apis/*', [middleware.needLogin])
  app.use('/apis/example', require('./apis/example.js').default)
}
