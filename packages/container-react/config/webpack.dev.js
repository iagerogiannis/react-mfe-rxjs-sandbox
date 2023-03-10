const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:4001/',
  },
  devServer: {
    port: 4001,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'containerReact',
      filename: 'remoteEntry.js',
      exposes: {
        './ContainerReactApp': './src/bootstrap',
        './countStore': './src/stores/countStore'
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
