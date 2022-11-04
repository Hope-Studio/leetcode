import { hopeTheme } from "vuepress-theme-hope";
import sidebar from "./sidebar.js";

export default hopeTheme({
  logo: "/logo.png",

  hostname: "https://leetcode.innenu.com",
  author: "LeetCode",

  repo: "https://github.com/Hope-Studio/leetcode",
  docsDir: "leetcode",

  iconAssets: "//at.alicdn.com/t/font_2188267_tbivkbjo7xr.css",

  navbar: [
    { text: "主页", link: "/", icon: "home" },
    {
      text: "LeetCode 主页",
      icon: "leetcode",
      children: [
        { text: "Mister-Hope", link: "https://leetcode.com/Mister-Hope/" },
        { text: "Virgil", link: "https://leetcode-cn.com/u/virgil-7/" },
        { text: "sqm", link: "https://leetcode-cn.com/u/mOAG9JqwNm/" },
        { text: "lizncu", link: "https://leetcode-cn.com/u/lizncu/" },
      ],
    },
  ],

  sidebar,

  pageInfo: ["Author", "PageView", "Category", "Tag"],
  editLink: false,
  lastUpdated: false,

  copyright: "Copyright © 2017-present Hope Studio",
  displayFooter: true,

  plugins: {
    mdEnhance: {
      katex: true,
      sup: true,
      sub: true,
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
  },
});
