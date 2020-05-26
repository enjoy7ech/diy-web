import path from 'path'
module.exports = {
  assets: path.resolve(__dirname, '../../dist'),
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    serverRoot: path.resolve(__dirname, '../../devServer'),
    assetsRoot: path.resolve(__dirname, '../../devServer/public'),
    cssSourceMap: false,
    cacheBusting: true,
    devtool: 'eval-source-map',
    webpackContextPath: path.resolve('./src')
  },
  build: {
    webpackContextPath: path.resolve('./src'),
    index: path.resolve(__dirname, '../../dist/public/index.html'),
    productionSourceMap: false,
    serverRoot: path.resolve(__dirname, '../../dist'),
    assetsRoot: path.resolve(__dirname, '../../dist/public'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  }
}
