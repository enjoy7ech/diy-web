import path from 'path'
import baseWebpackConfig from './server.base'
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  }
})
