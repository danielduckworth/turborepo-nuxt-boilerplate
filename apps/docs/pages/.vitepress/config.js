
export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  themeConfig: {
    siteTitle: 'My Custom Title',
    nav: [
      { text: 'Index', link: '/index' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Github', link: '/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Index', link: '/index' },
          { text: 'Getting started', link: '/getting-started' },
        ],
      },
    ],
  },

}
