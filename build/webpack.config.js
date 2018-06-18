const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const devServer = {
	port: 8080,
	host: '0.0.0.0',
	overlay: {
		errors: true
	},
	historyApiFallback: {
		index: '/index.html'
	},//history模式手动刷新url会发送请求，出现错误
	hot: true
}

const config = {
	mode: 'development',
	entry: path.join(__dirname, '../src/index'),
	output: {
		filename: 'bundle.[hash:8].js',
		path: path.join(__dirname, '../dist'),
    // publicPath: 'http://localhost:8080/'
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
	devServer,
	plugins: [
		new VueLoaderPlugin(),
    new HTMLPlugin({
	    template: path.join(__dirname, '../index.html')
	  }),//html
	  new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

	]
}

module.exports = config