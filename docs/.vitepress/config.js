export default {
  title: "Lucky",
  description: "Lucky备忘录",
  base: "/demo-vitepress/",
  themeConfig: {
    siteTitle: "导航",
    nav: [{ text: "test", link: "/test/" }],
    sidebar: [
      {
        text: "测试",
        items: [{ text: "test", link: "/test/" }],
      },
    ],
  },
};
