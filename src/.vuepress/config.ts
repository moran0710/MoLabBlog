import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import viteBundler from "@vuepress/bundler-vite";
import {autoFrontmatterPlugin} from "@vuepress/plugin-auto-frontmatter";
import * as path from "node:path";
import dayjs from "dayjs";

export default defineUserConfig({
  base: "/",
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "MoLab",
  description: "A Little Tech Blog",
  plugins: [
    autoFrontmatterPlugin((data, context) => {
      // 自动填充 title
      data.title = data.title || path.basename(context.relativePath, '.md');
      // 确保返回原始值而不是字符串
      data.date = data.date || dayjs().format('YYYY-MM-DD HH:mm:ss');
      return data;
    }),
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
