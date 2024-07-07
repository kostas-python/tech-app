

import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus'
import '@/assets/element-variables.scss' 
import 'element-plus/dist/index.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ElementPlus)
})
