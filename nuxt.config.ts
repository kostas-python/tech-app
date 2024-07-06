// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  vite: {
    resolve: {
      alias: {
        '@heroicons/vue': '@heroicons/vue'
      }
    }
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },
  css: [
    '@/assets/css/tailwind.css'
  ]
})
