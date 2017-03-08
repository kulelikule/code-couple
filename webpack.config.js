var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//打包样式
var extractCSS = new ExtractTextPlugin('css/vendor.css');
var extractLESS = new ExtractTextPlugin('css/style.css');

//服务器中使用hmr
var port = '8081'; 
var publicPath = 'http://localhost:'+ port +'/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var webpackConfig = {
	port,
    entry : {
	    vendor: ['vue', 'vuex', 'vue-router'],
        app : ['./web/app', hotMiddlewareScript]
    },
    output : {
        path : path.resolve('./public/html'),
        filename : '[name]_[hash].js',
        publicPath
    },
    //enable dev source map
    devtool : 'source-map',
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
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
            loader : extractCSS.extract('style', 'css?sourceMap')
        }, {
        	test : /\.less$/,
            loader : extractLESS.extract('style', 'css?sourceMap!postcss?sourceMap!less?sourceMap')
        }, {
			test : /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpg)$/, 
			loader: "file-loader" 
		}]
    },
    vue: {
        loaders: {
            less: extractLESS.extract('style', 'css?sourceMap!postcss?sourceMap!less?sourceMap'),
        }
    },
    plugins : [
    	//服务器中使用hmr所需要的插件
    	new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //自动生成页面的插件
	    new HtmlWebpackPlugin({
	        template: './templates/app.html'
	    }),
        //公用js单独打包
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        //样式打包
        extractCSS,
        extractLESS
	]
};

module.exports = webpackConfig; 