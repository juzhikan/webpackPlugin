var myplugin = require('./src/index.js')
module.exports = {
  mode: process.env.NODE_ENV === 'prod' ? 'production' : 'development',
  plugins: [
    new myplugin()
  ]
}