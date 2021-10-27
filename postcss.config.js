
// https://github.com/cuth/postcss-pxtorem#readme
module.exports = {
  "plugins": {
    'autoprefixer': {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
        //'last 2 versions', // 所有主流浏览器最近2个版本
      ],
      grid: true
    },
    "postcss-pxtorem": {
      // rootValue: 37.5, // Vant 官方根字体大小是 37.5, 结果为：设计稿元素尺寸/37.5，比如元素宽375px,最终页面会换算成 10rem
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 32;
      }, // 设计稿的尺寸为320
      
      propList: ['*','!letter-spacing'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}
