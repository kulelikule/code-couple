var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
    entry : {
        app : './js/app'
    },
    output : {
        path : './output/js',
        filename : '[name]_[hash].js'
    },
    //enable dev source map
    devtool : 'eval-source-map',
    //enable dev server
    devServer : {
        historyApiFallback : true,
        hot : true,
        inline : true,
        progress : true
    },
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
	    new HtmlWebpackPlugin({
	        template: './templates/app.html'
	    })
	]
};

module.exports = webpackConfig; 