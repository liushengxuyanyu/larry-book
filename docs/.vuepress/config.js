module.exports = {
  title: 'Larry的面试小书', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'Larry面试小书', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      // { text: '我的面经', link: '/pages/my-interview/' }, // 内部链接 以docs为根目录
      // { text: '前端基础', link: '/pages/base/js-01.md' }, // 内部链接 以docs为根目录
      // { text: '前端框架', link: '/pages/frame/vue-01.md' }, // 内部链接 以docs为根目录
      // { text: '浏览器相关', link: '/pages/browser/安全.md' }, // 内部链接 以docs为根目录
      // { text: '源码系列', link: '/pages/source-code/vue2.md' }, // 内部链接 以docs为根目录
      // { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
      { text: '地图', link: '/pages/map/'},
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }        
    ],
    // sidebar: 'auto'
    sidebar:{
      '/pages/my-interview/': [
        {
          title: '京东',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
              ['test1.md', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
              ['test3.md', '子菜单2']
          ]
        },
        {
            title: 'react',
            collapsable: false, 
            children: [
                ['test2.md', '子菜单1']
            ]
        }
      ],
      '/pages/base/': [
        {
          title: 'HTML',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
              ['html.md', 'html'],  
          ]
        },
        {
          title: 'JS',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
              ['js-01.md', '基础'],  
              ['js-02.md', '进阶'],  
          ]
        },
        {
            title: 'CSS',
            collapsable: false, 
            children: [
                ['css.md', '子菜单1']
            ]
        }
      ],
      '/pages/frame/': [
        {
          title: 'vue',   // 一级菜单名称
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            // 'vue-01.md',
            // 'vue-02.md'
            {
              title: '基础篇',
              sidebarDepth: 1,
              children: ['vue-01.md']
            },
            {
              title: '进阶篇',
              sidebarDepth: 1,
              children: ['vue-02.md']
            },
            {
              title: '面试篇',
              sidebarDepth: 1,
              children: ['面试版.md']
            },
            // ['vue-02.md', '进阶篇']
              // ['vue-01.md', '基础篇'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
              // ['vue-02.md', '进阶篇']
          ]
        },
        {
            title: 'react',
            collapsable: false, 
            children: [
                ['test2.md', '子菜单1']
            ]
        }
      ],
      '/pages/browser/': [
        {
          title: '浏览器相关',
          children: ['浏览器.md']
        },
        {
          title: '安全相关',
          children: ['安全.md']
        },
        {
          title: 'http相关',
          children: ['http.md']
        },
        {
          title: '缓存相关',
          children: ['前端缓存.md']
        },
      ],
      '/pages/source-code/': [
        {
          title: 'Vue2.x',
          children: ['vue2.md']
        },
        {
          title: 'Vue3.x',
          children: ['vue3.md']
        },
        {
          title: 'Element-UI',
          children: ['element-ui.md']
        },
        {
          title: 'Axios',
          children: ['axios.md']
        },
        {
          title: 'qiankun',
          children: ['qiankun.md']
        }
      ]
    }
  }
}