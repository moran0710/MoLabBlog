import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    link: "/",
  },{
    text: "文章",
    link: "/article/",
  },{
    text: "地图",
    children: [
      {
        text: "分类",
        link: "/category/"
      },
      {
        text: "标签",
        link: "/tag/"
      },
        {
          text: "时间轴",
          link: "/timeline/"
        }
    ]
  }


]);
