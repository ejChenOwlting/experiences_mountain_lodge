const BASE_ROUTE = 'https://www.owlting.com/experiences/ldp/themistlodge2'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '謎霧環山2 巴卡羅的繼承者 ｜奧丁丁體驗 OwlTing Experiences',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '度假解謎新玩法！全台唯一兩天一夜實境解謎「謎霧環山2 巴卡羅的繼承者」，奧丁丁體驗獨家開賣！在環境清幽舒適的台東縣太麻里環山雅築舉辦，含50道豐富謎題與多種結局，結合專業劇場演出給你沈浸式解謎體驗。' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'twitter:site', name: 'twitter:site', content: BASE_ROUTE },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://static.owlting.com/experiences_mountain_lodge/share.jpg' },
      { hid: 'og:title', property: 'og:title', content: '謎霧環山2 巴卡羅的繼承者 ｜奧丁丁體驗 OwlTing Experiences' },
      { hid: 'og:description', property: 'og:description', content: '度假解謎新玩法！全台唯一兩天一夜實境解謎「謎霧環山2 巴卡羅的繼承者」，奧丁丁體驗獨家開賣！在環境清幽舒適的台東縣太麻里環山雅築舉辦，含50道豐富謎題與多種結局，結合專業劇場演出給你沈浸式解謎體驗。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '謎霧環山2 巴卡羅的繼承者 ｜奧丁丁體驗 OwlTing Experiences' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: BASE_ROUTE },
      { hid: 'og:image', property: 'og:image', content: 'https://static.owlting.com/experiences_mountain_lodge/share.jpg' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://static.owlting.com/experiences_mountain_lodge/share.jpg' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '480' },
      { hid: 'og:image:height', property: 'og:image:height', content: '272' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.owlting.com/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap'
      },
      { hid: 'canonical', rel: 'canonical', href: BASE_ROUTE }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/icons/css/owl.css',
    '~/assets/styles/main.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/directives' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 8880,
    host: '0.0.0.0'
  },

  postcss: {
    plugins: [
      require('autoprefixer'),
      require('cssnano')
    ]
  }
}
