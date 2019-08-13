import path from 'path'
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: false,
    cacheBusting: true,
    devtool: 'eval-source-map',
    webpackContextPath: path.resolve('./src')
  },
  build: {
    webpackContextPath: path.resolve('./src'),
    index: path.resolve(__dirname, '../../dist/public/index.html'),
    productionSourceMap: true,
    assetsRoot: path.resolve(__dirname, '../../dist/public'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  }
}
