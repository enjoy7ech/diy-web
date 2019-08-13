import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  scss: {
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          minimize: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './tools/postcss.config.js'
          }
        }
      },
      {
        loader: 'sass-loader'
      }
    ],
    fallback: 'vue-style-loader'
  },

  less: {
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          minimize: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './tools/postcss.config.js'
          }
        }
      },
      {
        loader: 'less-loader'
      }
    ],
    fallback: 'vue-style-loader'
  },

  css: {
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          minimize: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './tools/postcss.config.js'
          }
        }
      }
    ],
    fallback: 'vue-style-loader'
  }
}
