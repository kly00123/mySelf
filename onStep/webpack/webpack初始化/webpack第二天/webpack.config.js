const path=require('path')//依赖node包相关的东西，一般要建一个packge.json对包进行管理，建包通过npm init
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),//dirname用于拼接路径，为node建立的全局变量，保存的是当前目录的路径
        filename:'bundle.js',
        publicPath:'dist/'  //添加图片路径
    },
}