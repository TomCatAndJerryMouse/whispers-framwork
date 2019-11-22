const yargs = require('yargs');
const args = yargs(process.argv.slice(2)).argv;
const { env ,host} = args;
const Webpack = require('webpack');
const webpackConfig = require(`../config/webpack.${env}.js`);
const compiler = Webpack(webpackConfig);
compiler.apply(new Webpack.ProgressPlugin());
compiler.run(function(err, stats) {
    console.log(stats);
    if (err)
    {
        console.log(err);
    }
 });