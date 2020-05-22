import webpack from 'webpack'
import env from '../config/env'

let externals = _externals()

module.exports = {
  entry: {
    server: './src/server.js'
  },
  target: 'node',
  resolve: {
    extensions: ['.js']
  },
  // 暂时一起打包依赖
  // externals: process.argv[3] === 'all' ? [] : externals,
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(process.env.NODE_ENV),
      __SERVER_ENV__: JSON.stringify(env)
    })
  ]
}
function _externals() {
  let manifest = require('../../package.json')
  let dependencies = manifest.dependencies
  let externals = {}
  for (let p in dependencies) {
    externals[p] = 'commonjs ' + p
  }
  return externals
}
