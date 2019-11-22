const merge = require("webpack-merge");
const common = require("./webpack.common.js")
const path = require('path');

module.exports = merge (common,{
    mode:'development', // 模式
    devServer:{ 
        hot:true,
        contentBase:path.join(__dirname,"public"),
        compress:true,
    },
})