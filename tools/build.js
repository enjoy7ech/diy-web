import client from './build-client'
import server from './build-server'
import rm from 'rimraf'
import config from './config'

async function build() {
  // 清理已打包资源
  await rm.sync(config.assets)
  await client.func()
  await server.func()
}

export default {
  name: 'build',
  func: build
}
