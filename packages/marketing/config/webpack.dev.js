const { merge } = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packegJson = require('../package.json')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index:'index.html', 
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html'
    }),
    new moduleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootStrap.js'
      },
      shared: packegJson.dependencies,
    })
  ]
}

module.exports = merge(commonConfig, devConfig);