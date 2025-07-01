const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  // GitHub Pages 배포를 위한 설정
  publicPath: process.env.NODE_ENV === "production" ? "/soominyim.github.io/" : "/",

  // gh-pages는 기본 dist 폴더 사용
  outputDir: "dist",
  assetsDir: "assets",

  // 성능 최적화
  productionSourceMap: false,

  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },

  // PWA 비활성화 (필요시 주석 해제)
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "public/sw.js",
    },
  },
});
