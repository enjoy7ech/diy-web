module.exports = ({ file, options, env }) => ({
  // parser: 'sugarss',
  plugins: {
    'postcss-url': {},
    // 'postcss-import': {
    //   resolve(id) {
    //     if (id.charAt(0) == '~') {
    //       return id.substr(1)
    //     } else {
    //       return id
    //     }
    //   }
    // },
    'postcss-cssnext': true,
    'postcss-preset-env': {}
    // autoprefixer: {}
    // cssnano: env === 'production' ? options.cssnano : false
    // 'postcss-pxtorem': {
    //   rootValue: 100, // html节点设的font-size大小，由于chrome最小12px，所以基值要设置大写
    //   unitPrecision: 5, // 转rem精确到小数点多少位
    //   propList: ['font', 'font-size', 'line-height', 'letter-spacing'], // 指定转换成rem的属性，支持 * ！
    //   selectorBlackList: [], // str或reg ，指定不转换的选择器，str时包含字段即匹配
    //   replace: true,
    //   mediaQuery: false, // 媒体查询内的px是否转换
    //   minPixelValue: 0 // 小于指定数值的px不转换
    // }
  }
})
