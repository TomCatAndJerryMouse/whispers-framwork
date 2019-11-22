const Webpack = require('webpack');
const webpackConfig = require('../config/webpack.dev.js');
const WebpackDevServer = require("webpack-dev-server")
const compiler = Webpack(webpackConfig);

  const server = new WebpackDevServer(compiler, webpackConfig.devServer);

  server.listen(3000, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:3000');
  });