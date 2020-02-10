const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// ----------------------------------------------

const mode = process.env.NODE_ENV || 'development'

module.exports = {
	mode,
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	output: { path: path.resolve(__dirname, 'dist') },
	resolve: { extensions: [ '.js', '.jsx' ] },
	module : {
		rules: [
			{
				test: /\.js(x?)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }) ]
}
