const { merge } = require('webpack-merge');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packegJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new moduleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootStrap.js'
      },
      shared: packegJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);