//var myplugin = require('./dist/main.js')
var webpack = require('webpack')
var ASSET_PATH = './cdn'

module.exports = env => {
  return {
    mode: env.production ? 'production' : 'development',
    plugins: [
      //new myplugin(),
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        __static__: JSON.stringify(ASSET_PATH)
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
}