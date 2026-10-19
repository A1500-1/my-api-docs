import { defineConfig } from 'vitepress'

const SITE_URL = 'https://doc.meow61.my'
const SITE_NAME = '水秋喵 API使用教程'
const SITE_DESC = '酒馆、ChatBox、CC Switch、Cherry Studio、RikkaHub 等常见平台的 API 使用教程，附完整模型列表与价格'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: SITE_NAME,
  // 自定义域名部署，站点位于根路径
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/og.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/og.png` }]
  ],
  transformHead({ pageData }) {
    const path = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '')
    const title = pageData.frontmatter.title || pageData.title
    const desc = pageData.frontmatter.description || pageData.description || SITE_DESC
    return [
      ['meta', { property: 'og:url', content: `${SITE_URL}/${path}` }],
      ['meta', { property: 'og:title', content: title ? `${title}｜${SITE_NAME}` : SITE_NAME }],
      ['meta', { property: 'og:description', content: desc }]
    ]
  },
  vite: {
    server: {
      watch: {
        // 忽略 VitePress 的临时目录，避免 Windows 下 EBUSY 崩溃。
        // VitePress 在启动时(配置文件)和每次 HMR 更新 .md 时，都会在被处理文件
        // 旁边创建临时目录，命名形如 .config.mts.<pid>.<uuid>.tmpdir /
        // .chatbox.md.<pid>.<uuid>.tmpdir，因此统一匹配 .tmpdir。
        ignored: [
          /\.tmpdir/,
          /\.vitepress[\\/]cache/,
          /\.vitepress[\\/]dist/,
          // 编辑器原子保存产生的临时文件，如 index.md~RF10892731.TMP（Windows 记事本等）
          /~\w+\.TMP/i,
          /\.swp$/
        ]
      }
    }
  },
  description: "酒馆、ChatBox、CC Switch、Cherry Studio、RikkaHub 等常见平台的 API 使用教程，附完整模型列表与价格",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'API使用教程', link: '/guide/' },
      { text: '模型列表', link: '/guide/models' },
      { text: '购买与套餐', link: '/buy' },
      { text: '水秋喵的小店', link: 'https://shop356416683.taobao.com/' }
    ],

    sidebar: [
      { text: '模型列表', link: '/guide/models' },
      { text: '购买与套餐', link: '/buy' },
      {
        text: 'API使用教程',
        link: '/guide/',
        items: [
          { text: '酒馆 (SillyTavern)', link: '/guide/sillytavern' },
          { text: 'ChatBox', link: '/guide/chatbox' },
          { text: 'CC Switch', link: '/guide/cc-switch' },
          { text: 'Cherry Studio', link: '/guide/cherry-studio' },
          { text: 'RikkaHub', link: '/guide/rikkahub' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清空',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关内容',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上',
              navigateDownKeyAriaLabel: '下',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    }

    // 如需展示店铺/联系方式，在这里加 socialLinks，例如：
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/your-repo' }
    // ]
  }
})
