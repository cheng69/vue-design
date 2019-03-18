const path = require('path')

function resolve(url){
    return path.resolve(__dirname,url)
}

module.exports = {
    // 选项...
    baseUrl:"./",
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    // filenameHashing:true,
    // pages:undefined,
    // lintOnSave:true,
    // runtimeCompiler:false,
    // transpileDependencies:[],
    // productionSourceMap:false,
    // crossorigin:undefined,
    // integrity:false,
    devServer:{//代理
      port:8080,//端口号
      open:true,//配置自动启动浏览器
      proxy:'http://192.168.255.201:8082', // 跨域代理  只代理一个的写法
//       proxy:{   //跨域代理  配置多个代理
//           '/api':{
//               target:'http://',// 需要请求的地址
//             changeOrigin:true, // 是否跨域
//             ws:true,
//             pathRewrite:{
// // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
//                   '^/api':'/'
//               }
//           }
//       }
    },

}