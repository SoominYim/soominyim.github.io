const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  // GitHub Pages 배포를 위한 설정 (user site이므로 루트 경로 사용)
  publicPath: "/",

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
