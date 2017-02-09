var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//服务器中使用hmr
var port = '8081'; 
var publicPath = 'http://localhost:'+ port +'/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var webpackConfig = {
	port,
    entry : {
        app : ['./web/app', hotMiddlewareScript]
    },
    output : {
        path : path.resolve('./public/html'),
        filename : '[name]_[hash].js',
        publicPath
    },
    //enable dev source map
    devtool : 'eval-source-map',
    resolve : {
        extensions : ['', '.js', '.vue'],
        alias: {
            vue$ : __dirname + '/node_modules/vue/dist/vue'
        },
        root : './'
    },
    module : {
        loaders : [{
            test : /\.js?$/,
            loaders : ['babel']
        }, {
            test : /\.css$/,
            loaders : ['style', 'css']
        }, {
        	test : /\.less$/,
            loaders : ['style', 'css', 'less']
        }, {
			test : /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpg)$/, 
			loader: "file-loader" 
		}]
    },
    plugins : [
    	//服务器中使用hmr所需要的插件
    	new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //自动生成页面的插件
	    new HtmlWebpackPlugin({
	        template: './templates/app.html'
	    })
	]
};

module.exports = webpackConfig; 