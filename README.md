搭建react 项目
1.  reac-router-dom
2.  typescript
3.  sass/less
4.  ant
5.  webpack配置打包热更新
6.  babel
7.  react react-dom


html-webpack-plugin： html为模板
webpack-dev-server： 启动一个简单的服务器
webpack-merge：合并webpack配置
webpack.DefinePlugin：在编译时创建一些全局变量
webpack.HotModuleReplacementPlugin：用于启用局部模块热重载，开发环境用的
html-webpack-plugin：根据webpack打包生成的bundle，来生成html
add-asset-html-webpack-plugin：跟html-webpack-plugin配合使用，把资源文件引用到它生成的html中
mini-css-extract-plugin：把css抽取到不同的文件中
terser-webpack-plugin：新的压缩js代码插件
optimize-css-assets-webpack-plugin：在webpack打包时优化压缩css代码，主要使用 cssnano 压缩器。
webpack.runtimeChunk：与持久化缓存有关
webpack.splitChunks：webpack 4 最大的改动就是废除了 CommonsChunkPlugin 引入了 optimization.splitChunks，用来配置分包策略。
webpack.DllPlugin：将模块预先编译，它会在第一次编译的时候将配置好的需要预先编译的模块编译在缓存中，第二次编译的时候，解析到这些模块就直接使用缓存
webpack.DllReferencePlugin：将预先编译好的模块关联到当前编译中，当 webpack 解析到这些模块时，会直接使用预先编译好的模块
webpack-bundle-analyzer：webpack打包分析器，可以直观看到各bundle占比
clean-webpack-plugin：清理打包文件夹

<!-- https://juejin.im/post/5d0ccc9ff265da1b934e0a44 -->