const Webpack = require('webpack');
const webpackConfig = require('../config/webpack.common.js');
const WebpackDevServer = require("webpack-dev-server")
const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: true,
    stats: {
      colors: true,
    },
  });
  const server = new WebpackDevServer(compiler, devServerOptions);

  server.listen(3000, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:3000');
  });