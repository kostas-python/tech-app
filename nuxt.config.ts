// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/tailwind.css',
  ],
})