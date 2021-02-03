const { config } = require("vuepress-theme-hope");
const sidebar = require("./sidebar");

module.exports = config({
  title: "LeetCode",
  description: "LeetCode 练习",

  dest: "./dist",

  themeConfig: {
    baseLang: "zh-CN",
    logo: "/logo.png",

    hostname: "https://leetcode.innenu.com",
    author: "LeetCode",

    repo: "https://github.com/Hope-Studio/leetcode.github.io",
    repoLabel: "Github",
    docsDir: "leetcode",
    editLinks: false,

    nav: [
      { text: "主页", link: "/", icon: "home" },
      {
        text: "LeetCode 主页",
        icon: "leetcode",
        items: [
          { text: "Mister-Hope", link: "https://leetcode.com/Mister-Hope/" },
          { text: "Virgil", link: "https://leetcode-cn.com/u/virgil-7/" },
          { text: "sqm", link: "https://leetcode-cn.com/u/mOAG9JqwNm/" },
          { text: "lizncu", link: "https://leetcode-cn.com/u/lizncu/" },
        ],
      },
    ],
    sidebar,

    footer: {
      copyright: "Copyright © 2017-present Hope Studio",
      display: true,
    },

    comment: {
      type: "valine",
      appId: "44NUsQa5VeFGM7vFNKDUYX0n-gzGzoHsz",
      appKey: "pMcnfFAhdbRLN73vpejJBxJc",
    },

    pageInfo: ["Author", "Visitor", "Category", "Tag"],

    mdEnhance: {
      sup: true,
      sub: true,
      tex: true,
    },

    lastUpdate: false,

    pwa: {
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
      },
    },
  },
});
