import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  title: "LeetCode",
  description: "LeetCode 练习",
  lang: "zh-CN",

  dest: "./dist",


  theme,

  shouldPrefetch: false,
});
