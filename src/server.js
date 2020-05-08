import express from 'express'
import portSetting from '../port-settings.js'
import http from 'http'
import path from 'path'
import fs from 'fs'
import errHandler from './error-handler'
import bodyParser from 'body-parser'
// import session from 'express-session'

let app = new express()
app.set('view engine', 'html')
// use session

app.set('trust proxy', 1) // trust first proxy

// session-redis
// var redis = require('redis')
// let redisClient = redis.createClient('6379', '127.0.0.1')
// var RedisStore = require('connect-redis')(session)
// app.use(session({
//   secret: 'zhenxiang property',
//   store: new RedisStore({
//     client: redisClient,
//     ttl: 60 * 60 * 24 * 7 // 7 days
//   }),
//   resave: false,
//   saveUninitialized: true
// }))

// body-parse
app.use(
  bodyParser.json({
    limit: '50000kb'
  })
)
app.use(
  bodyParser.raw({
    limit: '50000kb'
  })
)
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: '50000kb'
  })
)
app.use(
  bodyParser.text({
    type: 'text/xml'
  })
)

// 导入路由
require('./route-api')(app)

// 使用静态资源
if (__ENV__ === 'production') {
  app.use(express.static('public'))
} else {
  app.use(express.static(path.join(__dirname, 'public')))
}

if (__ENV__ === 'production') {
  app.get('/', (req, res, next) => {
    fs.readFile('public/index.html', 'utf8', (err, content) => {
      if (err) {
        next(err)
      } else {
        res.send(content)
      }
    })
  })
}

// 统一处理错误

app.use(errHandler)

let server = http.createServer(app)
// require('./socketServer/server')(server)
// require('./socketServer/server1')(server)
// require('./socketServer/server2')(server)

let port = portSetting.backend || '8000'
server.listen(port, function(err) {
  if (err) {
    throw err
  }
  console.log(`Listening at http://localhost:${port}`) //eslint-disable-line
})

// export default app
