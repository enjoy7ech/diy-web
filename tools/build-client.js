import webpack from 'webpack'
import webpackClientConfig from './webpack/client.build'
import ora from 'ora'
import rm from 'rimraf'
import config from './config'
import env from './config/env'

const spinner = ora('building for ' + '\x1B[31m' + env + '\x1B[0m' + ' client...')

process.env.NODE_ENV = 'production'

function buildClient() {
  spinner.start()
  return new Promise((resolve, reject) => {
    webpack(webpackClientConfig, (err, stats) => {
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
  name: 'build client',
  func: buildClient
}
