const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    externals: {
      'jquery': '$',
      'jWeixin': 'wx'
    }
  }
}
