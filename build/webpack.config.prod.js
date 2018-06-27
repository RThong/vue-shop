const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
	mode: 'production',
	entry: {
    app: path.join(__dirname, '../src/index')
  },
	output: {
		filename: '[name].[chunkhash:8].bundle.js',
		path: path.join(__dirname, '../dist'),
    // publicPath: 'http://127.0.0.1:8080/'
	},
	module: {
		rules: [
			{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
			{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
      	test: /\.scss/,
        include: [
          path.join(__dirname, '../src/assets/styles/global.scss')
        ],
      	use: [
        	MiniCssExtractPlugin.loader,
        	'css-loader',
        	{
        		loader: 'postcss-loader',
        		options: {
        			sourceMap: true,
        		}
        	},
        	'sass-loader'
      	]
      },
      {
        test: /\.scss/,
        exclude: [
          path.join(__dirname, '../src/assets/styles/global.scss')
        ],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
		]
	},
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,   // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor',  // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        },
      }
    },
    // splitChunks: {
    //  chunks: 'all'
    // },
    runtimeChunk: {
      name: 'manifest'
    }
  },
	plugins: [
		new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "style.[contenthash].css",
      chunkFilename: "style.[contenthash:8].css"
    }),
    new HTMLPlugin({
	    template: path.join(__dirname, '../index.html')
	  }),//html
    new webpack.NamedChunksPlugin()
	]
}

module.exports = config