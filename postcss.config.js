module.exports = {
  plugins: {
    autoprefixer: {
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
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 32;
      },

      propList: ['*','!letter-spacing'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  },
  // plugins: [
  //   require('tailwindcss'),
  //   require('autoprefixer'),
  //   require('postcss-import')
  // ]
}
