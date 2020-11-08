const { config } = require("vuepress-theme-hope");
const sidebar = require("./sidebar");

module.exports = config({
  title: "LeetCode",
  description: "LeetCode 练习",

  headOption: {
    icon: "/favicon.ico",
    pwa: {
      manifest: "/manifest.json",
      themeColor: "#5c92d1",
      appleStatusBarColor: "black",
      appleIcon: "/assets/icon/apple-icon-152.png",
      msTileImage: "/assets/icon/ms-icon-144.png",
      msTileColor: "#ffffff",
    },
  },

  temp: "./node_modules/.temp/doc/",
  dest: "./dist",

  themeConfig: {
    baseLang: "zh-CN",
    logo: "/logo.png",

    nav: [
      { text: "主页", link: "/", icon: "home" },
      {
        text: "LeetCode 主页",
        icon: "leetcode",
        items: [
          { text: "Mister-Hope", link: "https://leetcode.com/Mister-Hope/" },
          { text: "Virgil", link: "https://leetcode-cn.com/u/virgil-7/" },
        ],
      },
    ],
    sidebar,

    author: "Mr.Hope",

    footer: {
      copyright: "Copyright © 2017-present Hope Studio",
      display: true,
    },

    hostname: "https://leetcode.innenu.com",

    pageInfo: ["Visitor", "Category", "Tag"],

    comment: {
      type: "valine",
      appId: "44NUsQa5VeFGM7vFNKDUYX0n-gzGzoHsz",
      appKey: "pMcnfFAhdbRLN73vpejJBxJc",
    },

    mdEnhance: {
      sup: true,
      sub: true,
      tex: true,
    },

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

    repo: "https://github.com/Hope-Studio/leetcode.github.io",
    repoLabel: "Github",
    docsDir: "exercise",
    editLinks: false,
  },
});
