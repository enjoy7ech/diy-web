import webpack from 'webpack'
// import copyWebpackPlugin from 'copy-webpack-plugin'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
const utils = require('./utils')
const config = require('../config')

function resolve(dir) {
  return path.join(__dirname, '../..', dir)
}

module.exports = {
  context: path.resolve('./src'),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].bundle.[chunkhash:8].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  resolveLoader: {
    modules: ['node_modules']
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  plugins: [
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: process.env.NODE_ENV !== 'production' ? '[name].css' : '[name].[hash].min.css',
      chunkFilename: process.env.NODE_ENV !== 'production' ? '[id].css' : '[id].[hash].min.css'
    })
  ],
  module: {
    noParse: function(content) {
      return /jquery|lodash/.test(content)
    },
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: './.cache/babel-loader',
            compact: false
          }
        },
        include: [resolve('src')]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './tools/postcss.config.js'
              },
              plugins: loader => [
                require('postcss-url')(),
                require('autoprefixer')(),
                // require('postcss-import')(),
                require('cssnano')(),
                require('postcss-pxtorem')
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },
  // node: {
  //   // prevent webpack from injecting useless setImmediate polyfill because Vue
  //   // source contains it (although only uses it if it's native).
  //   setImmediate: false,
  //   // prevent webpack from injecting mocks to Node native modules
  //   // that does not make sense for the client
  //   dgram: 'empty',
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   child_process: 'empty'
  // },
  stats: {
    colors: true,
    warnings: true
  }
}
