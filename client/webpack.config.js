var webpack = require('webpack');
var path = require('path');

//var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

//webpack needs to know the entry --> output to be able to run successfuly
console.log(__dirname);
var config = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'public'),

  },
 module : {
	 loaders : [
	      {
		test : /\.js$/,
		exclude: /node_modules/,
		loader : 'babel-loader'
	      },
              {
                 test:/\.(s*)css$/,
                 use:['style-loader','css-loader', 'sass-loader']
              }
	    ]

  },
 devServer: {
  	contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        proxy: [{
  context: ["/auth", "/api"],
  target: "http://localhost:5001"
}]
 }
};

module.exports = config;
