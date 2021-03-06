const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const devServer = {
	port: 8080,
	host: '0.0.0.0',
	overlay: {
		errors: true
	},
  headers: {
    'Access-Control-Allow-Origin': '*'
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
		path: path.join(__dirname, '../public'),
    publicPath: 'http://localhost:8080/'
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
      	'sass-loader' 	
      	]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
		]
	},
	devServer,
  resolve: {
    alias: {
      'model': path.join(__dirname, '../model.js')
    }
  },
	plugins: [
		new VueLoaderPlugin(),
    new HTMLPlugin({
	    template: path.join(__dirname, '../index.html'),
      favicon: path.join(__dirname, '../favicon.ico')
	  }),//html
	  new webpack.HotModuleReplacementPlugin(),
    //复制static
    new CopyWebpackPlugin([
    {
      from: path.join(__dirname, '../static/'),
      to: 'static/[name].[hash:8].[ext]',
    }
    ])
	]
}

module.exports = config