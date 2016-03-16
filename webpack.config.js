/*eslint node: true */
'use strict';

var path = require('path');

module.exports = {
	entry: './src/js/entry.js',
	output: {
		path: path.resolve(__dirname, 'dist', 'js'),
		publicPath: '/js/',
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['', '.jsx', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
