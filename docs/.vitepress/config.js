export default {
  title: "Lucky",
  description: "Lucky备忘录",
  base: "/demo-vitepress/",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    siteTitle: "导航",
    nav: [
      { text: "markdown", link: "/markdown/grammar" },
      { text: "备忘录", link: "/memo/other" },
    ],
    sidebar: {
      "/markdown/": [
        {
          text: "markdown",
          collapsed: false,
          items: [
            {
              text: "基本语法",
              link: "/markdown/grammar",
            },
            {
              text: "高级技巧",
              link: "/markdown/skill",
            },
          ],
        },
      ],
      "/memo/": [
        {
          text: "备忘录",
          collapsed: false,
          items: [
            {
              text: "备忘录1",
              link: "/memo/other",
            },
          ],
        },
      ],
    },
  },
};
