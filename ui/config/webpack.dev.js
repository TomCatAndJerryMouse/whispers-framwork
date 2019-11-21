// webpack配置文件，默认找webpack.config.js
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {// 编译入口文件
       app: './src/js/index.js', 
    },
    output: { // 编译输出
        path: path.resolve(__dirname, 'dist'),  // 输出目录参数
        filename: "[name].bundle.js" // 输出文件名
    },
    mode:'production', // 模式
    module:{ // loader
        rules:[
            {// 加载css
                test: /\.css$/,
                use: ["style-loader","css-loader"],
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
            }
        ]
    },
    plugins:[ //插件
        new htmlWebpackPlugin(
            {
                template:"./src/index.html",//页面模板
                hash:true,//为了更好的 cache，可以在文件名后加个 hash。
                minify: {//这个可以把生成的 index.html 文件的内容的没用空格去掉，减少空间
                    //collapseWhitespace: true,
                  },
            }
        ),
    ],
}