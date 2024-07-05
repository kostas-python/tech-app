// https://nuxt.com/docs/api/configuration/nuxt-config
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
  modules: ['@nuxtjs/tailwindcss',],
  css: [
    '@/assets/css/tailwind.css',
  ],
})