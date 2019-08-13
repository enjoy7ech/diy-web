
import config from '../config'
import baseWebpackConfig from './server.base'
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  context: config.dev.webpackContextPath,
  entry: {
    server: './server.js'
  },
  target: 'node',
  output: {
    path: config.build.assetsRoot,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  }
})
