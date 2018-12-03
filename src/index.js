
const path = require('path')

function myPlugin () {
  console.log(__static__)
}

myPlugin.prototype.apply = function (compiler) {
  
  //compiler 是完整的配置环境
  //compilation 是编译资源

  compiler.plugin('emit', function (compilation, callback) {
    var filelist = 'In this build: \n\n'

    for (var asset in compilation.assets) {
      filelist += ('-' + asset + '\n')


      let ext = path.extname(asset)
      let name = path.basename(asset, ext)
      let dirname = path.dirname(asset)

      console.log('-------ext---------')
      console.log(ext)
      console.log('-------name---------')
      console.log(name)
      console.log('-------dirname---------')
      console.log(dirname)
    }


    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  })
}

module.exports = myPlugin;