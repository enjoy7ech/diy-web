import config from '../config'
import baseWebpackConfig from './server.base'
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: config.build.serverRoot,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  }
})
