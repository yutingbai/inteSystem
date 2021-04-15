module.exports = {
  devServer: {
    // hot: true,
    clientLogLevel: 'warning',
    proxy: {
      '/inte': { 
        target: "http://127.0.0.1:3000", //目标地址，一般是指后台服务器地址
        changeOrigin: true, //是否跨域
        pathRewrite: { 
          '^/inte': ""
        }
      }
    }
  }
}
