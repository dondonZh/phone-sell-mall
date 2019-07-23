var path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: './',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾
  productionSourceMap: true,

  // 允许我们更细粒度的控制 webpack 的内部配置,例如：以下操作我们可以成功修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader 值，将其 limit 限制改为 5M
  chainWebpack: config => {
    // webpack别名设置
    // config.resolve.alias.set('@$', resolve('src'))
    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  // 可以在正式环境下关闭错误报告 console.log...
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    hot: true, // 热加载
    host: '0.0.0.0', // ip地址
    port: 8085, // 端口
    https: false, // false关闭https，true为开启
    open: true, // 自动打开浏览器
    proxy: {
      '/api': { //  本地
        target: 'http://192.168.0.2:8085/',
        // 如果要代理 websockets
        ws: false,
        changeOrigin: true
      },
      '/test': { // 测试
        target: '120.72.63.222'
      },
      '/pre-release': { // 预发布
        target: 'http://XX2X.com/'
      },
      '/production': { // 正式
        target: 'http://X11XX.com/'
      }
    }
  },
  pluginOptions: { // 第三方插件配置
    // ...
  }
}
