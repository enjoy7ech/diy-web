import copyWebpackPlugin from 'copy-webpack-plugin'
const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./client.base.js')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    app: './client.js'
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunksSortMode: 'auto'
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // copy custom static assets
    new copyWebpackPlugin([
      {
        from: path.join(__dirname, '../../public/**/*'),
        to: path.join(__dirname, '../../dist/public'),
        force: true
      }
    ])
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](jquery|element-ui|vue|lodash)[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: 1
        },
        commons: {
          minSize: 0,
          minChunks: 2,
          chunks: 'initial',
          name: 'commons'
        }
      }
    }
  }
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (process.argv[3] === 'analyse' || config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
