// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: '',
    },
  },
  ignore: [
    process.env.ENVIROMENT === 'production' ? 'pages/layers/*' : '',
  ],
  modules: [
    'reka-ui/nuxt',
    "@nuxtjs/tailwindcss",
    '@nuxtjs/i18n',
    'nuxt-svgo',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxt/fonts',
  ],
  i18n: {
    langDir: './lang',
    defaultLocale: 'en',
    locales: [
      { code: 'en', file: 'en.json' },
    ],
  },
  svgo: {
    componentPrefix: 'icon',
  },
})
