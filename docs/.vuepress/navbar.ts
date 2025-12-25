/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: 'Blog', items: [
      {text: "文章列表", link:"/blog/"},
        {text: "Tags", link:"/blog/tags/"},
        {text:"归档", link: "/blog/archives/"},
        {text:"分类", link: "/blog/categories/"},
    ]
  }
])