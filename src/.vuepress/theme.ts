import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  darkmode: "switch",
  hostname: "https://molab.top",

  author: {
    name: "moran0710",
    url: "https://github.com/moran0710",
  },

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "moran0710/MoLabBlog",
  docsBranch: "main",
  docsDir: "src",

  // 导航栏
  navbar,
  footer: "We Need To Do More. | <a href='/rss.xml'>RSS</a> | <a href='/sitemap.xml'>Site Map</a>",
  license: "CC 4.0",

  // 侧边栏
  sidebar,

  // 页脚
  displayFooter: true,

  // 博客相关
  blog: {
    avatar: "https://tc.z.wiki/autoupload/fr/MZ5k-epi0Mh7HEnTf6jc2nJ1g2z4IKY8v7qfC-9y8r6yl5f0KlZfm6UsKj-HyTuv/20251026/2Bjj/1200X1200/fb427e4fa9b2e8a2c9f176d96e0f5cff.png/webp",
    description: "下个单位再见",
    intro: "/intro.html",
    medias: {

    },
  },


  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,


    math: {
       // 启用前安装 katex
     type: "katex",
    },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },
    comment: {
      provider: "Giscus",
      repo: "moran0710/MoLabBlog",
      repoId: "R_kgDOQJfJ4A",
      category: "Comment",
      categoryId: "DIC_kwDOQJfJ4M4CxF9M",
      mapping: "pathname",
      strict: false,
      reactionsEnabled: true,
      inputPosition: "top",

    },
    copyright: {
      author: "moran0710",
      license: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International",
      global: true,
    },

    feed: {
      rss: true,
      json: true,
      atom: true,
    },


    slimsearch: true,

    icon: {
      prefix: "fa6-solid:",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
