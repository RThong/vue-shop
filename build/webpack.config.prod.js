const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
	mode: 'production',
	entry: {
    app: path.join(__dirname, '../src/index')
  },
	output: {
		filename: '[name].[chunkhash:8].js',
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
      	use: [
      	'vue-style-loader',
      	'css-loader',
      	{
      		loader: 'postcss-loader',
      		options: {
      			sourceMap: true,
      		}
      	},
      	'sass-loader',
      	{
          loader: 'sass-resources-loader',
          options: {
            // Provide path to the file with resources
            resources: path.join(__dirname, '../src/assets/styles/global.scss'),
          },
        }, 	
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
      chunks: 'all'
    },
    runtimeChunk: true
  },
	plugins: [
		new VueLoaderPlugin(),
    new HTMLPlugin({
	    template: path.join(__dirname, '../index.html')
	  }),//html
	]
}

module.exports = config