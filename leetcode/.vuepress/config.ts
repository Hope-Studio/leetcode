import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  title: "LeetCode",
  description: "LeetCode 练习",

  dest: "./dist",

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  theme,

  shouldPrefetch: false,
});
