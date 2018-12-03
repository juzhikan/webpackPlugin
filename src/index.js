
function myPlugin () {

}

myPlugin.prototype.apply = function (compiler) {
  
  //compiler 是完整的配置环境
  //compilation 是编译资源

  compiler.plugin('emit', function (compilation, callback) {
    var filelist = 'In this build: \n\n'

    for (var asset in compilation.assets) {
      filelist += ('-' + asset + '\n')
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