export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const localePath = useLocalePath();

  let locale = 'en';
  // called right after a new locale has been set
  nuxtApp.hook('i18n:localeSwitched', ({ oldLocale, newLocale }) => {
    console.log('onLanguageSwitched', oldLocale, newLocale);
    locale = newLocale;
  });

  const BASE_URL = config.public.baseUrl;

  const api = $fetch.create({
    baseURL: BASE_URL,
    onRequest({ request, options, error }) {
      const CSRFToken = useCookie('csrftoken');
      if (CSRFToken?.value) {
        options.headers.set('X-CSRFToken', CSRFToken?.value);
      }
      options.headers.set('Accept-Language', locale);
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo(localePath('/login')));
      } else {
        // TODO: toast error messages
      }
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
