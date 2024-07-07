// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import { transformAssetUrls } from 'vite-plugin-vuetify'


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
        
      ],

      tailwindcss: {
        cssPath: [
          '~/assets/css/tailwind.css', 
          { injectPosition: 0 }],
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
        transpile: ['@vueuse/motion'],
      },

      vueuse: {
        ssrHandlers: true
   }
})
