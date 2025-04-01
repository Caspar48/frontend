export default defineNuxtConfig({
  devtools: { enabled: true },

  // 讓 Nuxt 自動管理 Pinia
  modules: ['@pinia/nuxt'],

  // 確保 Nuxt 以 SSR 模式運行
  ssr: true,

  typescript: {
    strict: true
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000'
    }
  },

  app: {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/your-kit-code.js',
          crossorigin: 'anonymous'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        }
      ]
    }
  },

  compatibilityDate: '2025-04-01'
})