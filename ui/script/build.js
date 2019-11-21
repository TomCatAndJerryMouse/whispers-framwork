const Webpack = require('webpack');
const webpackConfig = require('../config/webpack.common.js');
const compiler = Webpack(webpackConfig);
compiler.apply(new Webpack.ProgressPlugin());
compiler.run(function(err, stats) {
    console.log(stats);
    if (err)
    {
        console.log(err);
    }
 });