const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  devServer: {
    port: 3002,
    historyApiFallback: {
      index: 'index.html',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'containerVue',
      filename: 'remoteEntry.js',
      exposes: {
        './ContainerVueApp': './src/bootstrap',
      },
      remotes: {
        counterReact: 'counterReact@http://localhost:3011/remoteEntry.js',
        counterVue: 'counterVue@http://localhost:3012/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
