import webpack from 'webpack'
import webpackServerConfig from './webpack/server.build'
import path from 'path'
import rm from 'rimraf'
import ora from 'ora'
import util from 'util'
import env from './config/env'

process.env.NODE_ENV = 'production'

const spinner = ora('building for ' + '\x1B[31m' + env + '\x1B[0m' + ' server...')

let buildServer = () => {
  spinner.start()
  return new Promise((resolve, reject) => {
    webpack(webpackServerConfig, (err, stats) => {
      if (err) {
        spinner.fail()
        throw err
      }
      process.stdout.write(
        stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n'
      )
      if (stats.hasErrors()) {
        spinner.fail()
        process.exit(1)
      }
      spinner.succeed()
      resolve(stats)
    })
  })
}

export default {
  name: 'build server',
  func: buildServer
}
