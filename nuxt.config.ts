// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


export default defineNuxtConfig({
  vite: {
    resolve: {
      alias: {
        '@heroicons/vue': '@heroicons/vue'
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  modules: [
    '@nuxtjs/tailwindcss','@element-plus/nuxt',
    '@vueuse/nuxt', '@vueuse/motion/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
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
    '~/assets/css/tailwind.css', '@/assets/element-variables.scss'
  ],
  plugins: [
    '@/plugins/element-plus.ts'
  ],
  build: {
    transpile: ['@vueuse/motion', 'vuetify'],
  },
  vueuse: {
    ssrHandlers: true
  }
})
