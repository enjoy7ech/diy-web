import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import merge from 'webpack-merge'
import baseWebpackConfig from './client.base.js'
import copyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'

const config = require('../config')

function resolve(dir) {
  return path.join(__dirname, '../../', dir)
}

export default merge(baseWebpackConfig, {
  mode: 'development',
  target: 'web',
  entry: {
    app: ['./client.js', 'webpack-hot-middleware/client?noInfo=true&reload=true']
  },
  output: {
    path: config.dev.assetsRoot,
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].chunk.[contenthash:8].js',
    publicPath: config.dev.assetsPublicPath
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new copyWebpackPlugin([
      {
        from: resolve('/public'),
        to: config.dev.assetsRoot,
        force: true
      }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    // rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  }
})
