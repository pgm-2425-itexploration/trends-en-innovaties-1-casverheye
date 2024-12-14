import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Portofolio By (Your Name)",
  description: "Welcome to my portfolio site!",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'My Work', link: '/my-work' }
    ],

    sidebar: [
      {
        text: '',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
