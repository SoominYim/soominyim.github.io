const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  outputDir: "./docs",
  productionSourceMap: false,
  configureWebpack: {
    mode: "production",
    devtool: "eval",
  },
});
