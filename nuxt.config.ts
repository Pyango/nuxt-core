export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'reka-ui/nuxt',
    '@nuxtjs/i18n',
    'nuxt-svgo',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/image',
  ],
  seo: {
    automaticDefaults: false
  },
  svgo: {
    componentPrefix: 'icon',
  },
})
