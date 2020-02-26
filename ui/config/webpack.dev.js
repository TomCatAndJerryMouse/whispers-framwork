const merge = require("webpack-merge");
const common = require("./webpack.common.js")
const proxyCfg = require('./proxy.js');
const path = require('path');

module.exports = merge (common,{
    mode:'development', // 模式
    devServer:{ 
        hot:true,
        contentBase:path.join(__dirname,"public"),
        compress:true,
        proxy: {'/rest/':{ 
            target:'http://127.0.0.1:8080',
        }}
    },
})