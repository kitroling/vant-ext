module.exports = {
  name: 'vant-ext',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/vant-ext/',
    },
  },
  site: {
    title: 'vant-ext',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'responsive',
            title: 'Responsive 比例盒子',
          },
          {
            path: 'parallax',
            title: 'Parallax 视差',
          },
        ],
      },
      {
        title: '指令',
        items: [
          {
            path: 'click-outside',
            title: 'ClickOutside 点击外部',
          },
        ],
      },
      {
        title: '即将到来',
        items: [
          {
            path: 'amount',
            title: 'Amount 金融数字',
          },
          {
            path: 'captcha',
            title: 'Captcha 验证码',
          },
          {
            path: 'checker',
            title: 'Checker 复选标签',
          },
          {
            path: 'detail-list',
            title: 'DetailList 清单',
          },
          {
            path: 'water-mark',
            title: 'WaterMark 水印',
          },
        ],
      },
    ],
  },
};
