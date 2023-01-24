const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:4002/',
  },
  devServer: {
    port: 4002,
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
        counterReact: 'counterReact@http://localhost:5001/remoteEntry.js',
        counterVue: 'counterVue@http://localhost:5002/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
