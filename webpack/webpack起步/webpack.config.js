const path=require('path')//依赖node包相关的东西，一般要建一个packge.json对包进行管理，建包通过npm init
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),//dirname用于拼接路径，为node建立的全局变量，保存的是当前目录的路径
        filename:'bundle.js',
        publicPath:'dist/'  //添加图片路径
    },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  //图片大于13000kb时 会使用file-loader模块进行加载，并且进行重新重新命名，是一个32位hash值，保证名字不会重复
                  //图片小于13000kb时，用url-loader对把图片编译为base64字符串形式
                  limit: 13000, 
                  esModule:false, //防止打包后的代码为ES模块 图片会变成object而不被浏览器识别
                  name:'img/[name].[hash:8].[ext]'  //添加name属性是为了让图片打包后在dist文件下保存一个img文件，之前的名字被填充进[name]里，[hash:8]保证图片名字不重复，保存8位，[ext]为扩展名
                }
              }
            ]
          },
          {
            test: /\.js$/,
            //exclude:排除，不包含该属性后面的文件
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader', //将ES6语法转化为ES5
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}