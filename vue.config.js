const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
	devServer: {
	    proxy: {
	        '/api': {
	            // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
	            target: 'http://localhost:8095',
	            // 允许跨域
	            changeOrigin: true,
	            ws: true,
	            pathRewrite: {
	                '^/api': ''
	            }
	        }
	    }
	}
}