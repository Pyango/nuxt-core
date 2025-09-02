export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: '',
    },
  },
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
  i18n: {
    langDir: './lang',
    defaultLocale: 'en',
  },
  svgo: {
    componentPrefix: 'icon',
  },
})
