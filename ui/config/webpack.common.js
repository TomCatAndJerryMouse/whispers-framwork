// webpack配置文件，默认找webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    node: {
        fs: "empty"
    },
    entry: // 编译入口文件
        [
            "@babel/polyfill",  // 解决ie浏览器兼容问题
            './index.js', 
        ],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.less']
    },

    module:{ // loader
        rules:[
            {// 加载css
                test: /\.(css|less)$/,
                use:["style-loader", "css-loader", "less-loader"]
            },
            { // 对一些对象作为文件来处理，然后可以返回它的URL。
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/'
                    }
                  },
                ]
            },
            {// 把 html 变成导出成字符串的过程中，还能进行压缩处理（minimized）。
                test:/\.html$/,
                use:[{
                    loader:'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader','eslint-loader'],　　　　　　//babel处理器，处理jsx/es6/es7
                //loader: ['babel-loader'],
            }
        ]
    },
    plugins:[ //插件
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin(
            {
                template:"./index.html",//页面模板
                hash:true,//为了更好的 cache，可以在文件名后加个 hash。
                minify: {//这个可以把生成的 index.html 文件的内容的没用空格去掉，减少空间
                    //collapseWhitespace: true,
                  },
            }
        ),
    ],
    output: { // 编译输出
        path: path.resolve(__dirname, '../public'),  // 输出目录参数
        filename: "static/script/[name][hash].bundle.js" // 输出文件名
    },
}