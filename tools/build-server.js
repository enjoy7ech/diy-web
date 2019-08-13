import webpack from 'webpack'
import webpackServerConfig from './webpack/server.build'
import path from 'path'
import rm from 'rimraf'
import ora from 'ora'
import util from 'util'
process.env.NODE_ENV = 'production'

const spinner = ora('building for server...')
let buildServer = async () => {
  util.promisify(rm)(path.resolve('dist', 'server.*.js'))
    .then((stats) => {
      return util.promisify(webpack)(webpackServerConfig)
    })
    .then((stat, err) => {
      if (stat.hasErrors()) {
        process.exit(1)
      } else {
        spinner.succeed()
      }
    })
    .catch(err => {
      spinner.fail()
      throw err
    })
}

export default {
  name: 'build server',
  func: buildServer
}
