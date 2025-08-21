import SimpleBar from 'simplebar-vue/dist/simplebar-vue.esm.js'
import 'simplebar-vue/dist/simplebar.min.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('SimpleBar', SimpleBar)
})
