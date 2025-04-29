// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

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
  tailwindcss: {
    cssPath: join(currentDir, './assets/css/tailwind.css'),
    configPath: join(currentDir, './tailwind.config.js'),
  },
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